import type { Category, SettingItem } from "../types/settings";

export const categories: Category[] = [
  { id: "general", name: "General" },
  { id: "chat", name: "Chat" },
  { id: "tab", name: "Tab" },
  { id: "models", name: "Models" },
  { id: "background-agents", name: "Background Agents" },
  { id: "tools-mcp", name: "Tools & MCP" },
  { id: "rules-memories", name: "Rules & Memories" },
  { id: "indexing-docs", name: "Indexing & Docs" },
  { id: "network", name: "Network" },
  { id: "beta", name: "Beta" },
  { id: "docs", name: "Docs" },
];

export const settingsData: Record<string, SettingItem[]> = {
  general: [
    {
      id: "editor-font-size",
      nameJa: "エディタのフォントサイズ",
      nameEn: "Editor Font Size",
      description: [
        "エディタで表示されるコードのフォントサイズを調整できます",
        "デフォルト値は14pxです",
        "読みやすさと画面の情報量のバランスを考慮して設定してください",
      ],
    },
    {
      id: "theme",
      nameJa: "テーマ設定",
      nameEn: "Theme",
      description: [
        "エディタの配色テーマを変更できます",
        "Light、Dark、システム設定に従うの3つから選択可能",
        "カスタムテーマのインポートにも対応しています",
      ],
    },
    {
      id: "auto-save",
      nameJa: "自動保存",
      nameEn: "Auto Save",
      description: [
        "ファイルを自動的に保存するタイミングを設定します",
        "オプション：オフ、フォーカス変更時、遅延後",
        "作業の損失を防ぐために「フォーカス変更時」がおすすめです",
      ],
    },
    {
      id: "telemetry",
      nameJa: "テレメトリ",
      nameEn: "Telemetry",
      description: [
        "使用状況データの送信を許可するかどうかを設定します",
        "オフにしても基本的な機能には影響しません",
        "プライバシーを重視する場合はオフにすることができます",
      ],
    },
    {
      id: "crash-reporting",
      nameJa: "クラッシュレポート",
      nameEn: "Crash Reporting",
      description: [
        "アプリケーションのクラッシュ情報を開発チームに送信します",
        "品質向上に役立つため、可能な限り有効にすることを推奨",
        "個人情報は含まれません",
      ],
    },
  ],
  chat: [
    {
      id: "chat-model",
      nameJa: "チャットモデル",
      nameEn: "Chat Model",
      description: [
        "AI会話で使用するモデルを選択します",
        "GPT-4、Claude、その他のモデルから選択可能",
        "モデルによって応答速度と品質が異なります",
      ],
      isPro: true,
    },
    {
      id: "chat-history",
      nameJa: "チャット履歴",
      nameEn: "Chat History",
      description: [
        "チャット履歴を保存するかどうかを設定します",
        "履歴を有効にすると過去の会話を参照できます",
        "プライバシー重視の場合は無効化できます",
      ],
    },
    {
      id: "context-length",
      nameJa: "コンテキスト長",
      nameEn: "Context Length",
      description: [
        "AIに送信するコンテキストの最大長を設定します",
        "長いほど多くの情報を参照できますが、処理時間が増加します",
        "プロジェクトの規模に応じて調整してください",
      ],
      isPro: true,
    },
    {
      id: "streaming",
      nameJa: "ストリーミング応答",
      nameEn: "Streaming Response",
      description: [
        "AI応答をリアルタイムで表示します",
        "有効にすると応答を待つ時間が短く感じられます",
        "ネットワークが不安定な場合は無効化することも可能",
      ],
    },
  ],
  tab: [
    {
      id: "tab-autocomplete",
      nameJa: "Tab自動補完",
      nameEn: "Tab Autocomplete",
      description: [
        "Tabキーを押したときにAIがコードを自動補完します",
        "Cursorの最も強力な機能の一つです",
        "リアルタイムでコード提案が表示されます",
      ],
    },
    {
      id: "tab-delay",
      nameJa: "Tab補完遅延",
      nameEn: "Tab Delay",
      description: [
        "自動補完が表示されるまでの遅延時間を設定します",
        "短くするとより早く提案が表示されます",
        "CPUリソースとのバランスを考慮してください",
      ],
    },
    {
      id: "multiline-suggestions",
      nameJa: "複数行の提案",
      nameEn: "Multiline Suggestions",
      description: [
        "複数行のコード提案を表示するかどうかを設定します",
        "有効にするとより大きなコードブロックが提案されます",
        "関数全体やクラス全体の生成に便利です",
      ],
      isPro: true,
    },
  ],
  models: [
    {
      id: "default-model",
      nameJa: "デフォルトモデル",
      nameEn: "Default Model",
      description: [
        "デフォルトで使用するAIモデルを設定します",
        "タスクに応じて最適なモデルを選択できます",
        "GPT-4、Claude 3、その他のモデルに対応",
      ],
    },
    {
      id: "model-override",
      nameJa: "モデル上書き",
      nameEn: "Model Override",
      description: [
        "特定の機能で使用するモデルを個別に設定できます",
        "チャット、Tab補完、エージェントでそれぞれ異なるモデルを使用可能",
        "上級者向けの設定です",
      ],
      isPro: true,
    },
    {
      id: "api-key",
      nameJa: "APIキー",
      nameEn: "API Key",
      description: [
        "独自のAPIキーを使用する場合に設定します",
        "OpenAI、Anthropicなどのキーに対応",
        "セキュリティには十分注意してください",
      ],
    },
  ],
  "background-agents": [
    {
      id: "enable-agents",
      nameJa: "エージェントを有効化",
      nameEn: "Enable Background Agents",
      description: [
        "バックグラウンドでAIエージェントを実行します",
        "コードの問題を自動検出し、改善提案を行います",
        "リソース使用量が増加する可能性があります",
      ],
      isPro: true,
    },
    {
      id: "agent-frequency",
      nameJa: "エージェント実行頻度",
      nameEn: "Agent Frequency",
      description: [
        "エージェントがコードを分析する頻度を設定します",
        "高頻度：リアルタイムに近い分析",
        "低頻度：CPUリソースを節約",
      ],
      isPro: true,
    },
  ],
  "tools-mcp": [
    {
      id: "mcp-servers",
      nameJa: "MCPサーバー",
      nameEn: "MCP Servers",
      description: [
        "Model Context Protocol（MCP）サーバーを設定します",
        "外部ツールやAPIとの統合を可能にします",
        "カスタムツールの追加に対応",
      ],
      isPro: true,
    },
    {
      id: "tool-permissions",
      nameJa: "ツール権限",
      nameEn: "Tool Permissions",
      description: [
        "各ツールのアクセス権限を管理します",
        "ファイルシステム、ネットワークへのアクセスを制御",
        "セキュリティのため適切に設定してください",
      ],
    },
  ],
  "rules-memories": [
    {
      id: "custom-rules",
      nameJa: "カスタムルール",
      nameEn: "Custom Rules",
      description: [
        "プロジェクト固有のコーディング規約をAIに教えることができます",
        "チーム開発で統一されたスタイルを維持するのに便利",
        "Markdownファイルとして保存されます",
      ],
    },
    {
      id: "project-memory",
      nameJa: "プロジェクトメモリ",
      nameEn: "Project Memory",
      description: [
        "プロジェクトの構造や慣習をAIが学習します",
        "繰り返し同じ説明をする必要がなくなります",
        "長期的なプロジェクトで特に効果的",
      ],
      isPro: true,
    },
  ],
  "indexing-docs": [
    {
      id: "codebase-indexing",
      nameJa: "コードベースのインデックス化",
      nameEn: "Codebase Indexing",
      description: [
        "プロジェクト全体をインデックス化して検索を高速化します",
        "大規模プロジェクトでAIの応答精度が向上します",
        "初回は時間がかかる場合があります",
      ],
    },
    {
      id: "docs-embedding",
      nameJa: "ドキュメント埋め込み",
      nameEn: "Documentation Embedding",
      description: [
        "プロジェクトのドキュメントをAIが参照できるようにします",
        "README、Wiki、APIドキュメントなどを含めることができます",
        "より正確な回答が得られます",
      ],
      isPro: true,
    },
  ],
  network: [
    {
      id: "proxy-settings",
      nameJa: "プロキシ設定",
      nameEn: "Proxy Settings",
      description: [
        "プロキシサーバー経由で接続する場合に設定します",
        "企業ネットワーク環境で必要になることがあります",
        "HTTP、HTTPS、SOCKSプロキシに対応",
      ],
    },
    {
      id: "ssl-verification",
      nameJa: "SSL検証",
      nameEn: "SSL Verification",
      description: [
        "SSL証明書の検証を有効化/無効化します",
        "セキュリティのため通常は有効にしてください",
        "開発環境でのみ無効化を検討してください",
      ],
    },
  ],
  beta: [
    {
      id: "beta-features",
      nameJa: "ベータ機能",
      nameEn: "Beta Features",
      description: [
        "実験的な新機能を試すことができます",
        "不安定な場合があるため、本番環境では注意してください",
        "フィードバックを開発チームに送ることができます",
      ],
    },
    {
      id: "early-access",
      nameJa: "早期アクセス",
      nameEn: "Early Access",
      description: [
        "正式リリース前の機能にアクセスできます",
        "新しいAIモデルや機能をいち早く試せます",
        "バグ報告にご協力ください",
      ],
      isPro: true,
    },
  ],
  docs: [
    {
      id: "official-docs",
      nameJa: "公式ドキュメント",
      nameEn: "Official Documentation",
      description: [
        "Cursor公式ドキュメントへのリンク",
        "最新の機能や使い方を確認できます",
        "英語ですが、Cursorで翻訳しながら読むこともできます",
      ],
    },
    {
      id: "community",
      nameJa: "コミュニティ",
      nameEn: "Community",
      description: [
        "Cursorユーザーコミュニティへのリンク",
        "他のユーザーと情報交換ができます",
        "Discord、Forum、GitHubなどで活発に議論されています",
      ],
    },
  ],
};

