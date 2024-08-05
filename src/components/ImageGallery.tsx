import React, { useEffect, useRef, useState } from 'react';

const ImageGallery = () => {
  const images = [
    "/John/Doves.jpg",
    "/John/Eyewatchrose.jpg",
    "/John/Lions.jpg",
    "/John/Sleeve.jpg",
    "/John/Tigerskull.jpg",
    "/John/Wolfowl.jpg",
    "/John/Zeus.jpg"
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [caption, setCaption] = useState("");
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Miltonian+Tattoo&display=swap');
      .svg-wrapper {
        font-family: 'Miltonian Tattoo', sans-serif;
        width: 100%;
        height: 100%;
      }
      .svg-wrapper text {
        opacity: 0;
        stroke-width: 2;
        stroke: #4477C8;
        transition: opacity 0.5s ease-in-out;
      }
      .svg-wrapper.text-visible text {
        opacity: 1;
        animation: stroke 3s forwards;
        font-size: 3vw; /* Use vw units for responsiveness */
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

  const openModal = (src: string, alt: string) => {
    setCurrentImage(src);
    setCaption(alt);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative w-full px-2 py-2 lg:px-16 lg:pt-6 bg-cover bg-center" style={{ backgroundImage: "url('/waves.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
      <div className="relative z-10 text-white">
        <section className="w-full shadow-md rounded-lg p-4 text-center mb-2 bg-opacity-70 bg-gray-800">
          <div className="flex justify-center items-center h-32">
            <svg className="svg-wrapper w-full h-full" ref={svgRef}>
              <text x="50%" y="35%" dy=".35em" textAnchor="middle">
                HOME TO SYDNEY'S
              </text>
              <text x="50%" y="75%" dy=".35em" textAnchor="middle">
                LEADING TATTOO ARTISTS
              </text>
            </svg>
          </div>
          <p className="text-sm mt-2">
            At Cronulla Ink Tattoo Studio, we pride ourselves on being a reputable and friendly tattoo studio located in the heart of Cronulla. With a team of professional tattoo artists who specialize in various design styles, we are committed to delivering high-quality tattoos that exceed your expectations.
          </p>
        </section>
        <div className="flex flex-wrap -m-1 md:-m-2 bg-opacity-70 bg-gray-800 p-2 rounded-lg">
          {images.map((src, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-1 md:p-2">
              <img
                alt={`gallery ${index}`}
                className="block object-cover object-center w-full h-full rounded-lg cursor-pointer"
                src={src}
                onClick={() => openModal(src, `gallery ${index}`)}
              />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-auto bg-black bg-opacity-90 flex justify-center items-center">
          <div className="relative w-4/5 md:w-3/5 lg:w-2/5">
            <span className="close absolute top-5 right-5 text-white text-3xl cursor-pointer" onClick={closeModal}>&times;</span>
            <img src={currentImage} alt={caption} className="modal-content rounded-lg" />
            <div id="caption" className="text-center text-white mt-4">{caption}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
