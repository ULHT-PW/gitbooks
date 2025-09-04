import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import MarkdownIt from 'markdown-it';

interface SlidesProps {
  content: string;
}

const Slides: React.FC<SlidesProps> = ({ content }) => {
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!slidesRef.current) return;

    const md = new MarkdownIt();
    slidesRef.current.innerHTML = md.render(content);

    const reveal = new Reveal(slidesRef.current, {
      embedded: true,
      hash: true,
      slideNumber: true,
      transition: 'slide',
      plugins: [],
    });

    reveal.initialize();

    return () => {
      reveal.destroy();
    };
  }, [content]);

  return <div className="reveal"><div className="slides" ref={slidesRef} /></div>;
};

export default Slides;
