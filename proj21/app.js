// Cyber Transcription Landing Page App Logic

// Helper to delay execution
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const DEMO_TRANSCRIPT =
  "これはサイバートランスクリプションのデモです。マイクの音声はブラウザの中だけでテキストに変換され、外部のサーバーには送信されません。";

const WAVE_BAR_COUNT = 28;

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

  // 3. Mic Input Demo Simulator Logic
  const demoBtn = document.getElementById("sim-demo-btn");
  const consoleTextEl = document.getElementById("console-text-display");
  const waveformEl = document.getElementById("sim-waveform");

  if (!demoBtn || !consoleTextEl || !waveformEl) return;

  // Build the waveform bars once.
  const waveBars = [];
  for (let i = 0; i < WAVE_BAR_COUNT; i++) {
    const bar = document.createElement("span");
    bar.className = "wave-bar";
    waveformEl.appendChild(bar);
    waveBars.push(bar);
  }

  let isRunning = false;
  let waveformInterval = null;

  function appendLog(html) {
    const line = document.createElement("div");
    line.className = "system-log";
    line.innerHTML = html;
    consoleTextEl.appendChild(line);
    consoleTextEl.parentElement.scrollTop = consoleTextEl.parentElement.scrollHeight;
  }

  function startWaveform() {
    waveformEl.classList.add("recording");
    waveformInterval = setInterval(() => {
      waveBars.forEach(bar => {
        const height = 6 + Math.random() * 94;
        bar.style.height = `${height}%`;
      });
    }, 110);
  }

  function stopWaveform() {
    clearInterval(waveformInterval);
    waveformInterval = null;
    waveformEl.classList.remove("recording");
    waveBars.forEach(bar => {
      bar.style.height = "6px";
    });
  }

  async function typeTranscript(text) {
    const p = document.createElement("p");
    p.className = "cursor-blink";
    consoleTextEl.appendChild(p);

    for (let i = 0; i < text.length; i++) {
      p.textContent += text[i];
      consoleTextEl.parentElement.scrollTop = consoleTextEl.parentElement.scrollHeight;
      await sleep(35);
    }

    p.classList.remove("cursor-blink");
  }

  async function runMicDemo() {
    if (isRunning) return;
    isRunning = true;
    demoBtn.disabled = true;
    demoBtn.textContent = "MIC DEMO 実行中...";

    consoleTextEl.innerHTML = "";
    appendLog("&gt; MIC CAPTURE STARTED...");
    startWaveform();
    await sleep(900);

    appendLog("&gt; RESAMPLING TO 16kHz MONO...");
    await sleep(700);

    appendLog("&gt; WHISPER WORKER: DECODING CHUNK [1/1]...");
    await sleep(900);

    stopWaveform();
    appendLog('<span style="color: var(--color-gold-bright)">&gt; TRANSCRIPT READY</span>');
    await typeTranscript(DEMO_TRANSCRIPT);

    demoBtn.disabled = false;
    demoBtn.textContent = "もう一度 MIC DEMO を実行";
    isRunning = false;
  }

  demoBtn.addEventListener("click", runMicDemo);
});
