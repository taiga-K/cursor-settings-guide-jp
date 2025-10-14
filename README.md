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

### GitHub Actions による自動ドキュメント更新

このリポジトリでは、Pull Request時に自動的にドキュメントを更新するGitHub Actionsワークフローが設定されています。

#### 機能

- PRが作成・更新されると、Cursor CLIが自動的に変更内容を確認
- 必要に応じてドキュメント（README.md等）を自動更新
- 更新内容をPRにコメントで報告

#### 設定ファイル

- `.github/workflows/auto-update-docs.yml`: ワークフロー定義
- `cursor-agent.permissions.json`: Cursor Agentの権限設定

#### 必要な環境変数

リポジトリのSecretsに以下を設定してください：

- `CURSOR_API_KEY`: Cursor APIキー（[Cursor Dashboard](https://cursor.com/settings)で取得）

#### トリガー条件

以下の場合に自動実行されます：

- PRがオープンされた時
- PRが同期（更新）された時
- PRが再オープンされた時
- Draft状態から通常のPRに変更された時

#### 参考リンク

- [Cursor公式 Cookbook: update-docs](https://cursor.com/ja/docs/cli/cookbook/update-docs)
- [Cursor CLI Documentation](https://cursor.com/docs/cli/overview)
