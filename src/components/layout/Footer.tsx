import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-secondary-800">
              About Us
            </h3>
            <p className="text-secondary-600">
              Short description about your company or website.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2 text-secondary-800">
              Connect With Us
            </h3>
            <p className="text-secondary-600">Follow us on social media:</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-accent-400 hover:text-accent-600">
                Facebook
              </a>
              <a href="#" className="text-accent-400 hover:text-accent-600">
                Twitter
              </a>
              <a href="#" className="text-accent-400 hover:text-accent-600">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-200 mt-8 pt-8 text-center text-secondary-600">
          <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
