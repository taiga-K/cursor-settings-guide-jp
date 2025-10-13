"use client";

import { useState, useMemo, useCallback } from "react";
import { SearchBar } from "@/components/SearchBar";
import { SidebarNav } from "@/components/SidebarNav";
import { SettingList } from "@/components/SettingList";
import { categories, settingsData } from "@/lib/data/settings";

export default function HomePage() {
  const [currentCategory, setCurrentCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentCategoryName = useMemo(
    () => categories.find((c) => c.id === currentCategory)?.name || "",
    [currentCategory]
  );

  const filteredItems = useMemo(() => {
    const items = settingsData[currentCategory] || [];
    if (!searchQuery.trim()) return items;

    const query = searchQuery.toLowerCase();
    return items.filter(
      (item) =>
        item.nameJa.toLowerCase().includes(query) ||
        item.nameEn.toLowerCase().includes(query) ||
        item.description.some((desc) => desc.toLowerCase().includes(query)) ||
        item.category?.toLowerCase().includes(query)
    );
  }, [currentCategory, searchQuery]);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setCurrentCategory(categoryId);
    setSearchQuery("");
    setIsMobileMenuOpen(false);
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4 mb-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:bg-gray-800 p-2 rounded"
              aria-label="メニュー"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <span>✕</span>
              ) : (
                <span>≡</span>
              )}
            </button>

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold">
                C
              </div>
              <div>
                <h1 className="text-lg font-semibold">
                  Cursor Settings Guide JP
                </h1>
                <p className="text-xs text-gray-400">日本語設定リファレンス</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-sm text-gray-400 mb-3 px-4">カテゴリ</h2>
              <SidebarNav
                categories={categories}
                currentCategory={currentCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </aside>

          {/* Mobile Sidebar */}
          {isMobileMenuOpen && (
            <aside
              className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur p-4"
              role="dialog"
              aria-label="カテゴリメニュー"
            >
              <div className="mb-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:bg-gray-800 p-2 rounded"
                  aria-label="閉じる"
                >
                  ✕
                </button>
              </div>
              <h2 className="text-sm text-gray-400 mb-3 px-4">カテゴリ</h2>
              <SidebarNav
                categories={categories}
                currentCategory={currentCategory}
                onCategoryChange={handleCategoryChange}
              />
            </aside>
          )}

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Category Header */}
            <div className="mb-6">
              <h2 className="text-3xl text-white mb-1">{currentCategoryName}</h2>
              <p className="text-sm text-gray-400">
                {filteredItems.length > 0
                  ? `${filteredItems.length}件の設定項目`
                  : "該当する設定項目が見つかりませんでした"}
              </p>
            </div>

            {/* Settings List */}
            <SettingList items={filteredItems} />

            {/* Footer Info */}
            {filteredItems.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[#2B2B2B]">
                <div className="bg-surface border border-border rounded-lg p-5">
                  <h3 className="text-white mb-3">ご利用にあたって</h3>
                  <ul className="space-y-1.5 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 text-xs">•</span>
                      <span className="leading-relaxed">
                        この情報は公式ドキュメントではなく、学習・参照用のリファレンスです
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 text-xs">•</span>
                      <span className="leading-relaxed">
                        設定は予告なく変更される可能性があります。最新情報は
                        <a
                          href="https://docs.cursor.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline ml-1"
                        >
                          公式ドキュメント
                        </a>
                        でご確認ください
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 text-xs">•</span>
                      <span className="leading-relaxed">
                        Pro限定機能には「[Pro限定]」と表示されています
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

