// ==========================================
// 1. UI Navigation & Scroll Interactions
// ==========================================

// Header background change on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const trigger = item.querySelector('.faq-trigger');
  trigger.addEventListener('click', () => {
    // Toggle active class on current item
    const isActive = item.classList.contains('active');
    
    // Close all items
    faqItems.forEach(i => i.classList.remove('active'));
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Preset Buttons Handler
const presetButtons = document.querySelectorAll('.btn-preset');
const eventInput = document.getElementById('event-input');
presetButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    eventInput.value = btn.getAttribute('data-text');
  });
});

// Preset Data for Mock Mode
const MOCK_DATA = {
  disaster: {
    domain: "防災・行政対応",
    prompts: {
      step1: "あなたは相談内容の分析専門家です。被災者の避難生活環境や自治体対応という文脈から、今緊急に検討・整理すべき具体的な論点を5つ抽出してください。必ずJSON配列形式で出力してください。",
      step2: "あなたは防災対策の専門家です。抽出された避難生活上の課題に対して、行政やボランティアが直ちに行うべき、または中長期的に導入すべき具体的な対処法を提案してください。"
    },
    results: [
      {
        occurrence: "避難所における居住スペースのプライバシー欠如と精神的疲労",
        countermeasure: "簡易パーティション（段ボール間仕切り）やファミリーテントを迅速に設営し、個人のプライバシー空間を確保する。同時にカウンセラーを巡回させ、避難者のストレスやメンタルヘルスを個別ケアする。"
      },
      {
        occurrence: "指定避難所に入らない「車中泊避難者」等の位置把握および健康管理不足",
        countermeasure: "デジタル地図とGPS、あるいは専用オンラインフォーム（LINEなど）を用いた車中泊避難者の位置情報登録システムを構築する。保健師や災害支援ナースが駐車場を定期巡回し、エコノミークラス症候群の検診や物資配給を行う。"
      },
      {
        occurrence: "高齢者、障害者、妊産婦などの「要配慮者」への生活サポート遅延",
        countermeasure: "あらかじめ指定されている「福祉避難所」を早期に開設し、要配慮者の安全な移送体制を確保する。避難所内にはバリアフリーエリアや手すり付きトイレ、授乳室を特設し、専門ケアスタッフを配置する。"
      },
      {
        occurrence: "配給物資の偏りや、個別ニーズ（離乳食、アレルギー対応、生理用品）へのミスマッチ",
        countermeasure: "スマートフォンの簡易ニーズ報告アプリ、または避難所ごとのデジタル在庫管理システムを導入する。アレルギー食や衛生用品などを細分化して管理し、必要な人に直接物資が届くラストワンマイルの配送ルートを確保する。"
      },
      {
        occurrence: "長期化する避難生活による「生活不活発病」と地域コミュニティの崩壊",
        countermeasure: "避難所内でのラジオ体操や軽作業の共同作業など、身体を動かす機会をデイリーで提供する。また、自治会や班の役割分担を継続させ、仮設住宅移行期を見据えたコミュニティ再建プログラムを実施する。"
      }
    ],
    chatResponses: [
      "避難所の立ち上げ初期（発生から72時間以内）では、命の危険に直結する『車中泊でのエコノミークラス症候群』の予防と、『要配慮者の福祉避難所への移設』が最優先事項です。その後、1週間から数ヶ月のスパンで居住環境の改善へとフェーズが移行します。",
      "避難者自身のコミュニティ力（自主防災組織など）を活性化させることで、行政側のリソース不足を補いつつ、避難生活の秩序や精神的安全性を向上させることができます。行政は物資供給と専門職の調整に専念すべきです。",
      "本日のセルフデザイン分析に基づくと、災害関連死を防ぐための『巡回医療チームの組織化』と『個別物資の配送効率化』が、現段階のボトルネックを解消するキーステップとなります。"
    ]
  },
  cafe: {
    domain: "店舗経営・マーケティング",
    prompts: {
      step1: "あなたは店舗コンサルタントです。大手チェーンやコンビニコーヒーに挟まれて売上が低迷する個人カフェの文脈から、生き残りのために整理すべきボトルネック・課題を5つ抽出してください。必ずJSON形式で出力してください。",
      step2: "あなたはローカルビジネスに特化したマーケティングスペシャリストです。個人カフェ特有の魅力を活かしつつ、チェーン店には真似できない具体的な差別化アイデアや集客施策を提案してください。"
    },
    results: [
      {
        occurrence: "大手チェーンとの『価格競争』に巻き込まれ、粗利率が低下している",
        countermeasure: "低価格路線から完全に脱却し、希少価値の高いシングルオリジン豆の提供や、オリジナルの自家製スイーツのセット販売などで客単価を上げる。価格ではなく『ここでしか味わえない価値』で勝負する。"
      },
      {
        occurrence: "認知度が低く、近隣住民や観光客などの新規顧客の獲得が不十分である",
        countermeasure: "Instagramを中心としたビジュアル重視のSNS運用を行い、店舗の『静かで心地よい世界観』やこだわりメニューの制作過程を発信する。GoogleマップのMEO対策を行い、『近くの喫茶店』での検索上位表示を狙う。"
      },
      {
        occurrence: "顧客のリピート率が低く、常連客（ファン）のコミュニティが作れていない",
        countermeasure: "LINE公式アカウントを活用し、雨の日の割引クーポンや、季節限定コーヒーの先行予約案内などのコミュニケーションを自動化。店主との会話が生まれるカウンター席の配置や、定期的なコーヒー勉強会を開催する。"
      },
      {
        occurrence: "利便性（電源、Wi-Fi、営業時間）で大手チェーンに劣る",
        countermeasure: "大手チェーンのような『作業スペース』として競合するのではなく、『デジタルデトックス（あえてWi-Fiや電源を置かない、本を静かに読むための空間）』という逆のアプローチで、静寂や休息を求める層を呼び込む。"
      },
      {
        occurrence: "店内飲食のみに依存した単一の収益構造になっている",
        countermeasure: "店舗で提供しているコーヒー豆の小分けパッケージ販売、ドリップバッグのサブスクリプション配送、または地域のオフィス向けの淹れたてコーヒーのテイクアウト定期配送など、店外で売上を生むチャネルを構築する。"
      }
    ],
    chatResponses: [
      "個人喫茶店の最大の強みは『店主のパーソナリティ』と『空間の独自性』です。大手チェーンが追求する『効率性・均一性』の真逆である『非効率・個性』を徹底的に尖らせることが生き残りの秘訣です。",
      "売上向上のためには、まずは『MEO（Googleマップ対策）』により地元の人に見つけてもらうこと、次に『コーヒー豆の販売』によりリピート時の顧客単価を上げることが、最も実行しやすく効果の高い施策です。",
      "まずは常連客になってくれそうな周辺オフィスの従業員や住民に向けて、1杯無料券付きのコンセプトブックを手配りし、最初の来店ハードルを下げてみてください。"
    ]
  },
  career: {
    domain: "キャリアデザイン・IT人事",
    prompts: {
      step1: "あなたはキャリアカウンセラーです。30代前半のITエンジニアの葛藤（技術スペシャリストか、マネジメント職か）を分析し、キャリアパスの選択で考慮すべき5つの本質的論点を抽出してください。",
      step2: "あなたはIT業界の組織マネージャーです。それぞれの選択肢がもたらす長期的なメリット・リスクを踏まえ、決断を下すために今からとるべき具体的な自己内省やステップを提案してください。"
    },
    results: [
      {
        occurrence: "技術のスペシャリストとして、急激な技術トレンド変化についていき続けることへの体力・精神的限界",
        countermeasure: "単なるコード書きから、システム設計やアーキテクチャ選定、または特定のニッチなドメイン知識（医療×IT、セキュリティなど）を掛け合わせた『替えのきかないエンジニア』への移行を図る。"
      },
      {
        occurrence: "マネジメント職に転向した際、コードを書く時間が減り『技術力の衰え・キャリアの袋小路』に入る不安",
        countermeasure: "『プレイングマネージャー』や『テックリード』として、技術力を担保しつつチームの生産性を上げる中間ポジションを経験する。コード自体は書かなくても、技術的な意思決定ができる能力を価値とする。"
      },
      {
        occurrence: "マネジメントスキル（コミュニケーション、評価、予算管理）への適正やモチベーションの不確実さ",
        countermeasure: "正式な管理職になる前に、プロジェクトのサブリーダーや、新人エンジニアのメンターなどを買って出て、小規模で人を動かす経験をテストランし、自身の適正やストレスレベルを自己観察する。"
      },
      {
        occurrence: "自社におけるスペシャリストパス（評価制度、給与テーブル）の不足",
        countermeasure: "上司や人事との1on1において、社内でのテックリードやプリンシパルエンジニアとしての評価枠の有無を直接確認する。もしなければ、技術職が正当に評価される他社への転職市場の調査や、副業で市場価値を測定する。"
      },
      {
        occurrence: "人生のライフステージ（結婚、子育て等）と、各キャリアパスに求められる時間的・エネルギー的拘束のバッティング",
        countermeasure: "将来設計（ワークライフバランス、希望年収など）をタイムラインで書き出し、各キャリアパスの働き方モデルと比較する。例えば、一時的に育児に集中するためにマネジメントへの移行を延期するなどの柔軟なスケジュールを作る。"
      }
    ],
    chatResponses: [
      "30代前半はまだ、どちらかにキャリアを完全に固定する必要はありません。まずはテックリードとして『技術3：マネジメント7』のような割合でテストし、より向いている方に軸足を移していくのがリスクを抑えた現実的な戦略です。",
      "多くのエンジニアが『技術力の衰え』を懸念しますが、優れた技術マネージャーの市場価値は非常に高く、かつ年齢を重ねても長期的に活躍しやすい傾向があります。技術のベースがあるマネージャーは非常に希少です。",
      "まずは社内で『小さいチームのタスクリーダー』を1期（3〜6ヶ月）だけ引き受けてみるか、副業などでマネジメントを体験できるプロジェクトに参加してみることをお勧めします。"
    ]
  }
};

