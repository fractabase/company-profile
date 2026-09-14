import { createContext, useContext } from "react";

export const THEME_STORAGE_KEY = "fractabase-theme";
export const THEMES = ["light", "dark", "device"];

/**
 * Theme context shape:
 * - mode: "light" | "dark" | "device"  (user's selected preference; "device" = follow OS)
 * - resolved: "light" | "dark"          (the actually-applied theme)
 * - setThemeMode(next): set an explicit mode
 * - cycleTheme(): cycle light -> device -> dark -> light (kept for convenience)
 */
export const ThemeContext = createContext({
  mode: "device",
  resolved: "light",
  setThemeMode: () => {},
  cycleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}
