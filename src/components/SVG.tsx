import React, { useEffect, useRef } from 'react';

interface SVGProps {
  text: string;
  className?: string;
}

const SVG: React.FC<SVGProps> = ({ text, className }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url("https://fonts.googleapis.com/css2?family=Miltonian+Tattoo&display=swap");

      .svg-wrapper {
        font-family: "Miltonian Tattoo", sans-serif;
        width: 100%;
        height: 100%;
      }

      .svg-wrapper text {
        font-size: 8vw; /* Use viewport width for responsive text size */
        max-width: 100%;
        opacity: 0;
        stroke-width: 2;
        stroke: #4477C8;
        transition: opacity 0.5s ease-in-out;
      }

      .svg-wrapper.text-visible text {
        opacity: 1;
        animation: stroke 3s forwards;
      }

      @keyframes stroke {
        0% {
          fill: rgba(99,124,244,0);
          stroke: rgba(68,119,200,1);
          stroke-dashoffset: 25%;
          stroke-dasharray: 0 50%;
          stroke-width: 2;
        }
        70% {
          fill: rgba(99,124,244,0);
          stroke: rgba(68,119,200,1);
        }
        80% {
          fill: rgba(99,124,244,0);
          stroke: rgba(68,119,200,1);
          stroke-width: 3;
        }
        100% {
          fill: rgba(99,124,244,1);
          stroke: rgba(68,119,200,0);
          stroke-dashoffset: -25%;
          stroke-dasharray: 50% 0;
          stroke-width: 0;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (svgRef.current) {
            svgRef.current.classList.add('text-visible');
            observer.unobserve(svgRef.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);

  return (
    <div className={`flex justify-center items-center h-full w-full mb-8 ${className}`}>
      <svg className="svg-wrapper" ref={svgRef}>
        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
          {text}
        </text>
      </svg>
    </div>
  );
};

export default SVG;
