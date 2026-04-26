import { useEffect, useRef } from "react";

const FloatingParticles = () => {
  // Static positions to avoid hydration issues
  const dots = [
    { x: 12, y: 25, size: 2.5, delay: 0, dur: 6 },
    { x: 88, y: 15, size: 2, delay: 1.5, dur: 7 },
    { x: 35, y: 70, size: 3, delay: 0.8, dur: 5.5 },
    { x: 72, y: 55, size: 2, delay: 2.2, dur: 8 },
    { x: 55, y: 10, size: 1.5, delay: 3, dur: 6.5 },
    { x: 20, y: 85, size: 2.5, delay: 1, dur: 7 },
    { x: 90, y: 78, size: 2, delay: 2.8, dur: 5 },
    { x: 45, y: 40, size: 1.5, delay: 0.5, dur: 9 },
    { x: 78, y: 30, size: 2, delay: 3.5, dur: 6 },
    { x: 8, y: 55, size: 1.5, delay: 1.8, dur: 7.5 },
    { x: 62, y: 90, size: 2.5, delay: 4, dur: 5.5 },
    { x: 30, y: 5, size: 2, delay: 2.5, dur: 8 },
  ];

  const diamonds = [
    { x: 15, y: 45, delay: 1, dur: 7 },
    { x: 82, y: 20, delay: 2.5, dur: 8 },
    { x: 50, y: 80, delay: 0, dur: 6 },
    { x: 25, y: 60, delay: 3, dur: 9 },
    { x: 70, y: 65, delay: 1.5, dur: 6.5 },
    { x: 95, y: 45, delay: 4, dur: 7 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep glow orbs */}
      <div
        className="p3-circle-bg"
        style={{
          width: 500,
          height: 500,
          top: "5%",
          left: "10%",
          background: "radial-gradient(circle, hsl(0 0% 50% / 0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="p3-circle-bg"
        style={{
          width: 400,
          height: 400,
          top: "55%",
          right: "5%",
          background: "radial-gradient(circle, hsl(0 0% 55% / 0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="p3-circle-bg"
        style={{
          width: 300,
          height: 300,
          bottom: "15%",
          left: "40%",
          background: "radial-gradient(circle, hsl(0 0% 50% / 0.04) 0%, transparent 70%)",
        }}
      />

      {/* Floating dots */}
      {dots.map((dot, i) => (
        <div
          key={`dot-${i}`}
          className="absolute rounded-full p3-animate-float"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            background: `hsl(0 0% ${i % 2 === 0 ? 80 : 65}% / ${0.15 + (i % 3) * 0.08})`,
            animationDelay: `${dot.delay}s`,
            animationDuration: `${dot.dur}s`,
            boxShadow: `0 0 6px hsl(0 0% 55% / 0.3)`,
          }}
        />
      ))}

      {/* Diamond particles */}
      {diamonds.map((d, i) => (
        <div
          key={`diamond-${i}`}
          className="absolute p3-animate-float"
          style={{
            width: 5,
            height: 5,
            left: `${d.x}%`,
            top: `${d.y}%`,
            background: `hsl(0 0% ${i % 2 === 0 ? 85 : 70}% / 0.2)`,
            transform: "rotate(45deg)",
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
            boxShadow: `0 0 8px hsl(0 0% 55% / 0.2)`,
          }}
        />
      ))}

      {/* Diagonal stripe overlay */}
      <div className="absolute inset-0 p3-diagonal-lines opacity-60" />

      {/* Subtle scan lines */}
      <div className="absolute inset-0 p3-scanlines opacity-30" />
    </div>
  );
};

export default FloatingParticles;
