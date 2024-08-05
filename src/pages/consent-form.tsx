import React from 'react';
import ConsentForm from '../components/ConsentForm';
import Navbar from '../components/Navbar';

const ConsentFormPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 bg-cover bg-center" style={{ backgroundImage: "url('/logo1.jpg')" }}>
      <Navbar />
      <div className="pt-16 flex items-center justify-center">
        <ConsentForm />
      </div>
    </div>
  );
};

export default ConsentFormPage;
