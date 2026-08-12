// Cyber Holoscope Landing Page App Logic

// Zodiac Sign Dataset for the Simulator Preview
const zodiacPool = [
  {
    kanji: "牡羊",
    yomi: "おひつじ",
    element: "火",
    keywords: "開拓精神、瞬発力、まっすぐな情熱"
  },
  {
    kanji: "牡牛",
    yomi: "おうし",
    element: "地",
    keywords: "安定志向、五感の豊かさ、揺るぎない忍耐"
  },
  {
    kanji: "双子",
    yomi: "ふたご",
    element: "風",
    keywords: "好奇心、情報収集力、軽やかな知性"
  },
  {
    kanji: "蟹",
    yomi: "かに",
    element: "水",
    keywords: "共感力、家族的な絆、深い感受性"
  },
  {
    kanji: "獅子",
    yomi: "しし",
    element: "火",
    keywords: "自己表現、存在感、太陽のような輝き"
  },
  {
    kanji: "乙女",
    yomi: "おとめ",
    element: "地",
    keywords: "分析力、几帳面さ、実務的な洞察"
  },
  {
    kanji: "天秤",
    yomi: "てんびん",
    element: "風",
    keywords: "バランス感覚、社交性、美意識"
  },
  {
    kanji: "蠍",
    yomi: "さそり",
    element: "水",
    keywords: "探究心、集中力、内に秘めた情熱"
  },
  {
    kanji: "射手",
    yomi: "いて",
    element: "火",
    keywords: "自由な発想、冒険心、広い視野"
  },
  {
    kanji: "山羊",
    yomi: "やぎ",
    element: "地",
    keywords: "責任感、忍耐力、着実な野心"
  },
  {
    kanji: "水瓶",
    yomi: "みずがめ",
    element: "風",
    keywords: "独創性、革新性、俯瞰する知性"
  },
  {
    kanji: "魚",
    yomi: "うお",
    element: "水",
    keywords: "直感力、共感、境界を超える想像力"
  }
];

// Helper to delay execution
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Typewriter effect function
async function typewriteText(element, text, speed = 25) {
  element.innerHTML = '';
  const paragraphs = text.split('\n\n');

  for (let i = 0; i < paragraphs.length; i++) {
    const p = document.createElement('p');
    element.appendChild(p);

    const words = paragraphs[i];
    let currentIdx = 0;

    while (currentIdx < words.length) {
      p.innerHTML = words.slice(0, currentIdx + 1) + '<span class="cursor-blink"></span>';
      currentIdx++;
      await sleep(speed);
    }

    // Remove cursor from this paragraph before moving to next
    const cursor = p.querySelector('.cursor-blink');
    if (cursor) cursor.remove();
  }

  // Add a final cursor at the very end
  const finalCursor = document.createElement('span');
  finalCursor.className = 'cursor-blink';
  element.appendChild(finalCursor);
}

