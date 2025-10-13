"use client";

import { useState, useCallback } from "react";
import type { SettingItem } from "@/lib/types/settings";

interface SettingListProps {
  items: SettingItem[];
}

export function SettingList({ items }: SettingListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-white mb-2">設定が見つかりませんでした</p>
        <p className="text-gray-400">別のキーワードで検索してみてください</p>
      </div>
    );
  }

  return (
    <ul className="space-y-0" role="list">
      {items.map((item) => {
        const isExpanded = expandedId === item.id;
        return (
          <li
            key={item.id}
            className="border-b border-[#2B2B2B] hover:bg-[#232323] transition-colors"
          >
            <button
              onClick={() => toggleExpand(item.id)}
              className="w-full text-left px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded"
              aria-expanded={isExpanded}
              aria-controls={`desc-${item.id}`}
            >
              <div className="flex items-center gap-2">
                <div className="min-w-0 flex-1 flex items-baseline gap-2">
                  <h3 className="text-white font-medium">{item.nameJa}</h3>
                  <span className="text-xs text-gray-500">{item.nameEn}</span>
                  {item.isPro && (
                    <span className="text-xs text-gray-500">[Pro限定]</span>
                  )}
                </div>
                <span className="ml-2 inline-flex items-center gap-1 text-xs text-gray-400 bg-[#1E1E1E] px-2 py-0.5 rounded border border-[#2E2E2E]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  >
                    <path
                      fill="currentColor"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.06l3.71-2.83a.75.75 0 1 1 .92 1.18l-4.17 3.18a.75.75 0 0 1-.92 0L5.21 8.41a.75.75 0 0 1 .02-1.2z"
                    />
                  </svg>
                </span>
              </div>

              {isExpanded && (
                <ul
                  id={`desc-${item.id}`}
                  className="mt-3 ml-2 text-sm text-gray-300 space-y-1.5"
                  role="list"
                >
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1 text-xs">•</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

