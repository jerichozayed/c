import React, { useState } from 'react';
import SVGText from './SVG'; // Assuming SVG.tsx is in the same directory

const ImageGallery = () => {
  const images = [
    "/John/Doves.jpg",
    "/John/Eyewatchrose.jpg",
    "/John/Lions.jpg",
    "/John/Sleeve.jpg",
    "/John/Tigerskull.jpg",
    "/John/Wolfowl.jpg",
    "/John/Zeus.jpg",
    "/Abby/abby1.jpg",
    "/Abby/abby2.jpg",
    "/Abby/abby3.jpg",
    "/Laura/laura1.jpg",
    "/Laura/laura2.jpg",
    "/Laura/laura3.jpg",
    "/Caleb/caleb1.jpg",
    "/Dan/dan3.jpg",
    "/Caleb/caleb3.jpg",
    "/Dan/dan2.jpg",
    "/Elijah/eli3.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [caption, setCaption] = useState("");

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
      <div className="relative z-10 text-white">
        <section className="w-full p-4 text-center mb-8 mt-12"> {/* Added margin-top */}
          <div className="flex flex-col justify-center items-center h-32">
            <SVGText text="HOME TO SYDNEY'S" />
            <SVGText text="LEADING TATTOO ARTISTS" />
          </div>
        </section>
        <div className="relative pt-10"> {/* Kept padding-top */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg z-0"></div> {/* Transparent overlay box */}
          <div className="flex flex-wrap -m-1 md:-m-2 relative z-10">
            {images.map((src, index) => (
              <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-3 md:p-3">
                <img
                  alt={`gallery ${index}`}
                  className="block object-cover object-center w-full h-48 rounded-lg cursor-pointer" // Set fixed height and full width
                  src={src}
                  onClick={() => openModal(src, `gallery ${index}`)}
                />
              </div>
            ))}
          </div>
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
