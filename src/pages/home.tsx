export default function HomePage() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Your StaticKit is all set! 🚀
        </h1>
        <p className="text-gray-600 mt-4">
          Add/Modify pages at <code className="bg-gray-50 p-1">src/pages</code>
        </p>
        <p className="text-gray-600 mt-4">
          Add/Modify components{" "}
          <code className="bg-gray-50 p-1">src/components</code>
        </p>
      </div>
    </div>
  );
}
