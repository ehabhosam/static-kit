import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="bg-primary-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-800">
          Your StaticKit is all set! 🚀
        </h1>
        <p className="text-primary-600 mt-4">
          Add/Modify pages at{" "}
          <code className="bg-primary-100 p-1 rounded">src/pages</code>
        </p>
        <p className="text-primary-600 mt-4">
          Add/Modify components at{" "}
          <code className="bg-primary-100 p-1 rounded">src/components</code>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
