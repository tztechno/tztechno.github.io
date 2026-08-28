// Cyber Pyramid Landing Page App Logic

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
    
    const cardARankEl = document.getElementById("card-a-rank");
    const cardASuitEl = document.getElementById("card-a-suit");
    const cardBRankEl = document.getElementById("card-b-rank");
    const cardBSuitEl = document.getElementById("card-b-suit");
    const discardCountEl = document.getElementById("discard-count");
    
    if (discardCountEl) discardCountEl.textContent = "0";

    appendLog("&gt; AUTO PLAY ENGINE INITIALIZING...");
    await sleep(700);

    appendLog("&gt; DEALING 28 CARDS TO PYRAMID, 24 CARDS TO STOCK...");
    await sleep(700);

    appendLog("&gt; SEARCHING FOR PAIRS SUMMING TO 13...");
    await sleep(700);

    const simulationSteps = [
      { aRank: "K", aSuit: "♠", aRed: false, bRank: "", bSuit: "", bRed: false, desc: "DISCARDED K♠ (13)", discards: 1 },
      { aRank: "A", aSuit: "♥", aRed: true, bRank: "Q", bSuit: "♦", bRed: true, desc: "DISCARDED A♥ + Q♦ (13)", discards: 3 },
      { aRank: "5", aSuit: "♣", aRed: false, bRank: "8", bSuit: "♣", bRed: false, desc: "DISCARDED 5♣ + 8♣ (13)", discards: 5 },
      { aRank: "2", aSuit: "♦", aRed: true, bRank: "J", bSuit: "♠", bRed: false, desc: "DISCARDED 2♦ + J♠ (13)", discards: 7 },
      { aRank: "", aSuit: "", aRed: false, bRank: "", bSuit: "", bRed: false, desc: "DRAWN 7♦ FROM STOCK", discards: 7 },
      { aRank: "6", aSuit: "♥", aRed: true, bRank: "7", bSuit: "♦", bRed: true, desc: "DISCARDED 6♥ + 7♦ (13)", discards: 9 },
      { aRank: "K", aSuit: "♥", aRed: true, bRank: "", bSuit: "", bRed: false, desc: "DISCARDED K♥ (13)", discards: 10 },
      { aRank: "4", aSuit: "♠", aRed: false, bRank: "9", bSuit: "♥", bRed: true, desc: "DISCARDED 4♠ + 9♥ (13)", discards: 12 },
      { aRank: "10", aSuit: "♣", aRed: false, bRank: "3", bSuit: "♦", bRed: true, desc: "DISCARDED 10♣ + 3♦ (13)", discards: 14 },
      { aRank: "", aSuit: "", aRed: false, bRank: "", bSuit: "", bRed: false, desc: "DRAWN Q♣ FROM STOCK", discards: 14 },
      { aRank: "A", aSuit: "♦", aRed: true, bRank: "Q", bSuit: "♣", bRed: false, desc: "DISCARDED A♦ + Q♣ (13)", discards: 16 },
      { aRank: "K", aSuit: "♦", aRed: true, bRank: "", bSuit: "", bRed: false, desc: "DISCARDED K♦ (13)", discards: 17 }
    ];

    for (let i = 0; i < simulationSteps.length; i++) {
      const step = simulationSteps[i];
      
      // Update CARD A
      if (cardARankEl) cardARankEl.textContent = step.aRank;
      if (cardASuitEl) {
        cardASuitEl.textContent = step.aSuit;
        cardASuitEl.className = `front-suit ${step.aRed ? 'red' : ''}`;
      }
      if (step.aRank) {
        cardElements[0].classList.add("drawn", "flipped");
        slotContainers[0].classList.add("active");
      } else {
        cardElements[0].classList.remove("drawn", "flipped");
        slotContainers[0].classList.remove("active");
      }
      
      // Update CARD B
      if (cardBRankEl) cardBRankEl.textContent = step.bRank;
      if (cardBSuitEl) {
        cardBSuitEl.textContent = step.bSuit;
        cardBSuitEl.className = `front-suit ${step.bRed ? 'red' : ''}`;
      }
      if (step.bRank) {
        cardElements[1].classList.add("drawn", "flipped");
        slotContainers[1].classList.add("active");
      } else {
        cardElements[1].classList.remove("drawn", "flipped");
        slotContainers[1].classList.remove("active");
      }
      
      // Activate the RESULT and DISCARD slots
      if (step.aRank || step.bRank) {
        slotContainers[2].classList.add("active");
        slotContainers[3].classList.add("active");
        cardElements[2].classList.add("drawn", "flipped");
        cardElements[3].classList.add("drawn", "flipped");
        if (discardCountEl) discardCountEl.textContent = step.discards;
      } else {
        slotContainers[2].classList.remove("active");
        cardElements[2].classList.remove("drawn", "flipped");
      }

      appendLog(`&gt; ${step.desc}`);
      await sleep(1000);
    }

    appendLog('<span style="color: var(--color-gold-bright)">&gt; PYRAMID COMPLETELY CLEARED!</span>');
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