// Generic Fallback Data for Mock Mode
const GENERIC_MOCK = {
  domain: "課題解決・アイデア構築",
  prompts: {
    step1: "あなたはビジネス分析の専門家です。入力されたテーマについて整理すべき課題を列挙してください。",
    step2: "あなたはコンサルタントです。抽出された課題に対して具体的な対策を提案してください。"
  },
  results: [
    {
      occurrence: "目的設定の曖昧さと、それに伴うモチベーション維持の難しさ",
      countermeasure: "達成したいゴールを数値や期限などのスマート（SMART）の法則に沿って再定義し、短期的なマイルストーンに分解して成功体験を小刻みに重ねる。"
    },
    {
      occurrence: "初期投資（資金・労力）の大きさに対する成果の不確実性",
      countermeasure: "いきなり大きく進めず、最低限の機能や規模（MVP）で小さく開始する。顧客やユーザーのフィードバックを早期に得て、軌道修正を行いながら拡大する。"
    },
    {
      occurrence: "時間・リソースの不足とマルチタスクによる非効率性",
      countermeasure: "やるべきタスクに優先順位（アイゼンハワーマトリクス等）をつけ、重要度の低い作業はツールの自動化や外注を検討し、コア業務に時間を集中させる。"
    },
    {
      occurrence: "差別化要素の不足と他者/他社との競合リスク",
      countermeasure: "自身の独自の強み（コアコンピタンス）や強烈な個性、ニッチな強みを1つに絞り込み、特定のターゲットに深く刺さるプロポジションを確立する。"
    },
    {
      occurrence: "継続的な改善サイクル（PDCA）の欠如によるプロセスの停滞",
      countermeasure: "週次や月次でプロセスを振り返る時間を必ずカレンダーに確保する。データや実績を数値で測定し、ボトルネックを突き止めて機械的にアプローチを改善する。"
    }
  ],
  chatResponses: [
    "どのようなプロジェクトでも、最初の一歩は『想定顧客や当事者からのフィードバックを得ること』です。頭の中で悩む時間を減らし、素早く現実世界にアウトプットをぶつけていきましょう。",
    "抽出された課題の中で、最も影響力の大きく、かつ自分自身で直接コントロール可能な課題から順に対処していくのが最も効率的です。リソースの分散を防ぎましょう。",
    "今回のセルフデザイン結果を軸にして、具体的なアクションプラン（誰が、いつまでに、何をするか）を作成し、週次で進捗を確認することをお勧めします。"
  ]
};

