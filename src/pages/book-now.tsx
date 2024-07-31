import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const BookNow = () => {
  return (
    <div>
      <Head>
        <title>Book Now - Cronulla Ink Tattoo Studio</title>
        <meta name="description" content="Book your next tattoo appointment with Cronulla Ink Tattoo Studio" />
      </Head>

      <Navbar />
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-8">Book Now</h1>
        <p>To book your appointment, please call us at (123) 456-7890 or fill out the form below:</p>
        {/* Include a form or booking details here */}
      </div>
    </div>
  );
};

export default BookNow;
