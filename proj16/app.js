// Cyber Tarot Landing Page App Logic

// Card Dataset for the Simulator Preview
const tarotCardsPool = [
  {
    nameEn: "The Fool",
    nameJp: "愚者",
    number: "0",
    uprightKeywords: "自由、出発、可能性、直感",
    reversedKeywords: "軽率、無計画、焦り、現実逃避",
    // SVG path description (minimalistic stylized geometric icons)
    svgPath: `
      <!-- Stylized path for The Fool (traveller and rising star) -->
      <circle cx="50" cy="40" r="12" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2" fill="none" />
      <path d="M50,52 L50,90 M50,60 L32,75 M50,60 L68,75 M50,90 L35,115 M50,90 L65,115" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      <polygon points="75,25 78,33 86,33 80,38 82,46 75,41 68,46 70,38 64,33 72,33" fill="var(--color-gold-bright)" />
      <path d="M20,110 Q50,95 80,110" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none" />
    `
  },
  {
    nameEn: "The Magician",
    nameJp: "魔術師",
    number: "I",
    uprightKeywords: "創造力、意志、才能、技術の開花",
    reversedKeywords: "優柔不断、スランプ、騙し、意志薄弱",
    svgPath: `
      <!-- Stylized path for The Magician (infinity & table of elements) -->
      <path d="M35,35 C20,35 20,55 35,55 C50,55 50,35 65,35 C80,35 80,55 65,55 C50,55 50,35 35,35 Z" stroke="currentColor" stroke-width="1.5" fill="none" />
      <line x1="50" y1="65" x2="50" y2="105" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <circle cx="50" y2="65" r="4" fill="var(--color-cyan)" />
      <rect x="25" y="105" width="50" height="8" rx="2" stroke="currentColor" stroke-width="1.5" fill="none" />
      <circle cx="35" cy="85" r="5" stroke="currentColor" stroke-width="1" />
      <polygon points="65,80 70,90 60,90" stroke="currentColor" stroke-width="1" fill="none" />
    `
  },
  {
    nameEn: "The High Priestess",
    nameJp: "女教皇",
    number: "II",
    uprightKeywords: "インスピレーション、知性、静寂、客観性",
    reversedKeywords: "感情的、疑心暗鬼、神経質、冷酷さ",
    svgPath: `
      <!-- Stylized path for High Priestess (crescent moon and pillars) -->
      <line x1="25" y1="30" x2="25" y2="110" stroke="currentColor" stroke-width="3" />
      <line x1="75" y1="30" x2="75" y2="110" stroke="currentColor" stroke-width="3" />
      <path d="M15,110 L85,110" stroke="currentColor" stroke-width="2" />
      <path d="M40,45 C40,45 60,55 60,70 C60,85 40,95 40,95 C40,95 52,85 52,70 C52,55 40,45 40,45 Z" fill="var(--color-cyan)" />
      <circle cx="50" cy="70" r="18" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" fill="none" />
    `
  },
  {
    nameEn: "Wheel of Fortune",
    nameJp: "運命の輪",
    number: "X",
    uprightKeywords: "幸運の到来、転換点、急展開、チャンス",
    reversedKeywords: "空回り、暗転、不運、一時的な後退",
    svgPath: `
      <!-- Stylized path for Wheel of Fortune (glowing digital wheel) -->
      <circle cx="50" cy="70" r="28" stroke="currentColor" stroke-width="1.5" fill="none" />
      <circle cx="50" cy="70" r="18" stroke="currentColor" stroke-dasharray="4 2" stroke-width="1" fill="none" />
      <circle cx="50" cy="70" r="6" stroke="var(--color-cyan)" fill="none" />
      <line x1="50" y1="36" x2="50" y2="104" stroke="currentColor" stroke-width="1" />
      <line x1="16" y1="70" x2="84" y2="70" stroke="currentColor" stroke-width="1" />
      <line x1="26" y1="46" x2="74" y2="94" stroke="currentColor" stroke-width="1" />
      <line x1="26" y1="94" x2="74" y2="46" stroke="currentColor" stroke-width="1" />
    `
  },
  {
    nameEn: "The Star",
    nameJp: "星",
    number: "XVII",
    uprightKeywords: "希望、ひらめき、精神的充足、明るい見通し",
    reversedKeywords: "見通しの甘さ、失望、自暴自棄、高望み",
    svgPath: `
      <!-- Stylized path for The Star (central gold star, pouring pitchers) -->
      <polygon points="50,22 55,38 71,38 58,48 63,64 50,54 37,64 42,48 29,38 45,38" fill="var(--color-gold-bright)" />
      <circle cx="25" cy="85" r="3" stroke="currentColor" stroke-width="1" fill="none" />
      <path d="M25,88 Q35,92 40,115" stroke="var(--color-cyan)" stroke-width="1.5" stroke-linecap="round" fill="none" />
      <circle cx="75" cy="85" r="3" stroke="currentColor" stroke-width="1" fill="none" />
      <path d="M75,88 Q65,92 60,115" stroke="var(--color-cyan)" stroke-width="1.5" stroke-linecap="round" fill="none" />
      <circle cx="30" cy="30" r="1.5" fill="#fff" />
      <circle cx="70" cy="28" r="1.5" fill="#fff" />
      <circle cx="20" cy="55" r="1" fill="#fff" />
    `
  },
  {
    nameEn: "The World",
    nameJp: "世界",
    number: "XXI",
    uprightKeywords: "大団円、完璧な調和、目標達成、新たな段階",
    reversedKeywords: "未完成、マンネリ、スランプ、現状維持",
    svgPath: `
      <!-- Stylized path for The World (cosmic wreath and core figure) -->
      <ellipse cx="50" cy="70" rx="25" ry="38" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />
      <path d="M50,48 L50,85 M50,55 L35,68 M50,62 L65,52 M50,85 L38,105 M50,85 L62,105" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      <circle cx="50" cy="70" r="32" stroke="var(--color-magenta)" stroke-width="0.7" fill="none" opacity="0.5" />
      <polygon points="50,26 53,32 47,32" fill="var(--color-gold-bright)" />
      <polygon points="50,114 53,108 47,108" fill="var(--color-gold-bright)" />
    `
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

// Interactive Tarot Simulator logic
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
    
    consoleTextEl.innerHTML += `<div class="system-log">&gt; CONVERGING HUMAN COGNITIVE WAVEFORMS WITH DECK VECTOR SPACE...</div>`;
    await sleep(1000);
    
    consoleTextEl.innerHTML += `<div class="system-log">&gt; DECK SHUFFLED. SELECTING THREE CARD NODES...</div>`;
    await sleep(800);

    // Pick 3 random cards from pool
    const selectedCards = [];
    const poolCopy = [...tarotCardsPool];
    for (let i = 0; i < 3; i++) {
      const idx = Math.floor(Math.random() * poolCopy.length);
      const card = poolCopy.splice(idx, 1)[0];
      const reversed = Math.random() < 0.3; // 30% chance of reversal
      selectedCards.push({ ...card, reversed });
    }

    // Step 2: Step-by-step card flips
    const positionLabels = ["PAST (過去)", "PRESENT (現在)", "FUTURE (未来)"];
    
    for (let i = 0; i < 3; i++) {
      const cardData = selectedCards[i];
      const cardEl = cardElements[i];
      const containerEl = slotContainers[i];
      
      // Bind front data to the HTML template
      const frontNum = cardEl.querySelector(".front-num");
      const frontArt = cardEl.querySelector(".front-art");
      const frontTitle = cardEl.querySelector(".front-title");
      
      frontNum.textContent = cardData.number;
      frontArt.innerHTML = `<svg viewBox="0 0 100 140">${cardData.svgPath}</svg>`;
      
      const orientationLabel = cardData.reversed ? " (逆位置)" : " (正位置)";
      frontTitle.textContent = cardData.nameJp + (cardData.reversed ? " ▽" : "");
      
      // Update logs
      consoleTextEl.innerHTML += `<div class="system-log" style="color: var(--color-gold-bright)">&gt; REVEALING ${positionLabels[i]} CARD: ${cardData.nameJp}${orientationLabel}...</div>`;
      
      // Trigger card draw styling & flip
      cardEl.classList.add("drawn");
      containerEl.classList.add("active");
      
      await sleep(200);
      cardEl.classList.add("flipped");
      if (cardData.reversed) {
        cardEl.classList.add("reversed");
      }
      
      await sleep(1000);
    }

    // Step 3: Stream AI Interpretation
    consoleTextEl.innerHTML += `<div class="system-log" style="color: var(--color-magenta)">&gt; QUANTUM MATRIX STABILIZED. PARSING SUBINTELLIGENCE INTERPRETATION...</div>`;
    await sleep(1200);

    // Assemble dynamic interpretation copy
    const c1 = selectedCards[0];
    const c2 = selectedCards[1];
    const c3 = selectedCards[2];

    const c1Name = `『${c1.nameJp}（${c1.reversed ? '逆位置' : '正位置'}）』`;
    const c2Name = `『${c2.nameJp}（${c2.reversed ? '逆位置' : '正位置'}）』`;
    const c3Name = `『${c3.nameJp}（${c3.reversed ? '逆位置' : '正位置'}）』`;

    const c1Keywords = c1.reversed ? c1.reversedKeywords : c1.uprightKeywords;
    const c2Keywords = c2.reversed ? c2.reversedKeywords : c2.uprightKeywords;
    const c3Keywords = c3.reversed ? c3.reversedKeywords : c3.uprightKeywords;

    const interpretationText = 
      `【サイバータロット・解釈ログ】\n` +
      `あなたのお悩み：「${query}」について、量子デッキより3枚のカードを抽出しました。\n\n` +
      `● 過去を示すカード：${c1Name}\n` +
      `キーワードは「${c1Keywords}」。過去の出来事や内面のルーツにおいて、この要素が現在のあなたの土台となっています。変化の兆しやこれまでの行動が静かに反響しています。\n\n` +
      `● 現在を示すカード：${c2Name}\n` +
      `キーワードは「${c2Keywords}」。現在の状況はまさにこのカードの波動の渦中にあります。課題を解決するヒントや、現在の感情の揺らぎがここに映し出されています。\n\n` +
      `● 未来を示すカード：${c3Name}\n` +
      `キーワードは「${c3Keywords}」。これから訪れる未来の流れ、あるいは取るべきアプローチを象徴します。このエネルギーを意識的に取り入れることで、悩みの突破口が開けるでしょう。\n\n` +
      `※ これはローカルニューラルエンジンによる簡易スキャンです。実機ターミナル（CYBER TAROT App）を起動すれば、1.5Bモデルがあなたの追加の対話にリアルタイムに同期し、無限の追加質問にお答えします。`;

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
        <div class="system-log">&gt; CYBER TAROT // QUANTUM CORE v1.0.4 ACTIVE</div>
        <p>「サイバータロット・システム」プレビュー端末です。あなたの潜在意識と量子同調を行います。悩みごとを入力し、[SYNC]を実行してください。</p>
      `;
      
      actionRow.innerHTML = `
        <div class="sim-input-box">
          <input type="text" id="sim-worry-input" class="sim-input" placeholder="例: 近い将来、仕事で大きな転機は訪れますか？" required>
          <button type="submit" id="sim-submit-btn" class="sim-submit">SYNC</button>
        </div>
      `;
      
      // Re-bind events to dynamically created elements
      const newSimInput = document.getElementById("sim-worry-input");
      const newSimSubmit = document.getElementById("sim-submit-btn");
      
      // Re-assign references
      simInput.value = ""; // update outer reference scope
      document.querySelector("form.sim-form").addEventListener("submit", handleDraw);
    });
  }

  // Bind initial form submit
  const simForm = document.querySelector("form.sim-form");
  if (simForm) {
    simForm.addEventListener("submit", handleDraw);
  }
});