// ==========================================
// 2. Demo Terminal Orchestrator
// ==========================================

let activeMode = 'mock'; // 'mock' or 'real'
let wllamaInstance = null;
let isEngineLoaded = false;
let isPipelineRunning = false;
let abortController = null;
let currentResults = null;
let currentChatHistory = [];

// DOM Elements
const btnMockMode = document.getElementById('btn-mock-mode');
const btnRealMode = document.getElementById('btn-real-mode');
const realAiSetup = document.getElementById('real-ai-setup');
const btnLoadEngine = document.getElementById('btn-load-engine');
const engineProgressContainer = document.getElementById('engine-progress-container');
const engineProgressBar = document.getElementById('engine-progress-bar');
const engineProgressText = document.getElementById('engine-progress-text');
const engineProgressPercent = document.getElementById('engine-progress-percent');
const terminalModeIndicator = document.getElementById('terminal-mode-indicator');

const termInputSection = document.getElementById('term-input-section');
const termLogsSection = document.getElementById('term-logs-section');
const termResultsSection = document.getElementById('term-results-section');
const btnRunPipeline = document.getElementById('btn-run-pipeline');
const btnCancelPipeline = document.getElementById('btn-cancel-pipeline');
const btnResetTerminal = document.getElementById('btn-reset-terminal');
const logsContainer = document.getElementById('logs-container');
const logsLoaderLine = document.getElementById('logs-loader-line');