// Interactive Natal Chart Simulator logic
document.addEventListener("DOMContentLoaded", () => {
  // 1. Header scroll effect
  const header = document.querySelector("header.site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 2. FAQ Accordions
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      // Toggle active class
      const isActive = item.classList.contains("active");

      // Close all first
      faqItems.forEach(i => i.classList.remove("active"));

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // 3. Simulator Logic
  const simInput = document.getElementById("sim-worry-input");
  const simSubmit = document.getElementById("sim-submit-btn");
  const consoleTextEl = document.getElementById("console-text-display");
  const cardElements = document.querySelectorAll(".sim-card");
  const slotContainers = document.querySelectorAll(".sim-slot-container");
  const actionRow = document.getElementById("console-action-row");

  let isRunning = false;

  async function handleDraw(event) {
    if (event) event.preventDefault();
    const query = simInput.value.trim();
    if (!query || isRunning) return;

    isRunning = true;
    simInput.disabled = true;
    simSubmit.disabled = true;

    // Clear previous status
    cardElements.forEach(card => {
      card.className = "sim-card";
    });
    slotContainers.forEach(container => container.classList.remove("active"));

    // Step 1: Log initial system connection
    consoleTextEl.innerHTML = `<div class="system-log">&gt; INITIALIZING QUANTUM SYNC TERMINAL...</div>`;
    await sleep(800);

    consoleTextEl.innerHTML += `<div class="system-log">&gt; CONVERGING BIRTH VECTOR WITH 12 ZODIAC MATRIX...</div>`;
    await sleep(1000);

    consoleTextEl.innerHTML += `<div class="system-log">&gt; NATAL CHART COMPILED. SELECTING CHART POINTS...</div>`;
    await sleep(800);

    // Pick 4 distinct zodiac signs from pool for Sun / Moon / Asc / MC points
    const selectedPoints = [];
    const poolCopy = [...zodiacPool];
    for (let i = 0; i < 4; i++) {
      const idx = Math.floor(Math.random() * poolCopy.length);
      const point = poolCopy.splice(idx, 1)[0];
      selectedPoints.push(point);
    }

    // Step 2: Step-by-step point reveals
    const positionLabels = ["SUN (太陽星座)", "MOON (月星座)", "ASC (アセンダント)", "MC (天頂点)"];

    for (let i = 0; i < 4; i++) {
      const pointData = selectedPoints[i];
      const cardEl = cardElements[i];
      const containerEl = slotContainers[i];

      // Bind front data to the HTML template
      const frontNum = cardEl.querySelector(".front-num");
      const frontArt = cardEl.querySelector(".front-art");
      const frontTitle = cardEl.querySelector(".front-title");

      frontNum.textContent = pointData.element;
      frontArt.innerHTML = `<div class="front-kanji">${pointData.kanji}</div>`;
      frontTitle.textContent = `${pointData.yomi}座`;

      // Update logs
      consoleTextEl.innerHTML += `<div class="system-log" style="color: var(--color-gold-bright)">&gt; REVEALING ${positionLabels[i]}: ${pointData.kanji}座（${pointData.yomi}座）...</div>`;

      // Trigger card draw styling & flip
      cardEl.classList.add("drawn");
      containerEl.classList.add("active");

      await sleep(200);
      cardEl.classList.add("flipped");

      await sleep(1000);
    }

    // Step 3: Stream AI Interpretation
    consoleTextEl.innerHTML += `<div class="system-log" style="color: var(--color-magenta)">&gt; QUANTUM MATRIX STABILIZED. PARSING SUBINTELLIGENCE INTERPRETATION...</div>`;
    await sleep(1200);

    // Assemble dynamic interpretation copy
    const [sunP, moonP, ascP, mcP] = selectedPoints;

    const interpretationText =
      `【サイバーホロスコープ・鑑定ログ】\n` +
      `「${query}」として展開されたネイタルチャートより、主要な4ポイントを抽出しました。\n\n` +
      `● 太陽星座：『${sunP.kanji}座（${sunP.yomi}座）』エレメント：${sunP.element}\n` +
      `キーワードは「${sunP.keywords}」。あなたの本質的な自己表現、人生の目的意識を象徴する最も重要なポイントです。\n\n` +
      `● 月星座：『${moonP.kanji}座（${moonP.yomi}座）』エレメント：${moonP.element}\n` +
      `キーワードは「${moonP.keywords}」。感情の動き方、無意識の欲求、安心を感じる状況を映し出しています。\n\n` +
      `● アセンダント：『${ascP.kanji}座（${ascP.yomi}座）』エレメント：${ascP.element}\n` +
      `キーワードは「${ascP.keywords}」。他者から見たあなたの第一印象、人生への向き合い方の入り口を示します。\n\n` +
      `● MC（天頂点）：『${mcP.kanji}座（${mcP.yomi}座）』エレメント：${mcP.element}\n` +
      `キーワードは「${mcP.keywords}」。社会的な役割、キャリアの方向性、目指すべき到達点を象徴します。\n\n` +
      `※ これはローカルニューラルエンジンによる簡易スキャンです。実機ターミナル（CYBER HOLOSCOPE App）を起動すれば、3Bモデルが正確な天体位置計算・トランジットまで解析し、あなたの追加の対話にリアルタイムに同期します。`;

    await typewriteText(consoleTextEl, interpretationText, 20);

    // Step 4: Show reset options
    await sleep(500);
    actionRow.innerHTML = `
      <button id="sim-reset-btn" class="btn-cyber btn-magenta" style="padding: 0.6rem 1.4rem; font-size: 0.75rem;">
        ターミナルを初期化する
      </button>
    `;

    document.getElementById("sim-reset-btn").addEventListener("click", () => {
      // Restore initial simulator state
      simInput.value = "";
      simInput.disabled = false;
      simSubmit.disabled = false;
      isRunning = false;

      cardElements.forEach(card => {
        card.className = "sim-card";
      });
      slotContainers.forEach(container => container.classList.remove("active"));

      consoleTextEl.innerHTML = `
        <div class="system-log">&gt; CYBER HOLOSCOPE // QUANTUM CORE v1.0.4 ACTIVE</div>
        <p>「サイバーホロスコープシステム」プレビュー端末です。あなたの生年月日時と出生地を量子同調します。生まれた日時と場所を入力し、[SYNC]を実行してください。</p>
      `;

      actionRow.innerHTML = `
        <div class="sim-input-box">
          <input type="text" id="sim-worry-input" class="sim-input" placeholder="例: 1990年5月15日 14時30分 東京生まれ" required>
          <button type="submit" id="sim-submit-btn" class="sim-submit">SYNC</button>
        </div>
      `;

      // Re-bind events to dynamically created elements
      document.querySelector("form.sim-form").addEventListener("submit", handleDraw);
    });
  }

  // Bind initial form submit
  const simForm = document.querySelector("form.sim-form");
  if (simForm) {
    simForm.addEventListener("submit", handleDraw);
  }
});
