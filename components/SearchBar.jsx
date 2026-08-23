"use client";

export default function SearchBar({ value, onChange, placeholder = "Search the ledger…" }) {
  return (
    <div className="flex items-center gap-3 rounded-sm border border-line px-4 py-3 focus-within:border-edge/50">
      <span className="font-mono text-muted">$</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent font-mono text-sm text-paper placeholder:text-muted focus:outline-none"
        aria-label="Search tools"
      />
    </div>
  );
}