const tabTable = document.getElementById('tab-table');
const tabChat = document.getElementById('tab-chat');
const tabPrompts = document.getElementById('tab-prompts');
const paneTable = document.getElementById('pane-table');
const paneChat = document.getElementById('pane-chat');
const panePrompts = document.getElementById('pane-prompts');
const resultDomain = document.getElementById('result-domain');
const tableBody = document.getElementById('table-body');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const btnChatSend = document.getElementById('btn-chat-send');
const promptStep1Code = document.getElementById('prompt-step1-code');
const promptStep2Code = document.getElementById('prompt-step2-code');

// Toggle between Mock Mode and Real Mode
btnMockMode.addEventListener('click', () => {
  if (isPipelineRunning) return;
  activeMode = 'mock';
  btnMockMode.classList.add('active');
  btnRealMode.classList.remove('active');
  realAiSetup.classList.add('hidden');
  terminalModeIndicator.textContent = "MOCK RUN MODE";
  terminalModeIndicator.style.borderColor = "var(--color-cyan)";
  terminalModeIndicator.style.color = "var(--color-cyan)";
  resetTerminalUI();
});

btnRealMode.addEventListener('click', () => {
  if (isPipelineRunning) return;
  activeMode = 'real';
  btnRealMode.classList.add('active');
  btnMockMode.classList.remove('active');
  realAiSetup.classList.remove('hidden');
  terminalModeIndicator.textContent = "LOCAL AI MODE";
  terminalModeIndicator.style.borderColor = "var(--color-magenta)";
  terminalModeIndicator.style.color = "var(--color-magenta)";
  resetTerminalUI();
});

// Reset Terminal back to Input screen
function resetTerminalUI() {
  termInputSection.classList.remove('hidden');
  termLogsSection.classList.add('hidden');
  termResultsSection.classList.add('hidden');
  logsContainer.innerHTML = '';
  tableBody.innerHTML = '';
  chatMessages.innerHTML = `
    <div class="chat-message assistant">
      <div class="avatar">AI</div>
      <div class="chat-content">
        セルフデザイン結果に対する深掘りや、追加の質問をお受けします。
        「〜についてもっと詳しく教えてください」「この状況で別の対策はありますか？」など、お気軽にどうぞ。
      </div>
    </div>
  `;
  chatInput.value = '';
  chatInput.disabled = true;
  btnChatSend.disabled = true;
}

btnResetTerminal.addEventListener('click', resetTerminalUI);

// Log Helper
function addLog(type, text) {
  const timeStr = new Date().toLocaleTimeString();
  const item = document.createElement('div');
  item.className = `log-item ${type}`;
  item.innerHTML = `<span class="log-time">[${timeStr}]</span>${text}`;
  logsContainer.appendChild(item);
  logsContainer.scrollTop = logsContainer.scrollHeight;
}

// ==========================================
// 3. Wllama (Real local AI) Orchestration
// ==========================================

async function getWllamaClass() {
  const module = await import(
    /* webpackIgnore: true */
    'https://cdn.jsdelivr.net/npm/@wllama/wllama@2/esm/index.js'
  );
  return module.Wllama;
}

// Load AI Engine
btnLoadEngine.addEventListener('click', async () => {
  if (isEngineLoaded || isPipelineRunning) return;
  
  btnLoadEngine.disabled = true;
  engineProgressContainer.classList.remove('hidden');
  engineProgressBar.style.width = '0%';
  engineProgressPercent.textContent = '0%';
  engineProgressText.textContent = '初期化ライブラリのロード中...';
  
  try {
    const Wllama = await getWllamaClass();
    
    const configPaths = {
      'single-thread/wllama.wasm': 'https://cdn.jsdelivr.net/npm/@wllama/wllama@2/esm/single-thread/wllama.wasm',
      'multi-thread/wllama.wasm': 'https://cdn.jsdelivr.net/npm/@wllama/wllama@2/esm/multi-thread/wllama.wasm',
    };
    
    wllamaInstance = new Wllama(configPaths);
    
    const modelUrl = 'https://huggingface.co/bartowski/Qwen2.5-3B-Instruct-GGUF/resolve/main/Qwen2.5-3B-Instruct-Q4_K_M.gguf';
    const modelName = 'Qwen2.5 3B (約2.0GB)';
    
    engineProgressText.textContent = `${modelName} モデルを読み込んでいます...`;
    
    await wllamaInstance.loadModelFromUrl(modelUrl, {
      n_ctx: 4096,
      useCache: true,
      progressCallback: ({ loaded, total }) => {
        const pct = total ? Math.round((loaded / total) * 100) : 0;
        engineProgressBar.style.width = `${pct}%`;
        engineProgressPercent.textContent = `${pct}%`;
        const loadedMb = (loaded / (1024 * 1024)).toFixed(1);
        const totalMb = (total / (1024 * 1024)).toFixed(1);
        engineProgressText.textContent = `モデルをダウンロード中: ${loadedMb}MB / ${totalMb}MB`;
      }
    });
    
    isEngineLoaded = true;
    engineProgressText.textContent = 'ニューラルエンジンの起動完了！準備OKです。';
    btnLoadEngine.textContent = '初期化済み';
    btnLoadEngine.style.background = 'var(--color-magenta-dim)';
    btnLoadEngine.style.color = '#fff';
  } catch (err) {
    console.error(err);
    engineProgressText.textContent = `初期化エラー: ${err.message || String(err)}`;
    btnLoadEngine.disabled = false;
  }
});

