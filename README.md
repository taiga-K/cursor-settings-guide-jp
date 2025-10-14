## Cursor Settings Guide JP

Cursorエディタの設定項目を日本語で解説するリファレンスサイトです。

### 採用技術スタック

- **TypeScript / React**: 型安全な開発環境
- **Next.js 14 (App Router)**: モダンなReactフレームワーク
- **Tailwind CSS v3**: ゼロランタイムのユーティリティファーストCSS
- **clsx**: クラス名の条件付き結合

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

### CI/CD

#### 自動CI修正ワークフロー

このリポジトリには、Cursor CLIを使用してCI失敗を自動的に修正するGitHub Actionsワークフローが含まれています。

**仕組み:**
- CIワークフローが失敗すると、自動的にトリガーされます
- Cursor AIがログを解析して失敗原因を特定します
- 最小限の修正を適用した修正用ブランチを自動作成します
- PRを作成するためのリンクが生成されます

**セットアップ方法:**

1. リポジトリのSettings → Secrets and variables → Actionsに移動
2. New repository secretをクリック
3. `CURSOR_API_KEY`という名前でCursor APIキーを登録
   - Cursor APIキーの取得方法: [Cursor Settings](https://www.cursor.com/settings) → API Keys
4. ワークフローファイル(`.github/workflows/auto-fix-ci.yml`)の`workflows`セクションで、監視対象のCIワークフロー名を指定

**使用方法:**
- CIが失敗すると自動的に実行されます
- 修正が成功すると、`ci-fix/*`という名前のブランチが作成されます
- PRへのコメントまたはログから、修正ブランチのPR作成リンクを確認できます

**参考リンク:**
- [詳細ドキュメント](./docs/AUTO_FIX_CI.md)
- [Cursor公式ドキュメント: Fix CI](https://cursor.com/docs/cli/cookbook/fix-ci)

### ディレクトリ構成

```
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
