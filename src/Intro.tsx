import { useEffect, useRef, useState } from "react";
import "./intro.css";

type IntroProps = { onFinish: () => void };

const QUOTES = [
  { lang: "🇺🇸", text: "We don’t chase what AI can do — we pursue what AI should do." },
  { lang: "🇯🇵", text: "私たちはAIが「できること」を追いかけない。AIが「すべきこと」を追求する。" },
  { lang: "🇻🇳", text: "Chúng tôi không chạy theo điều AI có thể làm — mà kiên định với điều AI nên làm." },
  { lang: "🇨🇳", text: "我们不追逐AI能做什么，而是坚持AI该做什么。" },
  { lang: "🇰🇷", text: "우리는 AI가 할 수 있는 일을 쫓지 않는다. AI가 해야 하는 일을 추구한다." },
  { lang: "🇪🇸", text: "No perseguimos lo que la IA puede hacer, sino lo que la IA debe hacer." },
];

const GO_LABELS = [
  { lang: "🇺🇸", text: "Enter" },
  { lang: "🇯🇵", text: "入る" },
  { lang: "🇻🇳", text: "Vào" },
  { lang: "🇨🇳", text: "进入" },
  { lang: "🇰🇷", text: "시작" },
  { lang: "🇪🇸", text: "Entrar" },
];

const GREEK = ["Σ", "Ω", "Δ", "Ψ", "λ", "π"];
const MODULES = [
  "INIT::NEURAL_CONTEXT",
  "SYNC::QUANT_PHASE",
  "VECTOR::EMBED_UPDATE",
  "CORE::COGNITIVE_LOOP",
  "MIRROR_PROFILE::SYNC",
  "HYPERFLOW::EXEC_QUEUE",
  "POLICY::CONSTRAINT_CHECK",
  "MEM::EPHEMERAL_CACHE",
  "IO::CHANNEL_NEGOTIATION",
];

