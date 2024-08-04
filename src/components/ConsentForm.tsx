// components/ConsentForm.tsx
import React, { useState } from 'react';

const ConsentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    phone: '',
    email: '',
    emergencyContact: '',
    allergies: '',
    medications: '',
    medicalConditions: '',
    tattooDescription: '',
    tattooLocation: '',
    tattooSize: '',
    specialInstructions: '',
    legalAge: false,
    promotionalUse: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/submit-consent-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Cronulla Ink Tattoo Studio Consent Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Emergency Contact</label>
          <input
            type="text"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Allergies</label>
          <textarea
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Medications</label>
          <textarea
            name="medications"
            value={formData.medications}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Medical Conditions</label>
          <textarea
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tattoo Description</label>
          <textarea
            name="tattooDescription"
            value={formData.tattooDescription}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tattoo Location</label>
          <input
            type="text"
            name="tattooLocation"
            value={formData.tattooLocation}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tattoo Size</label>
          <input
            type="text"
            name="tattooSize"
            value={formData.tattooSize}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Special Instructions</label>
          <textarea
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="legalAge"
            checked={formData.legalAge}
            onChange={handleChange}
            required
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-900">
            I confirm that I am of legal age to get a tattoo.
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="promotionalUse"
            checked={formData.promotionalUse}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-900">
            I agree to allow the studio to use photographs of my tattoo for promotional purposes.
          </label>
        </div>
        <div>
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConsentForm;
