'use client';
import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';

interface SlidesClientProps {
  htmlContent: string;
}

export const SlidesClient: React.FC<SlidesClientProps> = ({ htmlContent }) => {
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!slidesRef.current) return;

    const reveal = new Reveal(slidesRef.current, {
      hash: true,
      slideNumber: true,
      transition: 'slide',
    });
    reveal.initialize();

    return () => reveal.destroy();
  }, []);

  return <div className="reveal"><div className="slides" ref={slidesRef} dangerouslySetInnerHTML={{ __html: htmlContent }} /></div>;
};
