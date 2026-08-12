// Cyber Four Pillars Landing Page App Logic

// Ganzhi (干支) Dataset for the Simulator Preview
const ganzhiPool = [
  {
    kanji: "甲子",
    yomi: "きのえ ね",
    element: "木",
    keywords: "始まり、成長、開拓精神、まっすぐな向上心"
  },
  {
    kanji: "乙丑",
    yomi: "きのと うし",
    element: "木",
    keywords: "粘り強さ、柔軟な適応力、地道な積み重ね"
  },
  {
    kanji: "丙寅",
    yomi: "ひのえ とら",
    element: "火",
    keywords: "情熱、行動力、注目を集めるエネルギー"
  },
  {
    kanji: "丁卯",
    yomi: "ひのと う",
    element: "火",
    keywords: "繊細な感受性、社交性、穏やかな輝き"
  },
  {
    kanji: "戊辰",
    yomi: "つちのえ たつ",
    element: "土",
    keywords: "安定志向、包容力、大きな器と信頼"
  },
  {
    kanji: "己巳",
    yomi: "つちのと み",
    element: "土",
    keywords: "洞察力、現実的な判断、堅実な積み上げ"
  },
  {
    kanji: "庚午",
    yomi: "かのえ うま",
    element: "金",
    keywords: "決断力、スピード感、鋭い意志の力"
  },
  {
    kanji: "辛未",
    yomi: "かのと ひつじ",
    element: "金",
    keywords: "美意識、洗練、内に秘めた強さ"
  },
  {
    kanji: "壬申",
    yomi: "みずのえ さる",
    element: "水",
    keywords: "知略、機転、自由に流れる発想力"
  },
  {
    kanji: "癸酉",
    yomi: "みずのと とり",
    element: "水",
    keywords: "直感力、静かな洞察、内省的な強さ"
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

// Interactive Four Pillars Simulator logic
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

    consoleTextEl.innerHTML += `<div class="system-log">&gt; CONVERGING BIRTH VECTOR WITH 60 KANSHI MATRIX...</div>`;
    await sleep(1000);

    consoleTextEl.innerHTML += `<div class="system-log">&gt; MEISHIKI (命式) COMPILED. SELECTING FOUR PILLAR NODES...</div>`;
    await sleep(800);

    // Pick 4 distinct ganzhi from pool for Year / Month / Day / Hour pillars
    const selectedPillars = [];
    const poolCopy = [...ganzhiPool];
    for (let i = 0; i < 4; i++) {
      const idx = Math.floor(Math.random() * poolCopy.length);
      const pillar = poolCopy.splice(idx, 1)[0];
      selectedPillars.push(pillar);
    }

    // Step 2: Step-by-step pillar reveals
    const positionLabels = ["YEAR (年柱)", "MONTH (月柱)", "DAY (日柱)", "HOUR (時柱)"];

    for (let i = 0; i < 4; i++) {
      const pillarData = selectedPillars[i];
      const cardEl = cardElements[i];
      const containerEl = slotContainers[i];

      // Bind front data to the HTML template
      const frontNum = cardEl.querySelector(".front-num");
      const frontArt = cardEl.querySelector(".front-art");
      const frontTitle = cardEl.querySelector(".front-title");

      frontNum.textContent = pillarData.element;
      frontArt.innerHTML = `<div class="front-kanji">${pillarData.kanji}</div>`;
      frontTitle.textContent = pillarData.yomi;

      // Update logs
      consoleTextEl.innerHTML += `<div class="system-log" style="color: var(--color-gold-bright)">&gt; REVEALING ${positionLabels[i]} PILLAR: ${pillarData.kanji}（${pillarData.yomi}）...</div>`;

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
    const [yearP, monthP, dayP, hourP] = selectedPillars;

    const interpretationText =
      `【サイバー四柱推命・鑑定ログ】\n` +
      `「${query}」として展開された命式より、四本柱を抽出しました。\n\n` +
      `● 年柱：『${yearP.kanji}（${yearP.yomi}）』五行：${yearP.element}\n` +
      `キーワードは「${yearP.keywords}」。生まれ持った家系や社会性のルーツ、幼少期の環境を象徴し、あなたの人生の土台となっています。\n\n` +
      `● 月柱：『${monthP.kanji}（${monthP.yomi}）』五行：${monthP.element}\n` +
      `キーワードは「${monthP.keywords}」。仕事や対人関係における行動傾向、青年期以降の運気の流れがここに映し出されています。\n\n` +
      `● 日柱：『${dayP.kanji}（${dayP.yomi}）』五行：${dayP.element}\n` +
      `キーワードは「${dayP.keywords}」。あなた自身の本質・性格の核を示す最重要の柱で、配偶者運や自我のあり方とも深く関わります。\n\n` +
      `● 時柱：『${hourP.kanji}（${hourP.yomi}）』五行：${hourP.element}\n` +
      `キーワードは「${hourP.keywords}」。晩年運や子孫運、潜在的な才能の開花を象徴します。このエネルギーを意識的に取り入れることで、悩みの突破口が開けるでしょう。\n\n` +
      `※ これはローカルニューラルエンジンによる簡易スキャンです。実機ターミナル（CYBER FOUR PILLARS App）を起動すれば、3Bモデルが正確な命式計算・大運/歳運まで解析し、あなたの追加の対話にリアルタイムに同期します。`;

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
        <div class="system-log">&gt; CYBER FOUR PILLARS // QUANTUM CORE v1.0.4 ACTIVE</div>
        <p>「サイバー四柱推命システム」プレビュー端末です。あなたの生年月日時と量子同調を行います。生まれた日時を入力し、[SYNC]を実行してください。</p>
      `;

      actionRow.innerHTML = `
        <div class="sim-input-box">
          <input type="text" id="sim-worry-input" class="sim-input" placeholder="例: 1990年5月15日 14時30分生まれ" required>
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
