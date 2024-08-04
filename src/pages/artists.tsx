import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import SVGText from '../components/SVG';

const artists = [
  { name: 'John', image: '/John/john.jpg' },
  { name: 'Abby', image: '/Abby/abby.jpg' },
  { name: 'Laura', image: '/Laura/laura.jpg' },
  { name: 'Dan', image: '/Dan/dan.jpg' },
  { name: 'Caleb', image: '/Caleb/caleb.jpg' },
  { name: 'Elijah', image: '/Elijah/elijah.jpg' },
  { name: 'Sam', image: '/Sam/sam.jpg' },
];

const Artists = () => {
  return (
    <div className="min-h-screen bg-[#55BFEF]">
      <Head>
        <title>Artists - Cronulla Ink Tattoo Studio</title>
        <meta name="description" content="Meet the talented artists at Cronulla Ink Tattoo Studio" />
      </Head>
      <header className="relative text-center py-12 flex items-center justify-center">
        <div className="absolute left-0 ml-4">
          <Image src="/cbutton.jpg" alt="Icon" width={40} height={40} />
        </div>
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
                  width={192}
                  height={192}
                  objectFit="cover"
                />
              </a>
            </Link>
            <p className="text-2xl mt-4" style={{ fontFamily: 'Work Sans', fontSize: '32px' }}>
              {artist.name}
            </p>
          </div>
        ))}
      </section>
      <section className="text-center py-12">
        <p style={{ fontFamily: 'Work Sans', fontSize: '80px' }}>
          Make your tattoo experience one to remember with our friendly team of professionals at our tattoo studio!
        </p>
      </section>
      {artists.map((artist, index) => (
        <section key={index} id={artist.name} className="relative py-12 flex flex-col items-center">
          <div className="absolute inset-0 bg-black opacity-75 z-10"></div>
          <div className="relative z-20 w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Work Sans', fontSize: '20px' }}>
              {artist.name}
            </h2>
            <Image
              src={artist.image}
              alt={artist.name}
              width={192}
              height={192}
              className="rounded-full mb-4"
              objectFit="cover"
            />
            <p className="text-white mb-4" style={{ fontFamily: 'Work Sans', fontSize: '20px' }}>
              Artist description for {artist.name} goes here.
            </p>
          </div>
          <div className="relative z-20 flex flex-wrap justify-center gap-4 mt-8 bg-[#55BFEF] w-full">
            {[...Array(10)].map((_, photoIndex) => (
              <div key={photoIndex} className="w-44 h-44 bg-gray-300 flex items-center justify-center">
                <span>Photo {photoIndex + 1}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Artists;
