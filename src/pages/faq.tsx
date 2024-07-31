import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const FAQ = () => {
  return (
    <div>
      <Head>
        <title>FAQ - Cronulla Ink Tattoo Studio</title>
        <meta name="description" content="Frequently Asked Questions about Cronulla Ink Tattoo Studio" />
      </Head>

      <Navbar />
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">What is the booking process?</h2>
            <p>You can book an appointment by calling us at (123) 456-7890 or using the form on our Book Now page.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">What should I do to prepare for my tattoo?</h2>
            <p>Please ensure you are well-rested and have eaten before your appointment. Avoid alcohol and blood-thinning medications.</p>
          </div>
          {/* Add more FAQs here */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
