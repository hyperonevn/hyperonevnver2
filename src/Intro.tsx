import { useEffect, useRef, useState } from "react";
import "./intro.css";

export default function Intro({ onFinish }: { onFinish: () => void }) {
  const matrixRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);
  const meteorsRef = useRef<HTMLCanvasElement>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [active, setActive] = useState(true);

  // ===== Matrix =====
  useEffect(() => {
    const canvas = matrixRef.current!;
    const ctx = canvas.getContext("2d")!;
    const resize = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const cols = Math.floor(canvas.width / 14);
    const ypos = Array(cols).fill(0);
    let running = true;
    const draw = () => {
      if (!running) return;
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00aaff";
      ctx.font = "14px monospace";
      for (let i = 0; i < cols; i++) {
        const t = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(t, i * 14, ypos[i] * 14);
        if (ypos[i] * 14 > canvas.height && Math.random() > 0.975) ypos[i] = 0;
        ypos[i]++;
      }
      requestAnimationFrame(draw);
    };
    draw();
    return () => {
      running = false;
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ===== Particles =====
  useEffect(() => {
    const canvas = particlesRef.current!;
    const ctx = canvas.getContext("2d")!;
    const resize = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const parts = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      s: Math.random() * 0.4 + 0.1,
    }));
    let run = true;
    const draw = () => {
      if (!run) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0,170,255,0.5)";
      for (const p of parts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fill();
        p.y -= p.s;
        if (p.y < 0) p.y = canvas.height;
      }
      requestAnimationFrame(draw);
    };
    draw();
    return () => {
      run = false;
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ===== Meteors =====
  useEffect(() => {
    const canvas = meteorsRef.current!;
    const ctx = canvas.getContext("2d")!;
    const resize = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    let meteors: any[] = [];
    const spawn = () => {
      meteors.push({
        x: Math.random() * canvas.width * 0.6,
        y: Math.random() * canvas.height * 0.35,
        len: 200 + Math.random() * 240,
        speed: 12 + Math.random() * 9,
        ang: (Math.PI / 4) * (0.78 + Math.random() * 0.44),
        color: ["#00aaff", "#00ffff", "#66ccff", "#ffffff"][
          Math.floor(Math.random() * 4)
        ],
        life: 0,
      });
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
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
        ctx.lineTo(
          m.x - m.len * Math.cos(m.ang),
          m.y - m.len * Math.sin(m.ang)
        );
        ctx.stroke();
        m.x += dx;
        m.y += dy;
        m.life++;
        if (m.life > 60) meteors.splice(i, 1);
      }
      requestAnimationFrame(draw);
    };
    draw();
    const interval = setInterval(spawn, 30000);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ===== Logs =====
  useEffect(() => {
    if (!active) return;
    const timer = setInterval(() => {
      const t = new Date().toLocaleTimeString();
      setLogs((prev) => [
        `[${t}] SYS::BOOT OK Δt=${(Math.random() * 0.4 + 0.2).toFixed(3)}s`,
        ...prev.slice(0, 8),
      ]);
    }, 900);
    return () => clearInterval(timer);
  }, [active]);

  const handleGo = () => {
    const goSound = new Audio(
      "https://cdn.pixabay.com/download/audio/2023/03/15/audio_50e1c4c0b0.mp3?filename=ui-confirmation-alert-147389.mp3"
    );
    goSound.play();
    setActive(false);
    setTimeout(onFinish, 900);
  };

  return (
    <div id="intro" style={{ opacity: active ? 1 : 0, transition: "opacity 1s" }}>
      <canvas id="matrix" ref={matrixRef}></canvas>
      <canvas id="particles" ref={particlesRef}></canvas>
      <canvas id="meteors" ref={meteorsRef}></canvas>
      <div id="scan"></div>
      <div id="flash"></div>

      <div id="terminal">
        <div id="tagline">
          “We don't chase what AI can do — we pursue what AI should do.”
        </div>
        <h1>
          <span className="hyper">HYPER</span> <span className="one">ONE</span>
        </h1>
        <div id="sub">Vietnam's Leading AI Innovation Hub</div>
        <button id="goBtn" onClick={handleGo}>
          GO
        </button>
      </div>

      <div id="logs">
        {logs.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>

      <audio
        id="bgAudio"
        src="https://cdn.pixabay.com/download/audio/2023/01/03/audio_d57dbe7a34.mp3?filename=futuristic-interface-ambient-126941.mp3"
        autoPlay
        loop
      ></audio>
    </div>
  );
}
