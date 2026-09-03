import { useCallback, useEffect, useState } from "react";
import { ThemeContext, THEMES, THEME_STORAGE_KEY } from "./ThemeContext";

function getSystemDark() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function resolveTheme(mode) {
  if (mode === "dark") return "dark";
  if (mode === "light") return "light";
  // "device" (default) — follow the OS preference
  return getSystemDark() ? "dark" : "light";
}

function applyResolved(resolved) {
  const root = document.documentElement;
  root.setAttribute("data-theme", resolved);
  root.style.colorScheme = resolved;
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (THEMES.includes(saved)) return saved;
    }
    return "device"; // default preference = follow the device/OS
  });

  // Apply the resolved theme on every mode change, and keep following the OS
  // while in "device" mode.
  useEffect(() => {
    const apply = () => applyResolved(resolveTheme(mode));
    apply();
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      /* storage may be unavailable (private mode) — non-fatal */
    }

    if (mode !== "device" || !window.matchMedia) return undefined;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyResolved(resolveTheme("device"));
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mode]);

  const setThemeMode = useCallback((next) => {
    if (THEMES.includes(next)) setMode(next);
  }, []);

  const cycleTheme = useCallback(() => {
    setMode((prev) => {
      const i = THEMES.indexOf(prev);
      return THEMES[(i + 1) % THEMES.length];
    });
  }, []);

  const resolved = resolveTheme(mode);

  return (
    <ThemeContext.Provider value={{ mode, resolved, setThemeMode, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