// ChatML prompt formatter
function buildChatMLPrompt(messages) {
  let prompt = '';
  for (const msg of messages) {
    prompt += `<|im_start|>${msg.role}\n${msg.content}<|im_end|>\n`;
  }
  prompt += `<|im_start|>assistant\n`;
  return prompt;
}

// JSON parsing helper
function parseJsonDict(text, requiredKeys) {
  const match = text.match(/\{[\s\S]*\}/);
  if (match) {
    try {
      const obj = JSON.parse(match[0]);
      const result = {};
      let hasAllKeys = true;
      for (const k of requiredKeys) {
        if (k in obj && String(obj[k]).trim() !== '') {
          result[k] = String(obj[k]).trim();
        } else {
          hasAllKeys = false;
          break;
        }
      }
      if (hasAllKeys) return result;
    } catch (e) {
      console.warn("JSON dict parse error", e);
    }
  }
  return null;
}

function parseJsonList(text, expectedLen) {
  const match = text.match(/\[[\s\S]*\]/);
  if (match) {
    try {
      const items = JSON.parse(match[0]);
      if (Array.isArray(items)) {
        const cleaned = items.map(x => String(x).trim()).filter(x => x !== '');
        if (cleaned.length > 0) {
          return cleaned.slice(0, expectedLen);
        }
      }
    } catch (e) {
      console.warn("JSON list parse error", e);
    }
  }
  
  // Fallback: line-based
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l !== '');
  const cleaned = [];
  for (const line of lines) {
    const cleanedLine = line.replace(/^[\-\*\d\.\)\s]+/, '').trim();
    if (cleanedLine) cleaned.push(cleanedLine);
  }
  if (cleaned.length > 0) {
    return cleaned.slice(0, expectedLen);
  }
  return Array(expectedLen).fill("(生成失敗)");
}

// Run button click
btnRunPipeline.addEventListener('click', () => {
  const inputText = eventInput.value.trim();
  if (!inputText) {
    alert('相談内容を入力してください。');
    return;
  }
  
  const numIssues = parseInt(document.getElementById('num-issues').value, 10);
  
  if (activeMode === 'real') {
    if (!isEngineLoaded || !wllamaInstance) {
      alert('先にローカルAIエンジンを初期化（ダウンロード）してください。');
      return;
    }
    runRealPipeline(inputText, numIssues);
  } else {
    runMockPipeline(inputText, numIssues);
  }
});

// ==========================================
// 4. Mock Pipeline Execution (Smooth & Fast)
// ==========================================

