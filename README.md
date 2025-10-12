## Cursor Settings Guide JP

本プロジェクトでは、Cursor の設定ガイドを静的サイトとして提供します。実装にあたり、以下の技術スタックを採用します。

### 採用技術スタック

- TypeScript / React
- Next.js 14 (App Router)
- Tailwind CSS
- shadcn/ui
- Zustand
- React Hook Form + Zod

### 採用理由

- **Next.js 14**: 静的サイト生成 (SSG)・コード分割・画像最適化を標準で備え、React + TypeScript のベストプラクティスに沿った開発が可能。
- **Tailwind CSS**: ゼロランタイムでパフォーマンスガイドラインに反しないユーティリティファーストCSS。ダークテーマにも柔軟に対応。
- **shadcn/ui**: Tailwind + Radix UI ベースのコード配布型コンポーネント。アクセシビリティを確保しつつ自由にカスタマイズ可能。
- **Zustand**: 軽量・高速で、状態をローカルに保つというガイドラインに沿ったシンプルなストア構成が可能。
- **React Hook Form + Zod**: 非制御コンポーネントで高パフォーマンスなフォーム管理と、型安全なバリデーションを両立。

これらの選定は、パフォーマンス・状態管理・コンポーネント設計に関する `.cursor/rules/*.mdc` のガイドラインに準拠しています。
