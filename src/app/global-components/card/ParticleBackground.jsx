import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const numStars = Math.floor(window.innerWidth / 3); 
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
      direction: Math.random() < 0.5 ? -1 : 1,
      dx: (Math.random() - 0.5) * 0.05,
      dy: (Math.random() - 0.5) * 0.05,
    }));

    const draw = () => {
      ctx.fillStyle = "rgba(3, 8, 15, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        // small drift
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        // twinkling
        s.alpha += s.twinkleSpeed * s.direction;
        if (s.alpha <= 0.2 || s.alpha >= 1) s.direction *= -1;

        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * 4);
        gradient.addColorStop(0, `rgba(0, 200, 255, ${s.alpha})`);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(s.x, s.y, s.radius * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        background: "rgba(3, 8, 15, 1)",
      }}
    />
  );
};

export default ParticleBackground;
