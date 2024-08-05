import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Artists = () => {
  return (
    <div>
      <Head>
        <title>Artists - Cronulla Ink Tattoo Studio</title>
        <meta name="description" content="Meet the talented artists at Cronulla Ink Tattoo Studio" />
      </Head>

      <Navbar />
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-8">Our Artists</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example artist profiles */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <img src="/images/artist1.jpg" alt="Artist 1" className="w-full h-64 object-cover rounded-t-lg"/>
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Artist 1</h2>
              <p>Specializes in traditional tattoos.</p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <img src="/images/artist2.jpg" alt="Artist 2" className="w-full h-64 object-cover rounded-t-lg"/>
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Artist 2</h2>
              <p>Specializes in realism and portrait tattoos.</p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <img src="/images/artist3.jpg" alt="Artist 3" className="w-full h-64 object-cover rounded-t-lg"/>
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Artist 3</h2>
              <p>Specializes in blackwork and geometric tattoos.</p>
            </div>
          </div>
          {/* Add more artist profiles as needed */}
        </div>
      </div>
    </div>
  );
};

export default Artists;