function runMockPipeline(inputText, numIssues) {
  isPipelineRunning = true;
  termInputSection.classList.add('hidden');
  termLogsSection.classList.remove('hidden');
  logsLoaderLine.classList.remove('hidden');
  
  // Find which preset matches best
  let presetKey = 'generic';
  if (inputText.includes('避難所') || inputText.includes('地震') || inputText.includes('車中泊')) {
    presetKey = 'disaster';
  } else if (inputText.includes('喫茶店') || inputText.includes('カフェ') || inputText.includes('集客') || inputText.includes('売上')) {
    presetKey = 'cafe';
  } else if (inputText.includes('キャリア') || inputText.includes('スペシャリスト') || inputText.includes('エンジニア') || inputText.includes('マネジメント')) {
    presetKey = 'career';
  }
  
  const dataset = presetKey !== 'generic' ? MOCK_DATA[presetKey] : GENERIC_MOCK;
  currentResults = {
    domain: dataset.domain,
    prompts: dataset.prompts,
    results: dataset.results.slice(0, numIssues),
    chatResponses: dataset.chatResponses
  };
  
  // Create animated logging timeline
  let logSteps = [
    { type: 'info', text: '🤖 [サイバーセルフデザイン V2 - MOCK_ENGINE] 起動しました。', delay: 400 },
    { type: 'info', text: '📝 入力テキストをメタ解析しています...', delay: 600 },
    { type: 'step0', text: '🧠 [Step 0] 相談内容に最適化したシステムプロンプトの「自己設計」を開始します...', delay: 800 },
    { type: 'success', text: `[Step 0] 分析完了。判定分野: 「${dataset.domain}」`, delay: 600 },
    { type: 'step1', text: `📋 [Step 1] 主要な論点・課題（目標数: ${numIssues}件）の特定をロードします...`, delay: 800 },
  ];
  
  // Add list steps
  for (let i = 0; i < numIssues; i++) {
    const item = dataset.results[i] || { occurrence: `論点 ${i+1} (疑似抽出中)` };
    logSteps.push({
      type: 'info',
      text: `→ 特定された論点 ${i+1}: "${item.occurrence}"`,
      delay: 500
    });
  }
  
  logSteps.push({ type: 'success', text: `[Step 1] 論点の特定が完了しました。`, delay: 600 });
  logSteps.push({ type: 'step2', text: `🛠 [Step 2] 各論点に対する「具体的な対策・対処法」の自動設計に入ります...`, delay: 800 });
  
  for (let i = 0; i < numIssues; i++) {
    logSteps.push({
      type: 'info',
      text: `→ 項目 [${i+1}/${numIssues}] に対する対策プランを計算中...`,
      delay: 450
    });
  }
  
  logSteps.push({ type: 'success', text: '[Step 2] すべての対策構築が完了しました。構造化テーブルを出力します。', delay: 700 });
  logSteps.push({ type: 'info', text: '=======================================================', delay: 200 });
  logSteps.push({ type: 'success', text: '🎉 処理がすべて成功しました！結果画面を表示します。', delay: 500 });
  
  let currentStepIdx = 0;
  
  function executeNextLog() {
    if (currentStepIdx < logSteps.length) {
      const step = logSteps[currentStepIdx];
      addLog(step.type, step.text);
      currentStepIdx++;
      setTimeout(executeNextLog, step.delay);
    } else {
      showResultsUI();
    }
  }
  
  executeNextLog();
}

