import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import SVGText from '../components/SVG';

const artists = [
  { name: 'John', image: '/Artists/John/john.jpg', description: 'With over a decade of tattoo experience and countless hours perfecting his craft, John is dedicated to providing a unique and friendly experience as soon as you enter our studio.', photos: ['/Artists/John/john1.jpg', '/Artists/John/john2.jpg', '/Artists/John/john3.jpg', '/Artists/John/john4.jpg', '/Artists/John/john5.jpg', '/Artists/John/john6.jpg', '/Artists/John/john7.jpg', '/Artists/John/john8.jpg', '/Artists/John/john9.jpg'] },
  { name: 'Abby', image: '/Artists/Abby/abby.jpg', description: 'Artist description for Abby goes here.' },
  { name: 'Laura', image: '/Artists/Laura/laura.jpg', description: 'Artist description for Laura goes here.' },
  { name: 'Dan', image: '/Artists/Dan/dan.jpg', description: 'Artist description for Dan goes here.', photos: ['/Artists/Dan/dan1.jpg', '/Artists/Dan/dan2.jpg'] },
  { name: 'Caleb', image: '/Artists/Caleb/caleb.jpg', description: 'Artist description for Caleb goes here.' },
  { name: 'Elijah', image: '/Artists/Elijah/elijah.jpg', description: 'Artist description for Elijah goes here.' },
  { name: 'Sam', image: '/Artists/Sam/sam.jpg', description: 'Artist description for Sam goes here.' },
];

const imageSize = 192;

const Artists = () => {
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
    <div className="min-h-screen bg-[#55BFEF]">
      <Head>
        <title>Artists - Cronulla Ink Tattoo Studio</title>
        <meta name="description" content="Meet the talented artists at Cronulla Ink Tattoo Studio" />
      </Head>
      <header className="relative text-center py-12 flex items-center justify-center">
        <SVGText text="Our Artists" className="h-32 md:h-52" />
      </header>
      <Navbar />
      <section className="flex flex-wrap justify-center gap-8 py-12">
        {artists.map((artist, index) => (
          <div key={index} className="text-center">
            <Link href={`#${artist.name}`} legacyBehavior>
              <a className="w-48 h-48 rounded-3xl overflow-hidden flex items-center justify-center">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={imageSize}
                  height={imageSize}
                  className="object-cover w-full h-full"
                />
              </a>
            </Link>
            <p className="text-2xl mt-4" style={{ fontFamily: 'Work Sans', fontSize: '32px' }}>
              {artist.name}
            </p>
          </div>
        ))}
      </section>
      <section className="text-center py-12 px-4">
        <p className="text-3xl md:text-6xl" style={{ fontFamily: 'Work Sans', fontSize: '80px' }}>
          Make your tattoo experience one to remember with our friendly team of professionals at our tattoo studio!
        </p>
      </section>
      {artists.map((artist, index) => (
        <section key={index} id={artist.name} className="relative py-12 flex flex-col items-center bg-[#1A1A1A] text-white">
          <div className="mb-4 w-full h-auto px-4">
            <SVGText text={artist.name} className="h-24 md:h-32" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center mb-8 space-y-4 md:space-y-0 md:space-x-8 px-4">
            <Image
              src={artist.image}
              alt={artist.name}
              width={imageSize}
              height={imageSize}
              className="rounded-full object-cover w-48 h-48"
            />
            <p className="text-lg self-center text-center md:text-left" style={{ fontFamily: 'Miltonian Tattoo', fontSize: '18px', maxWidth: '600px' }}>
              {artist.description}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8 bg-[#55BFEF] w-full py-4">
            {artist.photos?.map((photo, photoIndex) => (
              <div key={photoIndex} className="w-44 h-44 overflow-hidden flex items-center justify-center">
                <Image
                  src={photo}
                  alt={`Photo ${photoIndex + 1}`}
                  width={176}
                  height={176}
                  className="object-cover w-full h-full cursor-pointer"
                  onClick={() => openModal(photo, `Photo ${photoIndex + 1}`)}
                />
              </div>
            ))}
            {[...Array(10 - (artist.photos?.length || 0))].map((_, photoIndex) => (
              <div key={photoIndex} className="w-44 h-44 bg-gray-300 flex items-center justify-center">
                <span>Photo {photoIndex + 1 + (artist.photos?.length || 0)}</span>
              </div>
            ))}
          </div>
        </section>
      ))}

      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-auto bg-black bg-opacity-90 flex justify-center items-center">
          <div className="relative w-4/5 md:w-3/5 lg:w-2/5">
            <span className="close absolute top-5 right-5 text-white text-3xl cursor-pointer" onClick={closeModal}>&times;</span>
            <Image src={currentImage} alt={caption} layout="responsive" width={700} height={475} className="modal-content rounded-lg" />
            <div id="caption" className="text-center text-white mt-4">{caption}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artists;
