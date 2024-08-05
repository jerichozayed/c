import React, { useState } from 'react';
import SVG from '../components/SVG'; // Import the SVG component

const ImageGallery = () => {
  const images = [
    "/Artists/John/johndoves.jpg",
    "/Artists/John/johneyerose.jpg",
    "/Artists/John/johnlions.jpg",
    "/Artists/John/johnsleeve.jpg",
    "/Artists/John/johntiger.jpg",
    "/Artists/John/johnwolf.jpg",
    "/Artists/John/johnzeus.jpg"
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
    <div className="relative w-full px-2 py-2 lg:px-16 lg:pt-6 bg-cover bg-center pt-8" style={{ backgroundImage: "url('/waves.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
      <div className="relative z-10 text-white">
        <div className="flex flex-col justify-center items-center h-32 space-y-4">
          <SVG text="HOME TO SYDNEY'S" className="h-full w-full" />
          <SVG text="LEADING TATTOO ARTISTS" className="h-full w-full" />
        </div>
        <p className="text-sm mt-2 text-center">
          At Cronulla Ink Tattoo Studio, we pride ourselves on being a reputable and friendly tattoo studio located in the heart of Cronulla. With a team of professional tattoo artists who specialize in various design styles, we are committed to delivering high-quality tattoos that exceed your expectations.
        </p>
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