// Show results
function showResultsUI() {
  isPipelineRunning = false;
  logsLoaderLine.classList.add('hidden');
  termLogsSection.classList.add('hidden');
  termResultsSection.classList.remove('hidden');
  
  // Set tab triggers
  tabTable.click();
  
  // Domain
  resultDomain.textContent = currentResults.domain;
  
  // Render table
  tableBody.innerHTML = '';
  currentResults.results.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${row.occurrence}</strong></td>
      <td>${row.countermeasure}</td>
    `;
    tableBody.appendChild(tr);
  });
  
  // Render Prompts
  promptStep1Code.textContent = currentResults.prompts.step1;
  promptStep2Code.textContent = currentResults.prompts.step2;
  
  // Reset chat state
  currentChatHistory = [];
  chatInput.disabled = false;
  btnChatSend.disabled = false;
}

// Results Tab Navigation
const resultTabs = [tabTable, tabChat, tabPrompts];
const resultPanes = [paneTable, paneChat, panePrompts];

resultTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    resultTabs.forEach(t => t.classList.remove('active'));
    resultPanes.forEach(p => p.classList.remove('active'));
    
    tab.classList.add('active');
    resultPanes[index].classList.add('active');
    
    if (tab === tabChat) {
      const messagesDiv = document.getElementById('chat-messages');
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  });
});

// Chat Send Button Mock
btnChatSend.addEventListener('click', handleChatSubmit);
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleChatSubmit();
});

function handleChatSubmit() {
  const text = chatInput.value.trim();
  if (!text || isPipelineRunning) return;
  
  chatInput.value = '';
  
  // Append user message
  appendChatMessage('user', text);
  
  if (activeMode === 'real') {
    runRealChat(text);
  } else {
    // Mock response
    chatInput.disabled = true;
    btnChatSend.disabled = true;
    
    // Simulate typing
    setTimeout(() => {
      const responses = currentResults.chatResponses || GENERIC_MOCK.chatResponses;
      const resIndex = currentChatHistory.filter(x => x.role === 'user').length % responses.length;
      const answer = responses[resIndex] || responses[0];
      appendChatMessage('assistant', answer);
      
      chatInput.disabled = false;
      btnChatSend.disabled = false;
    }, 1200);
  }
}

function appendChatMessage(role, content) {
  currentChatHistory.push({ role, content });
  const messagesDiv = document.getElementById('chat-messages');
  
  const msgEl = document.createElement('div');
  msgEl.className = `chat-message ${role}`;
  msgEl.innerHTML = `
    <div class="avatar">${role === 'user' ? 'ME' : 'AI'}</div>
    <div class="chat-content">${content}</div>
  `;
  
  messagesDiv.appendChild(msgEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// ==========================================
// 5. Real Pipeline Execution (Actual WASM)
// ==========================================

async function runRealPipeline(inputText, numIssues) {
  if (isPipelineRunning) return;
  isPipelineRunning = true;
  
  termInputSection.classList.add('hidden');
  termLogsSection.classList.remove('hidden');
  btnCancelPipeline.classList.remove('hidden');
  logsLoaderLine.classList.remove('hidden');
  
  abortController = new AbortController();
  const signal = abortController.signal;
  
  try {
    addLog('info', '=======================================================');
    addLog('info', '🤖 [サイバーセルフデザイン V2 - LOCAL WASM ENGINE] 推論パイプライン開始');
    addLog('info', '=======================================================');
    
    // Step 0: Meta-prompting
    addLog('step0', '🧠 [Step 0] 相談内容に最適化したシステムプロンプトの「自己設計」を開始します...');
    
    const step0System = `あなたはプロンプトエンジニアリングの専門家です。
与えられた「相談内容（EVENT）」を読み、その相談がどのような分野・性質のものであるかを理解した上で、後続の2段階パイプラインで使用するプロンプトを設計してください。

Step1: この相談内容に関連して検討・整理すべき具体的な論点・課題・項目をN個列挙する段階です。
Step2: Step1で挙げた各論点に対して、具体的な対応方法・回答・対処法を生成する段階です。

出力は必ず以下のキーを持つJSONオブジェクトのみとし、他の説明文や前置き、コードブロックマーク（\`\`\`json等）は一切含めないでください。JSON仕様に厳密に準拠してください。
{
  "domain": "相談内容の分野・性質を一言で表す短い日本語ラベル",
  "step1_system_prompt": "Step1で使用するsystemプロンプト全文（相談内容の性質に最適化された指示。必ず出力はJSON配列の文字列リストのみとする旨を含めること）",
  "step2_system_prompt": "Step2で使用するsystemプロンプト全文（各論点に対する具体的な回答・対処法を生成する指示。前置きや見出しは不要である旨を含めること）"
}`;

    const step0User = `相談内容（EVENT）:\n${inputText}\n\nこの相談内容に最適化されたStep1/Step2のプロンプトを設計してください。`;
    const step0Prompt = buildChatMLPrompt([
      { role: 'system', content: step0System },
      { role: 'user', content: step0User }
    ]);
    
    addLog('info', 'ローカルAIにプロンプト生成を要求中 (Step 0)...');
    
    if (signal.aborted) throw new DOMException('Aborted by user', 'AbortError');
    const step0Raw = await wllamaInstance.createCompletion(step0Prompt, {
      nPredict: 1024,
      sampling: { temp: 0.2, top_k: 40, top_p: 0.9 },
      abortSignal: signal
    });
    
    const parsedDesign = parseJsonDict(step0Raw, ['domain', 'step1_system_prompt', 'step2_system_prompt']);
    let finalDesign = {};
    if (parsedDesign) {
      finalDesign = {
        domain: parsedDesign.domain,
        step1_system_prompt: parsedDesign.step1_system_prompt,
        step2_system_prompt: parsedDesign.step2_system_prompt
      };
      addLog('success', `[Step 0] 正常にプロンプトが自己設計されました。判定分野: ${finalDesign.domain}`);
    } else {
      addLog('warn', `[Step 0] JSONの解析に失敗したため、汎用フォールバックプロンプトを使用します。`);
      finalDesign = {
        domain: '汎用相談',
        step1_system_prompt: 'あなたは相談内容の分析専門家です。与えられた相談内容を起点として、検討・対応すべき具体的な論点・課題を列挙してください。出力は必ずJSON配列の文字列リストのみとし、他の説明文は含めないでください。',
        step2_system_prompt: 'あなたは相談内容への対応専門家です。与えられた「相談内容 → 論点」という状況に対して、実際に取るべき具体的な対応方法を簡潔に述べてください。出力は対応方法の本文のみとし、前置きや見出しは不要です。'
      };
    }
    
    if (signal.aborted) throw new DOMException('Aborted by user', 'AbortError');
    
    // Step 1: Identify Sub-issues
    addLog('step1', `📋 [Step 1] ${numIssues}件の主要な論点・課題の特定を開始します...`);
    const step1User = `相談内容: ${inputText}\nこの相談内容について、検討・対応すべき論点を${numIssues}種類挙げてください。`;
    const step1Prompt = buildChatMLPrompt([
      { role: 'system', content: finalDesign.step1_system_prompt },
      { role: 'user', content: step1User }
    ]);
    
    addLog('info', 'ローカルAIに論点の抽出を要求中 (Step 1)...');
    
    const step1Raw = await wllamaInstance.createCompletion(step1Prompt, {
      nPredict: 1024,
      sampling: { temp: 0.4, top_k: 40, top_p: 0.9 },
      abortSignal: signal
    });
    
    const issueList = parseJsonList(step1Raw, numIssues);
    addLog('success', `[Step 1] ${issueList.length}件の論点を特定しました。`);
    issueList.forEach((issue, idx) => {
      addLog('info', `特定された論点 ${idx+1}: "${issue}"`);
    });
    
    if (signal.aborted) throw new DOMException('Aborted by user', 'AbortError');
    
    // Step 2: Formulate Countermeasures
    addLog('step2', `🛠 [Step 2] 各論点に対する「具体的な対策・対処法」の自動設計に入ります...`);
    
    const results = [];
    for (let i = 0; i < issueList.length; i++) {
      const issue = issueList[i];
      addLog('info', `項目 [${i+1}/${issueList.length}] の対策を生成中: "${issue}"`);
      
      const step2User = `全体テーマ: ${inputText}\n特定された論点: ${issue}\n\nこの論点に対して、取るべき具体的な対策・対処法を述べてください。`;
      const step2Prompt = buildChatMLPrompt([
        { role: 'system', content: finalDesign.step2_system_prompt },
        { role: 'user', content: step2User }
      ]);
      
      if (signal.aborted) throw new DOMException('Aborted by user', 'AbortError');
      
      const step2Raw = await wllamaInstance.createCompletion(step2Prompt, {
        nPredict: 512,
        sampling: { temp: 0.3, top_k: 40, top_p: 0.9 },
        abortSignal: signal
      });
      
      const countermeasure = step2Raw.trim();
      results.push({ occurrence: issue, countermeasure: countermeasure });
    }
    
    addLog('success', `[Step 2] すべての対策設計が完了しました。`);
    addLog('info', '=======================================================');
    addLog('success', '🎉 処理がすべて成功しました！結果画面を表示します。');
    
    currentResults = {
      domain: finalDesign.domain,
      prompts: {
        step1: finalDesign.step1_system_prompt,
        step2: finalDesign.step2_system_prompt
      },
      results: results,
      chatResponses: [] // Real chat will be handled live
    };
    
    setTimeout(() => {
      showResultsUI();
      btnCancelPipeline.classList.add('hidden');
    }, 800);
    
  } catch (err) {
    console.error(err);
    if (err.name === 'AbortError' || err.message === 'Aborted by user') {
      addLog('warn', '🛑 ユーザーによりパイプラインが中止されました。');
    } else {
      addLog('warn', `🚨 エラーが発生しました: ${err.message || String(err)}`);
    }
    isPipelineRunning = false;
    logsLoaderLine.classList.add('hidden');
    btnCancelPipeline.classList.add('hidden');
  }
}

