"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl">
      <input
        type="text"
        placeholder="設定を検索... (例: エディタ、チャット、Tab補完)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 pl-4 pr-4 bg-surface border border-border text-white placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="設定を検索"
      />
    </div>
  );
}

