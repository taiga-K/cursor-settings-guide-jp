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
      id: "manage-account",
      nameJa: "アカウント管理",
      nameEn: "Manage Account",
      description: [
        "アカウントや課金の管理を行います",
        "サブスクリプションプランの変更や確認ができます",
        "支払い方法や請求履歴も管理できます",
      ],
    },
    {
      id: "editor-settings",
      nameJa: "エディタ設定",
      nameEn: "Editor Settings",
      description: [
        "フォント、フォーマット、ミニマップなどのエディタ設定を行います",
        "コードの見た目や編集体験をカスタマイズできます",
        "タブサイズやインデント設定も含まれます",
      ],
    },
    {
      id: "keyboard-shortcuts",
      nameJa: "キーボードショートカット",
      nameEn: "Keyboard Shortcuts",
      description: [
        "キーボードショートカットをカスタマイズできます",
        "よく使う操作をショートカットに割り当てることで作業効率が向上します",
        "既存のショートカットの変更や新規追加が可能です",
      ],
    },
    {
      id: "import-from-vscode",
      nameJa: "VS Codeからインポート",
      nameEn: "Import Settings from VS Code",
      description: [
        "VS Codeから設定・拡張機能・キーバインドをインポートできます",
        "既存のVS Code環境をそのままCursorで利用できます",
        "移行をスムーズに行うための便利な機能です",
      ],
    },
    {
      id: "default-layout",
      nameJa: "デフォルトレイアウト",
      nameEn: "Default Layout",
      description: [
        "新しいウィンドウを開いたときのデフォルトレイアウトを設定します",
        "エディタ、サイドバー、パネルの配置を指定できます",
        "作業スタイルに合わせたレイアウトを保存できます",
      ],
    },
    {
      id: "reset-dialogs",
      nameJa: "ダイアログのリセット",
      nameEn: 'Reset "Don\'t Ask Again" Dialogs',
      description: [
        "非表示にした警告やヒントを再表示できます",
        "「今後表示しない」を選択したダイアログが再び表示されるようになります",
        "重要な通知を見逃した場合に便利です",
      ],
    },
    {
      id: "privacy-mode",
      nameJa: "プライバシーモード",
      nameEn: "Privacy Mode",
      description: [
        "データを学習やプロダクト改善に利用しないように設定できます",
        "個人化のためにはデータが保存されます",
        "プライバシーを重視する場合に有効化してください",
      ],
    },
    {
      id: "system-notifications",
      nameJa: "システム通知",
      nameEn: "System Notifications",
      description: [
        "エージェントの完了時や注意が必要なときにシステム通知を表示します",
        "長時間かかるタスクの完了を見逃さずに確認できます",
        "他の作業をしていても通知で知らせてくれます",
      ],
    },
    {
      id: "menu-bar-icon",
      nameJa: "メニューバーアイコン",
      nameEn: "Menu Bar Icon",
      description: [
        "メニューバーにCursorアイコンを表示します",
        "クイックアクセスや状態確認に便利です",
        "macOSのメニューバーから素早くCursorにアクセスできます",
      ],
    },
    {
      id: "completion-sound",
      nameJa: "完了サウンド",
      nameEn: "Completion Sound",
      description: [
        "エージェントの応答が終了したときにサウンドを再生します",
        "長い処理の完了を音で知らせてくれます",
        "他のタブで作業していても完了を把握できます",
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