// Cancel Pipeline click
btnCancelPipeline.addEventListener('click', () => {
  if (abortController) {
    abortController.abort();
  }
});

// Live Chat logic for Real AI Mode
async function runRealChat(text) {
  chatInput.disabled = true;
  btnChatSend.disabled = true;
  
  // Format full chat history context
  const systemPrompt = `あなたは相談者および課題設計AIと並走する、高度なファシリテーターです。
これまでの相談内容と、抽出された課題・対策テーブルを深く理解し、ユーザーからのさらなる質問や深掘りに対応してください。
回答は簡潔でありながら具体的で、かつ建設的な対話となるようにしてください。

【今回の分析データ】
テーマ: ${eventInput.value.trim()}
分野: ${currentResults.domain}
課題と対策:
${currentResults.results.map((r, i) => `${i+1}. 課題: ${r.occurrence}\n   対策: ${r.countermeasure}`).join('\n')}`;

  const messages = [
    { role: 'system', content: systemPrompt }
  ];
  
  // Add previous conversational turns (max 8 messages for context buffer)
  const historySlice = currentChatHistory.slice(-8);
  historySlice.forEach(h => {
    messages.push({ role: h.role, content: h.content });
  });
  
  const chatPrompt = buildChatMLPrompt(messages);
  
  // Typing indicator
  const messagesDiv = document.getElementById('chat-messages');
  const typingEl = document.createElement('div');
  typingEl.className = 'chat-message assistant temp-typing';
  typingEl.innerHTML = `
    <div class="avatar">AI</div>
    <div class="chat-content"><span class="blink-cursor">_</span></div>
  `;
  messagesDiv.appendChild(typingEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
  
  try {
    const rawReply = await wllamaInstance.createCompletion(chatPrompt, {
      nPredict: 1024,
      sampling: { temp: 0.5, top_k: 40, top_p: 0.9 }
    });
    
    // Remove typing indicator and append actual message
    typingEl.remove();
    appendChatMessage('assistant', rawReply.trim());
  } catch (err) {
    console.error(err);
    typingEl.remove();
    appendChatMessage('assistant', `⚠️ エラーが発生しました: ${err.message || String(err)}`);
  } finally {
    chatInput.disabled = false;
    btnChatSend.disabled = false;
    chatInput.focus();
  }
}
