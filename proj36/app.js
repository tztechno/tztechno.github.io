// Cyber Freecell Landing Page App Logic

// Helper to delay execution
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SUIT_SLOTS = ["♠", "♥", "♦", "♣"];

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

  // 3. Auto Play Demo Simulator Logic
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

  async function runAutoDemo() {
    if (isRunning) return;
    isRunning = true;
    demoBtn.disabled = true;
    demoBtn.textContent = "AUTO PLAY 実行中...";

    resetSlots();
    consoleTextEl.innerHTML = "";
    appendLog("&gt; AUTO PLAY ENGINE INITIALIZING...");
    await sleep(700);

    appendLog("&gt; DEALING 52 CARDS ACROSS 8 TABLEAU COLUMNS...");
    await sleep(700);

    appendLog("&gt; SEARCHING FOR VALID MOVES EVERY 350ms...");
    await sleep(700);

    for (let i = 0; i < RANKS.length; i++) {
      const rank = RANKS[i];

      for (let s = 0; s < SUIT_SLOTS.length; s++) {
        const cardEl = cardElements[s];
        const containerEl = slotContainers[s];
        const frontRank = cardEl.querySelector(".front-rank");

        frontRank.textContent = rank;
        containerEl.classList.add("active");

        if (i === 0) {
          cardEl.classList.add("drawn");
          cardEl.classList.add("flipped");
        }
      }

      appendLog(
        `&gt; FOUNDATION UPDATE [${i + 1}/13]: ♠${rank} ♥${rank} ♦${rank} ♣${rank}`
      );

      await sleep(280);
    }

    appendLog('<span style="color: var(--color-gold-bright)">&gt; ALL FOUNDATIONS COMPLETE (52/52)</span>');
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
