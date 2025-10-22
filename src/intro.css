:root {
  --ai-blue: #00aaff;
  --ai-blue-soft: #aee2ff;
}

#intro {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: #000;
}

/* Layers */
#matrix,
#particles,
#meteors {
  position: fixed;
  inset: 0;
  pointer-events: none;
}
#scan {
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 170, 255, 0.05) 0 2px,
    transparent 2px 4px
  );
  animation: scan 5s linear infinite;
}
@keyframes scan {
  from {
    background-position-y: 0;
  }
  to {
    background-position-y: 100%;
  }
}

/* ===== LOGO ===== */
#terminal {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.logo {
  margin: 0;
  font-size: 4.8rem;
  letter-spacing: 6px;
  position: relative;
  text-shadow: 0 0 30px var(--ai-blue), 0 0 60px #0077ff, 0 0 100px #00ffff80;
  animation: logoGlow 5s ease-in-out infinite alternate;
}
@keyframes logoGlow {
  0% {
    filter: brightness(0.9);
    text-shadow: 0 0 25px #0088ff, 0 0 40px #00ffff60;
  }
  100% {
    filter: brightness(1.4);
    text-shadow: 0 0 45px #00ffff, 0 0 100px #00ccff;
  }
}
.hyper {
  color: var(--ai-blue);
  text-shadow: 0 0 30px #00bfff, 0 0 80px #00e5ff;
}
.one {
  color: #fff;
  text-shadow: 0 0 20px #00e5ff, 0 0 60px #00bfff;
}

#tagline {
  font-size: 1rem;
  color: var(--ai-blue-soft);
  margin-bottom: 10px;
  opacity: 0;
  animation: tag 6s ease-in-out 1.2s forwards;
}
@keyframes tag {
  0% {
    opacity: 0;
    transform: translateY(6px);
  }
  20%, 75% {
    opacity: 1;
    transform: none;
  }
  100% {
    opacity: 0;
    transform: translateY(-6px);
  }
}

#sub {
  font-size: 1.2rem;
  color: var(--ai-blue-soft);
  opacity: 0.9;
  letter-spacing: 2px;
  margin-bottom: 26px;
}

/* ===== GO Button ===== */
#goBtn {
  background: var(--ai-blue);
  color: #000;
  border: none;
  padding: 16px 42px;
  font-weight: bold;
  border-radius: 14px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 1.2rem;
  box-shadow: 0 0 40px #00aaff80, inset 0 0 20px var(--ai-blue);
  position: relative;
  overflow: hidden;
  animation: goPulse 3s infinite ease-in-out;
  transition: all 0.4s ease;
}
#goBtn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.85),
    transparent
  );
  transform: translateX(-100%);
  animation: shine 3s infinite linear;
}
@keyframes shine {
  0% {
    transform: translateX(-100%);
  }
  60%, 100% {
    transform: translateX(100%);
  }
}
@keyframes goPulse {
  0%, 100% {
    box-shadow: 0 0 20px #00e0ff60, 0 0 60px #00e5ff20;
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 50px #00ffff, 0 0 100px #00aaff;
    transform: scale(1.05);
  }
}
#goBtn:hover {
  transform: scale(1.1);
  background: #33c7ff;
}

/* ===== Logs ===== */
#logs {
  position: fixed;
  bottom: 10px;
  left: 16px;
  z-index: 7;
  width: 380px;
  max-height: 200px;
  overflow: hidden;
  font-size: 11px;
  color: #66d6ff;
  text-shadow: 0 0 6px var(--ai-blue);
  opacity: 0.8;
}
