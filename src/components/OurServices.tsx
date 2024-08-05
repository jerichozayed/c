import React, { useEffect, useRef } from 'react';

const OurServices: React.FC = () => {
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
        opacity: 0;
        stroke-width: 2;
        stroke: #4477C8;
        font-size: 10vw; /* Font size responsive */
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
    <section
      className="relative w-full px-5 py-12 mx-auto md:px-12 lg:px-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/shopwall.jpg')", minHeight: '110vh' }} // Adjust height as needed
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
      <div className="relative z-10 text-white">
        <div className="flex justify-center items-center h-52">
          <svg className="svg-wrapper" ref={svgRef}>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              Our Services
            </text>
          </svg>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-4 md:grid-cols-2">
          <div className="p-6 bg-white bg-opacity-70 rounded-xl">
            <img
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src="/angelenergy.jpg"
              alt="Custom Designs"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Custom Designs
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Our talented artists will work closely with you to create a custom tattoo design that is unique and meaningful to you.
            </p>
          </div>
          <div className="p-6 bg-white bg-opacity-70 rounded-xl">
            <img
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src="/image2.jpg"
              alt="Cover-ups"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Cover-ups
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              If you have a tattoo you regret, our skilled artists can help you cover it up with a beautiful new design.
            </p>
          </div>
          <div className="p-6 bg-white bg-opacity-70 rounded-xl">
            <img
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src="/image3.jpg"
              alt="Tattoo Restoration"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Tattoo Restoration
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              We specialize in restoring and refreshing old tattoos, breathing new life into faded or worn-out designs.
            </p>
          </div>
          <div className="p-6 bg-white bg-opacity-70 rounded-xl">
            <img
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src="/rockpool.jpg"
              alt="Tattoo Removal"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Tattoo Removal
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Premium laser tattoo removal service that delivers a quality system for results in your laser tattoo removal journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
