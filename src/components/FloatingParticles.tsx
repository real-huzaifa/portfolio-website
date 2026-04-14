const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Blue floating dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className="absolute rounded-full animate-float"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            background: `hsl(215 100% ${50 + Math.random() * 30}% / ${0.1 + Math.random() * 0.2})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Diamond shaped particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`diamond-${i}`}
          className="absolute w-2 h-2 border border-p3-blue/15 rotate-45 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${7 + Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Large blue gradient orbs */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-p3-blue/[0.04] rounded-full blur-[100px]" />
      <div className="absolute top-[50%] right-[10%] w-[400px] h-[400px] bg-p3-cyan/[0.03] rounded-full blur-[80px]" />
      <div className="absolute bottom-[10%] left-[40%] w-[350px] h-[350px] bg-p3-bright/[0.03] rounded-full blur-[90px]" />

      {/* Diagonal scan lines */}
      <div className="absolute inset-0 p3r-stripes opacity-40" />
    </div>
  );
};

export default FloatingParticles;
