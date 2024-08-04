import React, { useState, useEffect, useRef } from 'react';
import SVGText from './SVG'; // Assuming SVG.tsx is in the same directory

const ContactUs: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [isTextVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full px-5 py-12 mx-auto md:px-12 lg:px-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/shire.jpg')", minHeight: '100vh', backgroundSize: 'cover' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
      <div className="relative z-10 text-white">
        <div className="flex justify-center items-center h-32 md:h-52">
          <SVGText text="Contact Us" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full max-w-lg md:max-w-2xl bg-white bg-opacity-70 text-black rounded-lg shadow-lg p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Get in Touch</h2>
            <form>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-2 text-sm font-semibold text-gray-600">Name</label>
                  <input type="text" id="name" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-2 text-sm font-semibold text-gray-600">Email</label>
                  <input type="email" id="email" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
              </div>
              <div className="flex flex-col mt-6">
                <label htmlFor="message" className="mb-2 text-sm font-semibold text-gray-600">Message</label>
                <textarea id="message" rows={4} className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
              </div>
              <div className="flex justify-center mt-6">
                <button type="submit" className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
