#!/bin/bash

# プロジェクトルートの確認
if [ ! -f "package.json" ] || [ ! -d "node_modules" ]; then
    echo "ℹ️  Skipping Biome check (no package.json or node_modules)"
    exit 0
fi

echo "🔍 Running Biome check..."

# npm run check:ci を実行（全体チェック）
if npm run check:ci; then
    echo "✅ Biome check passed"
else
    echo "⚠️  Biome issues found"
    echo "💡 Run 'npm run check' to auto-fix issues"
    # エラーで終了しない（編集を継続可能にする）
fi