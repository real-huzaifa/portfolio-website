const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* P3R style geometric particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-p3-blue/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Diamond shaped particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`diamond-${i}`}
          className="absolute w-2 h-2 border border-p3-blue/10 rotate-45 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Blue gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-p3-blue/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-p3-cyan/[0.02] rounded-full blur-3xl" />
      <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-p3-blue/[0.02] rounded-full blur-3xl" />

      {/* Diagonal scan lines overlay */}
      <div className="absolute inset-0 p3r-stripes opacity-30" />
    </div>
  );
};

export default FloatingParticles;
