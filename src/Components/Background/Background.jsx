import ParticleBackground from './ParticleBg';
import HorizonGlow from './Horizonglow';

const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-linear-to-b from-[#050414] via-[#050414] to-[#0d0820]" />
      
      {/* Floating particles */}
      <ParticleBackground />
      
      {/* Horizon glow effect */}
      <HorizonGlow />
    </div>
  );
};

export default Background;
