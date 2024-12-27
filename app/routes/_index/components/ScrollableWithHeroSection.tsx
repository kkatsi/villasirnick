import React, { ReactElement, useEffect, useState } from 'react';
import Hero from './Hero';

interface ScrollableWithHeroSectionProps {
  children: ReactElement;
}

const ScrollableWithHeroSection: React.FC<ScrollableWithHeroSectionProps> = ({ children }) => {
  const [animationOffset, setAnimationOffset] = useState<{
    opacityOffset: number;
    scaleOffset: number;
  }>();
  useEffect(() => {
    const handlePageScroll = () => {
      const scaleYOffset = 1 - window.scrollY / 750;
      const opacityOffset = Math.max(0, Math.min(1, scaleYOffset));
      const scaleOffset = 0.9 + opacityOffset * 0.1;
      setAnimationOffset({
        opacityOffset,
        scaleOffset,
      });
    };

    document.addEventListener('scroll', handlePageScroll);

    return () => {
      document.removeEventListener('scroll', handlePageScroll);
    };
  }, []);
  return (
    <div className="flex w-full min-h-screen items-center justify-center flex-col bg-gray-50">
      <Hero
        style={{
          opacity: animationOffset?.opacityOffset,
          transform: `translateY(-50%) scale(${animationOffset?.scaleOffset})`,
        }}
      />
      {children}
    </div>
  );
};

export default ScrollableWithHeroSection;
