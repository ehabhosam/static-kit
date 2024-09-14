import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary-50">
      <h1 className="text-4xl font-bold text-secondary-800 mb-4">About Us</h1>
      <p className="text-lg text-secondary-600 mb-8 max-w-2xl text-center">
        This is a dummy about page. Add your content here.
      </p>
    </div>
  );
};

export default About;
