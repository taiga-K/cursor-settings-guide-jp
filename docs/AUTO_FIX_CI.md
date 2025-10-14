# CI失敗自動修正ワークフロー

## 概要

このドキュメントでは、Cursor CLIを使用してCI失敗を自動的に修正するGitHub Actionsワークフローの詳細を説明します。

## 機能

- **自動検知**: CIワークフローが失敗すると自動的にトリガーされます
- **インテリジェント修正**: Cursor AIがログを解析して失敗原因を特定し、適切な修正を提案します
- **ブランチ自動作成**: 修正内容を含む新しいブランチを自動作成します
- **PR連携**: 元のPRにコメントを投稿し、修正ブランチへのリンクを提供します

## セットアップ手順

### 1. Cursor APIキーの取得

1. [Cursor Settings](https://www.cursor.com/settings)にアクセス
2. **API Keys**セクションに移動
3. 新しいAPIキーを生成
4. 生成されたキーをコピー（後で使用します）

### 2. GitHub Secretsの設定

1. GitHubリポジトリのページに移動
2. **Settings** → **Secrets and variables** → **Actions**をクリック
3. **New repository secret**をクリック
4. 以下の情報を入力:
   - **Name**: `CURSOR_API_KEY`
   - **Secret**: 先ほど取得したCursor APIキー
5. **Add secret**をクリック

### 3. ワークフローファイルの確認

`.github/workflows/auto-fix-ci.yml`ファイルを確認し、必要に応じて設定をカスタマイズします。

```yaml
on:
  workflow_run:
    # 監視対象のCIワークフロー名を指定
    workflows: ["CI"]  # ここに監視したいワークフロー名を指定
    types:
      - completed
```

## 動作フロー

1. **トリガー**: 指定されたCIワークフローが失敗で完了
2. **チェックアウト**: 失敗したブランチをチェックアウト
3. **Cursor CLI実行**:
   - 失敗したワークフローのログを取得
   - AIがエラー原因を分析
   - 必要最小限の修正を実施
4. **ブランチ作成**: `ci-fix/<元のブランチ名>-<タイムスタンプ>`という名前でブランチを作成
5. **コミット&プッシュ**: 修正内容をコミットしてプッシュ
6. **通知**: 元のPRにコメントを投稿し、PR作成リンクを提供

## 使用例

### シナリオ1: Lintエラーの自動修正

1. PRでコードをプッシュ
2. CIが実行され、Biome lintエラーで失敗
3. 自動修正ワークフローが起動
4. Cursor AIがlintエラーを検出し、自動的に修正
5. 修正ブランチ`ci-fix/feature-branch-1697123456`が作成される
6. 元のPRにコメントが投稿され、新しいPRを作成するリンクが提供される

### シナリオ2: ビルドエラーの自動修正

1. PRでTypeScriptコードを変更
2. CIが実行され、型エラーでビルドが失敗
3. 自動修正ワークフローが起動
4. Cursor AIが型エラーを分析し、適切な型定義を追加
5. 修正ブランチが作成され、PRコメントで通知される

## カスタマイズ

### 監視するワークフローの変更

`.github/workflows/auto-fix-ci.yml`の`workflows`セクションを編集:

```yaml
workflows: ["CI", "Test", "Lint"]  # 複数のワークフローを監視可能
```

### AIモデルの変更

デフォルトでは`gpt-5`を使用していますが、他のモデルに変更可能:

```yaml
env:
  MODEL: gpt-5  # または "claude-3-5-sonnet", "o1-mini" など
```

### ブランチプレフィックスの変更

修正ブランチの命名規則を変更:

```yaml
env:
  BRANCH_PREFIX: auto-fix  # デフォルトは "ci-fix"
```

## トラブルシューティング

### ワークフローが起動しない

- `CURSOR_API_KEY`が正しく設定されているか確認
- 監視対象のワークフロー名が正確か確認
- リポジトリの権限設定を確認（Actions権限が有効か）

### 修正が不完全

- Cursor AIは最善の修正を試みますが、複雑なエラーは完全に修正できない場合があります
- 生成された修正ブランチを確認し、必要に応じて手動で調整してください

### APIキーエラー

- Cursor APIキーが有効か確認
- APIキーの使用制限に達していないか確認

## ベストプラクティス

1. **段階的導入**: まず1つのCIワークフローから始めて、動作を確認してから拡張する
2. **レビュー必須**: 自動修正された内容は必ずレビューしてからマージする
3. **ログ確認**: ワークフローのログを定期的に確認し、改善点を見つける
4. **権限管理**: 必要最小限の権限のみを付与する

## 参考リンク

- [Cursor公式ドキュメント: Fix CI](https://cursor.com/docs/cli/cookbook/fix-ci)
- [Cursor CLI Documentation](https://cursor.com/docs/cli)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## セキュリティに関する注意事項

- `CURSOR_API_KEY`は絶対にコード内に直接記述しないでください
- 必ずGitHub Secretsを使用してAPIキーを管理してください
- Public repositoryでは、forkからのPRでSecretsが利用できない点に注意してください

## ライセンス

このワークフローは、リポジトリのライセンスに従います。
