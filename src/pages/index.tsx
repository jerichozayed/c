import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import ImageGallery from '../components/ImageGallery';
import OurServices from '../components/OurServices';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>Cronulla Ink Tattoo Studio</title>
        <meta name="description" content="Welcome to Cronulla Ink Tattoo Studio" />
      </Head>
      <Navbar />
      <ImageSlider />
      <ImageGallery />
      <OurServices />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
