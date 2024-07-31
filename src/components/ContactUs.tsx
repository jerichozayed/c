import React, { useEffect, useRef } from 'react';

const ContactUs: React.FC = () => {
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
    <section className="relative w-full px-5 py-12 mx-auto md:px-12 lg:px-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/shopwall.jpg')", minHeight: '110vh' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
      <div className="relative z-10 text-white">
        <div className="flex justify-center items-center h-52">
          <svg className="svg-wrapper" ref={svgRef}>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              Contact Us
            </text>
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full max-w-2xl bg-white bg-opacity-70 text-black rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
            <form>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-2 text-sm font-semibold text-gray-600">Name</label>
                  <input type="text" id="name" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-2 text-sm font-semibold text-gray-600">Email</label>
                  <input type="email" id="email" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
              </div>
              <div className="flex flex-col mt-6">
                <label htmlFor="message" className="mb-2 text-sm font-semibold text-gray-600">Message</label>
                <textarea id="message" rows={4} className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
              </div>
              <div className="flex justify-center mt-6">
                <button type="submit" className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
