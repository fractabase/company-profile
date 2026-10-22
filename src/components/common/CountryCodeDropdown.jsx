import { useEffect, useRef, useState } from "react";
import { Icons } from "./Icons";

/**
 * CountryCodeDropdown — Reusable country code selector untuk phone input
 * Extracted dari ContactSection.jsx untuk dipakai di multiple forms
 */
export default function CountryCodeDropdown({ value, onChange, codes }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);
  const inputRef = useRef(null);

  const selected = codes.find((code) => code.code === value) || codes[0];

  const filtered = codes.filter(
    (code) =>
      code.country.toLowerCase().includes(query.toLowerCase()) ||
      code.code.includes(query) ||
      code.label.includes(query),
  );

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const handleSelect = (code) => {
    onChange(code);
    setOpen(false);
    setQuery("");
  };

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 py-2.5 h-full rounded-l border-0 border-r border-r-primary/30 bg-surface text-primary-color focus:outline-none focus:ring-0 cursor-pointer hover:bg-primary/5 transition"
        aria-label="Pilih kode negara"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{selected.flag}</span>
        <span className="text-sm font-medium">{selected.label}</span>
        <Icons.ChevronDown className="w-3.5 h-3.5 text-secondary-color" />
      </button>

      {open && (
        <div className="absolute z-50 top-full left-0 mt-1 w-56 max-h-64 overflow-hidden rounded-lg border border-primary bg-surface shadow-lg shadow-primary/10">
          <div className="p-2 border-b border-primary/20">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari negara atau kode..."
              className="w-full px-3 py-1.5 text-sm rounded border border-primary/30 bg-surface text-primary-color placeholder:text-secondary-color/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30"
            />
          </div>
          <ul className="overflow-y-auto max-h-48 py-1">
            {filtered.length === 0 ? (
              <li className="px-3 py-2 text-sm text-secondary-color/60 text-center">Tidak ditemukan</li>
            ) : (
              filtered.map((c) => (
                <li key={c.code}>
                  <button
                    type="button"
                    onClick={() => handleSelect(c.code)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-sm transition ${
                      c.code === value
                        ? "bg-primary/10 text-primary-color font-medium"
                        : "text-primary-color hover:bg-primary/5"
                    }`}
                  >
                    <span className="text-base leading-none">{c.flag}</span>
                    <span className="flex-1 truncate">{c.country}</span>
                    <span className="text-secondary-color text-xs font-mono">{c.label}</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
