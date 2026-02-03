const HorizonGlow = () => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[550px] z-10 pointer-events-none">
      {/* Outer red atmospheric haze */}
      <div 
        className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[1200px] h-[450px]"
        style={{
          background: 'radial-gradient(ellipse 45% 60% at center bottom, hsl(5 90% 50% / 0.18) 0%, hsl(15 85% 45% / 0.1) 35%, hsl(350 70% 40% / 0.04) 60%, transparent 75%)',
          filter: 'blur(70px)',
        }}
      />
      {/* Primary intense orange glow */}
      <div 
        className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[900px] h-[350px]"
        style={{
          background: 'radial-gradient(ellipse 40% 50% at center bottom, hsl(25 100% 55% / 0.45) 0%, hsl(20 95% 50% / 0.28) 25%, hsl(15 90% 45% / 0.12) 50%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      {/* Hot core - yellow/orange center */}
      <div 
        className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[500px] h-[180px]"
        style={{
          background: 'radial-gradient(ellipse 35% 40% at center bottom, hsl(40 100% 65% / 0.55) 0%, hsl(30 100% 55% / 0.35) 35%, hsl(20 95% 50% / 0.12) 65%, transparent 85%)',
          filter: 'blur(25px)',
        }}
      />
      {/* Bright edge line */}
      <div 
        className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-[350px] h-[60px]"
        style={{
          background: 'radial-gradient(ellipse 40% 30% at center bottom, hsl(45 100% 75% / 0.45) 0%, hsl(35 100% 60% / 0.2) 45%, transparent 80%)',
          filter: 'blur(10px)',
        }}
      />
      {/* Curved horizon line */}
      <div 
        className="absolute -bottom-87.5 left-1/2 -translate-x-1/2 w-full h-100 rounded-[50%] border-t border-orange-500/30"
        style={{
          background: 'linear-gradient(to top, hsl(240 10% 2%) 0%, transparent 100%)',
          boxShadow: '0 -1px 10px hsl(40 100% 60% / 0.6), 0 -2px 20px hsl(30 100% 55% / 0.45), 0 -5px 35px hsl(20 95% 50% / 0.3), 0 -10px 60px hsl(10 85% 45% / 0.15), 0 -20px 100px hsl(5 75% 40% / 0.08)'
        }}
      />
    </div>
  );
};

export default HorizonGlow;
