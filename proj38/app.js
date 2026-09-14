// Cyber Schnapsen Landing Page App Logic

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

  // A single simulated round: alternating LEAD (you) / FOLLOW (AI) tricks,
  // interspersed with log-only events (trump exchange, marriage). Illustrative
  // only — the real engine enforces full Schnapsen rules; see the live app.
  const simulationSteps = [
    { type: "log", text: "DEALING 5 CARDS EACH — TRUMP SUIT: ♥ (A♥ REVEALED)" },
    { type: "log", text: "TRUMP EXCHANGE: あなたが J♥ を場の A♥ と交換" },
    {
      type: "trick",
      lead: { rank: "Q", suit: "♠", red: false },
      follow: { rank: "J", suit: "♠", red: false },
      winner: "you", points: 5,
      desc: "TRICK 1: あなたが獲得 (Q♠+J♠ = 5PT)",
    },
    {
      type: "trick",
      lead: { rank: "K", suit: "♦", red: true },
      follow: { rank: "10", suit: "♦", red: true },
      winner: "ai", points: 14,
      desc: "TRICK 2: AIが獲得 (K♦+10♦ = 14PT)",
    },
    { type: "log", text: "MARRIAGE DECLARED: AIが K♦+Q♦ を宣言 (+20PT)" },
    {
      type: "trick",
      lead: { rank: "K", suit: "♦", red: true },
      follow: { rank: "Q", suit: "♦", red: true },
      winner: "ai", points: 7,
      desc: "TRICK 3: AIが獲得、結婚の+20PTも確定",
    },
    {
      type: "trick",
      lead: { rank: "A", suit: "♠", red: false },
      follow: { rank: "10", suit: "♠", red: false },
      winner: "you", points: 21,
      desc: "TRICK 4: あなたが獲得 (A♠+10♠ = 21PT)",
    },
    {
      type: "trick",
      lead: { rank: "Q", suit: "♥", red: true },
      follow: { rank: "J", suit: "♣", red: false },
      winner: "you", points: 5,
      desc: "TRICK 5: 切り札Q♥であなたが獲得 (5PT)",
    },
    {
      type: "trick",
      lead: { rank: "10", suit: "♥", red: true },
      follow: { rank: "A", suit: "♣", red: false },
      winner: "you", points: 21,
      desc: "TRICK 6: 切り札10♥であなたが獲得 (21PT)",
    },
    { type: "log", text: '<span style="color: var(--color-gold-bright)">&gt; あなたが66点に到達 — シュナップス宣言！ 🎉</span>' },
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

    let youScore = 0;
    let aiScore = 0;
    if (scoreTextEl) scoreTextEl.textContent = "あなた: 0";
    if (scoreSubEl) scoreSubEl.textContent = "AI: 0";

    appendLog("&gt; MATCH ENGINE INITIALIZING...");
    await sleep(700);

    for (const step of simulationSteps) {
      if (step.type === "log") {
        // Log-only events (exchange, marriage) clear the trick slots.
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
      const youWin = step.winner === "you";
      if (winnerTextEl) winnerTextEl.textContent = youWin ? "あなた" : "AI";
      if (winnerSubEl) winnerSubEl.textContent = `+${step.points}PT`;
      cardElements[2]?.classList.add("drawn", "flipped");
      slotContainers[2]?.classList.add("active");

      if (youWin) youScore += step.points; else aiScore += step.points;
      if (scoreTextEl) scoreTextEl.textContent = `あなた: ${youScore}`;
      if (scoreSubEl) scoreSubEl.textContent = `AI: ${aiScore}`;
      cardElements[3]?.classList.add("drawn", "flipped");
      slotContainers[3]?.classList.add("active");

      appendLog(`&gt; ${step.desc}`);
      await sleep(1000);
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
