## Cursor Settings Guide JP

Cursorエディタの設定項目を日本語で解説するリファレンスサイトです。

### 採用技術スタック

- **TypeScript / React**: 型安全な開発環境
- **Next.js 14 (App Router)**: モダンなReactフレームワーク
- **Tailwind CSS v3**: ゼロランタイムのユーティリティファーストCSS
- **clsx**: クラス名の条件付き結合

### 主な特徴

- ✅ **Compactリスト表示**: シンプルで見やすいリスト形式のみ実装
- ✅ **Pro限定機能の明示**: テキストで「[Pro限定]」と表示（バッジ不使用）
- ✅ **絵文字アイコンなし**: テキストベースのシンプルなデザイン
- ✅ **レスポンシブ対応**: デスクトップ・モバイル両対応
- ✅ **検索機能**: 日本語・英語・説明文・カテゴリでの部分一致検索
- ✅ **アクセシビリティ**: 適切なランドマーク、ARIA属性、キーボード操作対応

### パフォーマンス・状態管理ガイドライン準拠

本実装は `.cursor/rules/*.mdc` のガイドラインに準拠しています：

- **State Management**: ローカル状態のみ使用（useState）、グローバルストアなし
- **Performance**: useMemo/useCallbackによる最適化、型推論の活用
- **Component Design**: 責務の明確な分離、必要最小限の再レンダリング

### 開発

```bash
npm install
npm run dev
```

http://localhost:3000 でアプリケーションが起動します。

### ディレクトリ構成

```
/Users/k-taiga/Developer/cursor-settings-docs/
├── app/
│   ├── layout.tsx        # ルートレイアウト
│   ├── page.tsx          # メインページ
│   └── globals.css       # グローバルスタイル
├── components/
│   ├── SearchBar.tsx     # 検索バー
│   ├── SidebarNav.tsx    # カテゴリナビゲーション
│   └── SettingList.tsx   # 設定項目リスト
├── lib/
│   ├── types/
│   │   └── settings.ts   # 型定義
│   └── data/
│       └── settings.ts   # 設定データ
└── .cursor/rules/        # Cursorルール
```
