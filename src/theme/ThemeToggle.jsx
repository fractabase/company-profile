import { Icons } from "../components/common/Icons";
import { useTheme } from "./ThemeContext";

const OPTIONS = [
  { key: "light", label: "Mode terang", Icon: Icons.Sun },
  { key: "dark", label: "Mode gelap", Icon: Icons.Moon },
  { key: "device", label: "Ikuti preferensi perangkat", Icon: Icons.Monitor },
];

const CYCLE_ORDER = ["light", "dark", "device"];

export function ThemeToggle({ className = "" }) {
  const { mode, setThemeMode } = useTheme();

  const cycleTheme = () => {
    const currentIndex = CYCLE_ORDER.indexOf(mode);
    const nextIndex = (currentIndex + 1) % CYCLE_ORDER.length;
    setThemeMode(CYCLE_ORDER[nextIndex]);
  };

  const activeOption = OPTIONS.find((o) => o.key === mode);
  const ActiveIcon = activeOption?.Icon ?? Icons.Monitor;

  return (
    <div className={className}>
      {/* Single button for <lg (≤md and below) — shows active icon, cycles on click */}
      <button
        type="button"
        onClick={cycleTheme}
        aria-label={`Tema aktif: ${activeOption?.label}. Klik untuk mengganti.`}
        title={activeOption?.label}
        className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface/60 text-primary-color hover:bg-primary/10 hover:text-primary transition dark:bg-dark-surface/60"
      >
        <ActiveIcon className="h-4 w-4" />
      </button>

      {/* 3-button group for ≥lg (desktop) */}
      <div
        role="group"
        aria-label="Pengaturan tema"
        className="hidden lg:flex items-center gap-0.5 rounded-lg border border-line bg-surface/60 p-0.5 transition dark:bg-dark-surface/60"
      >
        {OPTIONS.map(({ key, label, Icon }) => {
          const active = mode === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setThemeMode(key)}
              aria-label={label}
              aria-pressed={active}
              title={label}
              className={`flex h-8 w-8 items-center justify-center rounded-md transition ${
                active
                  ? "bg-primary text-dark"
                  : "text-primary-color hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <Icon className="h-4 w-4" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
