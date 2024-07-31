import React, { useEffect, useRef } from 'react';

const Testimonials: React.FC = () => {
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
    <section className="relative w-full px-5 py-12 mx-auto md:px-12 lg:px-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/rockpool.jpg')", minHeight: '110vh' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
      <div className="relative z-10 text-white">
        <div className="flex justify-center items-center h-52">
          <svg className="svg-wrapper" ref={svgRef}>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              Testimonials
            </text>
          </svg>
        </div>
        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <p className="mb-6 pb-2 md:mb-12 md:pb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>
        <div className="grid gap-6 text-center md:grid-cols-3">
          <div>
            <div className="block rounded-lg bg-white bg-opacity-70 text-black shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  alt="testimonial"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                      />
                    </svg>
                  </span>
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="block rounded-lg bg-white bg-opacity-70 text-black shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  alt="testimonial"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                      />
                    </svg>
                  </span>
                  Neque cupiditate assumenda in maiores repudi mollitia
                  architecto.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="block rounded-lg bg-white bg-opacity-70 text-black shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                  alt="testimonial"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                      />
                    </svg>
                  </span>
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;