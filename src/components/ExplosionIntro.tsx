import { useState, useEffect } from 'react';

interface ExplosionIntroProps {
  onComplete: () => void;
}

const ExplosionIntro = ({ onComplete }: ExplosionIntroProps) => {
  const [showExplosion, setShowExplosion] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowExplosion(false);
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!showExplosion) return null;

  return (
    <div className="explosion-container">
      <div className="bomb-emoji">💥</div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-20 animate-pulse" />
      
      {/* Particle effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-accent rounded-full absolute animate-ping" style={{ animationDelay: '0.5s' }} />
        <div className="w-6 h-6 bg-primary rounded-full absolute animate-ping" style={{ animationDelay: '0.7s', top: '-20px', left: '20px' }} />
        <div className="w-3 h-3 bg-accent rounded-full absolute animate-ping" style={{ animationDelay: '0.9s', top: '20px', left: '-20px' }} />
        <div className="w-5 h-5 bg-primary rounded-full absolute animate-ping" style={{ animationDelay: '1.1s', top: '-30px', left: '-30px' }} />
        <div className="w-4 h-4 bg-accent rounded-full absolute animate-ping" style={{ animationDelay: '1.3s', top: '30px', left: '30px' }} />
      </div>
    </div>
  );
};

export default ExplosionIntro;