export default function Intro({ onFinish }: IntroProps) {
  const matrixRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);
  const meteorsRef = useRef<HTMLCanvasElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  const [logs, setLogs] = useState<string[]>([]);
  const [active, setActive] = useState(true);
  const [qIdx, setQIdx] = useState(0);
  const [goIdx, setGoIdx] = useState(0);

  // Lock scroll while intro is visible
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, []);

  // Rotate Quote (every 3s)
  useEffect(() => {
    const t = setInterval(() => {
      setQIdx((i) => (i + 1) % QUOTES.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  // Rotate GO label (every 1200ms, nhanh hơn để “gấp”)
  useEffect(() => {
    const t = setInterval(() => {
      setGoIdx((i) => (i + 1) % GO_LABELS.length);
    }, 1200);
    return () => clearInterval(t);
  }, []);

  // Matrix
  useEffect(() => {
    const canvas = matrixRef.current!;
    const ctx = canvas.getContext("2d")!;
    let W = 0, H = 0, fs = 14, cols = 0, yPos: number[] = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      fs = 14;
      cols = Math.floor(W / fs);
      yPos = Array(cols).fill(0);
    };
    resize();
    window.addEventListener("resize", resize);

    let running = true;
    const draw = () => {
      if (!running) return;
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "#00aaff";
      ctx.font = `${fs}px monospace`;
      for (let i = 0; i < cols; i++) {
        const t = String.fromCharCode(0x30A0 + (Math.random() * 96) | 0);
        ctx.fillText(t, i * fs, yPos[i] * fs);
        if (yPos[i] * fs > H && Math.random() > 0.975) yPos[i] = 0;
        yPos[i]++;
      }
      requestAnimationFrame(draw);
    };
    draw();

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Particles
  useEffect(() => {
    const canvas = particlesRef.current!;
    const ctx = canvas.getContext("2d")!;
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const parts = Array.from({ length: 70 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      s: Math.random() * 0.4 + 0.1,
    }));

    let running = true;
    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgba(0,170,255,0.5)";
      for (const p of parts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.y -= p.s;
        if (p.y < 0) p.y = H;
      }
      requestAnimationFrame(draw);
    };
    draw();

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Meteors (every 1s) + flash pulse
  useEffect(() => {
    const canvas = meteorsRef.current!;
    const ctx = canvas.getContext("2d")!;
    let W = 0, H = 0;
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type M = { x: number; y: number; len: number; speed: number; ang: number; color: string; life: number; };
    const meteors: M[] = [];

    const spawn = () => {
      meteors.push({
        x: Math.random() * W * 0.85,
        y: Math.random() * H * 0.45,
        len: 200 + Math.random() * 240,
        speed: 11 + Math.random() * 9,
        ang: (Math.PI / 4) * (0.78 + Math.random() * 0.44),
        color: ["#00aaff", "#00ffff", "#66ccff", "#ffffff"][(Math.random() * 4) | 0],
        life: 0,
      });
      // flash
      const el = flashRef.current;
      if (el) {
        el.classList.remove("flash-on");
        // force reflow to restart animation
        void el.offsetWidth;
        el.classList.add("flash-on");
      }
    };

    let running = true;
    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        const dx = Math.cos(m.ang) * m.speed;
        const dy = Math.sin(m.ang) * m.speed;
        ctx.strokeStyle = m.color;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 18;
        ctx.shadowColor = m.color;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.len * Math.cos(m.ang), m.y - m.len * Math.sin(m.ang));
        ctx.stroke();
        m.x += dx; m.y += dy; m.life++;
        if (m.life > 60) meteors.splice(i, 1);
      }
      requestAnimationFrame(draw);
    };
    draw();

    const itv = setInterval(spawn, 1000); // mỗi 1 giây
    return () => {
      running = false;
      clearInterval(itv);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Logs (every 0.8s)
  useEffect(() => {
    if (!active) return;
    const itv = setInterval(() => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      const t = `${hh}:${mm}:${ss}`;
      const sym = GREEK[(Math.random() * GREEK.length) | 0];
      const mod = MODULES[(Math.random() * MODULES.length) | 0];
      const dt = (Math.random() * 0.5 + 0.18).toFixed(3);
      const hash = Math.random() > 0.6 ? ` | HASH=${(Math.random() * 0xffff).toString(16).toUpperCase()}` : "";
      const state = Math.random() > 0.2 ? "OK" : "STABLE";
      const line = `[${t}]  Δt=${dt}s | ${sym} ${mod}::${state}${hash}`;
      setLogs((prev) => [line, ...prev].slice(0, 6));
    }, 800);
    return () => clearInterval(itv);
  }, [active]);

  // GO click
  const handleGo = () => {
    const goSound = new Audio(
      "https://cdn.pixabay.com/download/audio/2023/03/15/audio_50e1c4c0b0.mp3?filename=ui-confirmation-alert-147389.mp3"
    );
    goSound.play();
    setActive(false);

    // open scroll back
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";

    setTimeout(onFinish, 900);
  };

  return (
    <div id="intro" style={{ opacity: active ? 1 : 0, transition: "opacity 1s ease" }}>
      {/* layers */}
      <canvas id="matrix" ref={matrixRef} />
      <canvas id="particles" ref={particlesRef} />
      <canvas id="meteors" ref={meteorsRef} />
      <div id="scan" />
      <div id="flash" ref={flashRef} />

      {/* content */}
      <div id="terminal">
        <h1 className="logo">
          <span className="hyper">HYPER</span> <span className="one">ONE</span>
        </h1>

        <div id="sub">Vietnam’s Leading AI Innovation Hub</div>

        <div id="tagline" className="quote-swap">
          <span className="lang">{QUOTES[qIdx].lang}</span>{" "}
          <span className="qt">{QUOTES[qIdx].text}</span>
        </div>

        <button id="goBtn" onClick={handleGo}>
          <span className="go-label">
            <span className="lang">{GO_LABELS[goIdx].lang}</span> {GO_LABELS[goIdx].text}
          </span>
        </button>
      </div>

      {/* logs */}
      <div id="logs">
        {logs.map((l, i) => (
          <div className="logline" key={i}>{l}</div>
        ))}
      </div>

      {/* bg audio */}
      <audio
        id="bgAudio"
        src="https://cdn.pixabay.com/download/audio/2023/01/03/audio_d57dbe7a34.mp3?filename=futuristic-interface-ambient-126941.mp3"
        autoPlay
        loop
      />
    </div>
  );
}
