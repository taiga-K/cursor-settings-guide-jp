"use client";

import clsx from "clsx";
import type { Category } from "@/lib/types/settings";

interface SidebarNavProps {
  categories: Category[];
  currentCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function SidebarNav({ categories, currentCategory, onCategoryChange }: SidebarNavProps) {
  return (
    <nav className="space-y-1" aria-label="カテゴリナビゲーション">
      {categories.map((category) => (
        <button
          type="button"
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={clsx(
            "w-full text-left px-4 py-3 rounded-lg transition-all relative",
            currentCategory === category.id
              ? "bg-blue-500/10 text-blue-400"
              : "text-gray-400 hover:text-white hover:bg-gray-800",
          )}
          aria-current={currentCategory === category.id ? "page" : undefined}
        >
          {currentCategory === category.id && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r" />
          )}
          <span className="block ml-2">{category.name}</span>
        </button>
      ))}
    </nav>
  );
}
