import React, { useEffect, useRef } from 'react';

const AnimatedText = ({ text, color }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const lines = text.split('\\n');
  console.log(lines);
  

  return (
    <div ref={containerRef} className="animated-text-container">
      {lines.map((line, index) => (
        <div
          key={index}
          className={`animated-text ${index % 2 === 0 ? 'left' : 'right'}`}
          style={{ color: color }}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;