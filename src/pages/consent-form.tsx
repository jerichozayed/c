import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ConsentForm from '../components/ConsentForm';
import SVG from '../components/SVG';

const ConsentFormPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/logo1.jpg')" }}>
      <Head>
        <title>Consent Form - Cronulla Ink Tattoo Studio</title>
        <meta name="description" content="Consent Form for Cronulla Ink Tattoo Studio" />
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-32 md:h-52">
          <SVG text="Consent Form" />
        </div>
        <ConsentForm />
      </div>
    </div>
  );
};

export default ConsentFormPage;
