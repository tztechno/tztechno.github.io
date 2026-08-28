// Cyber President Landing Page App Logic

// Helper to delay execution
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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
      const isActive = item.classList.contains("active");
      faqItems.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // 3. Match Preview Simulator Logic
  const demoBtn = document.getElementById("sim-demo-btn");
  const consoleTextEl = document.getElementById("console-text-display");
  const slotContainers = document.querySelectorAll(".sim-slot-container");
  const cardElements = document.querySelectorAll(".sim-card");

  let isRunning = false;

  function appendLog(html) {
    const line = document.createElement("div");
    line.className = "system-log";
    line.innerHTML = html;
    consoleTextEl.appendChild(line);
    consoleTextEl.parentElement.scrollTop = consoleTextEl.parentElement.scrollHeight;
  }

  function resetSlots() {
    cardElements.forEach(card => {
      card.className = "sim-card";
    });
    slotContainers.forEach(container => container.classList.remove("active"));
  }

  // A single simulated round: alternating LEAD / FOLLOW tricks for Daifugo
  const simulationSteps = [
    { type: "log", text: "DEALING 5 CARDS EACH — STOCK PILE: 43 CARDS" },
    { type: "log", text: "CARD EXCHANGE: あなたが不要な [ハートの4] を、AIが最強の [Joker] を交換" },
    {
      type: "trick",
      lead: { rank: "3", suit: "♣", red: false },
      follow: { rank: "5", suit: "♣", red: false },
      winner: "ai", 
      winnerLabel: "AI",
      points: "AIの親",
      youCards: 5,
      aiCards: 4,
      desc: "トリック1: AIが 5♣ で獲得 (あなたはパスし、山札から1枚引きました)",
    },
    {
      type: "trick",
      lead: { rank: "J", suit: "♦", red: true },
      follow: { rank: "K", suit: "♦", red: true },
      winner: "you",
      winnerLabel: "あなた",
      points: "あなたの親",
      youCards: 4,
      aiCards: 3,
      desc: "トリック2: あなたが K♦ で獲得 (より強いカード)",
    },
    { type: "log", text: "✂ 8切り発生！ あなたが 8♥ をプレイし場が流れました。あなたの親番継続。" },
    {
      type: "trick",
      lead: { rank: "2", suit: "♠", red: false },
      follow: { rank: "PASS", suit: "—", red: false },
      winner: "you",
      winnerLabel: "あなた",
      points: "あなたの親",
      youCards: 2,
      aiCards: 4,
      desc: "トリック3: 2♠に対しAIはパス。AIは山札から1枚引き、場が流れます。",
    },
    {
      type: "trick",
      lead: { rank: "Q", suit: "♠", red: false },
      follow: { rank: "A", suit: "♠", red: false },
      winner: "ai",
      winnerLabel: "AI",
      points: "AIの親",
      youCards: 1,
      aiCards: 3,
      desc: "トリック4: AIが A♠ で獲得",
    },
    {
      type: "trick",
      lead: { rank: "J", suit: "♣", red: false },
      follow: { rank: "Q", suit: "♣", red: false },
      winner: "you",
      winnerLabel: "あなた",
      points: "手札: 0枚",
      youCards: 0,
      aiCards: 2,
      desc: "トリック5: AIの J♣ に対し、あなたが Q♣ で勝利。手札を使い切りました！",
    },
    { type: "log", text: '<span style="color: var(--color-gold-bright)">&gt; あなたが手札をすべて使い切り、大富豪になりました！ 🎉</span>' },
  ];

  async function runAutoDemo() {
    if (isRunning) return;
    isRunning = true;
    demoBtn.disabled = true;
    demoBtn.textContent = "AUTO PLAY 実行中...";

    resetSlots();
    consoleTextEl.innerHTML = "";

    const leadRankEl = document.getElementById("card-a-rank");
    const leadSuitEl = document.getElementById("card-a-suit");
    const followRankEl = document.getElementById("card-b-rank");
    const followSuitEl = document.getElementById("card-b-suit");
    const winnerTextEl = document.getElementById("winner-text");
    const winnerSubEl = document.getElementById("winner-sub");
    const scoreTextEl = document.getElementById("score-text");
    const scoreSubEl = document.getElementById("score-sub");

    if (scoreTextEl) scoreTextEl.textContent = "あなた: 5枚";
    if (scoreSubEl) scoreSubEl.textContent = "AI: 5枚";

    appendLog("&gt; MATCH ENGINE INITIALIZING...");
    await sleep(700);

    for (const step of simulationSteps) {
      if (step.type === "log") {
        if (leadRankEl) leadRankEl.textContent = "";
        if (followRankEl) followRankEl.textContent = "";
        cardElements[0]?.classList.remove("drawn", "flipped");
        cardElements[1]?.classList.remove("drawn", "flipped");
        slotContainers[0]?.classList.remove("active");
        slotContainers[1]?.classList.remove("active");

        appendLog(`&gt; ${step.text}`);
        await sleep(900);
        continue;
      }

      // Reveal LEAD card
      if (leadRankEl) leadRankEl.textContent = step.lead.rank;
      if (leadSuitEl) {
        leadSuitEl.textContent = step.lead.suit;
        leadSuitEl.className = `front-suit ${step.lead.red ? "red" : ""}`;
      }
      cardElements[0]?.classList.add("drawn", "flipped");
      slotContainers[0]?.classList.add("active");
      await sleep(450);

      // Reveal FOLLOW card
      if (followRankEl) followRankEl.textContent = step.follow.rank;
      if (followSuitEl) {
        followSuitEl.textContent = step.follow.suit;
        followSuitEl.className = `front-suit ${step.follow.red ? "red" : ""}`;
      }
      cardElements[1]?.classList.add("drawn", "flipped");
      slotContainers[1]?.classList.add("active");
      await sleep(450);

      // Resolve trick
      if (winnerTextEl) winnerTextEl.textContent = step.winnerLabel;
      if (winnerSubEl) winnerSubEl.textContent = step.points;
      cardElements[2]?.classList.add("drawn", "flipped");
      slotContainers[2]?.classList.add("active");

      if (scoreTextEl) scoreTextEl.textContent = `あなた: ${step.youCards}枚`;
      if (scoreSubEl) scoreSubEl.textContent = `AI: ${step.aiCards}枚`;
      cardElements[3]?.classList.add("drawn", "flipped");
      slotContainers[3]?.classList.add("active");

      appendLog(`&gt; ${step.desc}`);
      await sleep(1200);
    }

    await sleep(400);

    const winP = document.createElement("p");
    winP.innerHTML = "🎉 CLEAR！実機では紙吹雪の演出とともにお祝いします。";
    consoleTextEl.appendChild(winP);
    consoleTextEl.parentElement.scrollTop = consoleTextEl.parentElement.scrollHeight;

    demoBtn.disabled = false;
    demoBtn.textContent = "もう一度 AUTO DEMO を実行";
    isRunning = false;
  }

  if (demoBtn) {
    demoBtn.addEventListener("click", runAutoDemo);
  }
});
