import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-secondary-50 p-8 font-sans min-h-screen">
      <h1 className="text-3xl font-bold text-secondary-800 mb-6">Contact Us</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-secondary-700 mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-secondary-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-secondary-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-secondary-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-secondary-700 mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-secondary-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
