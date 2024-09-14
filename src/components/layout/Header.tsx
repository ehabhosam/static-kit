import { Link } from "react-router-dom";
import { useStaticRoutes } from "../../hooks/useStaticRoutes";

const Header = () => {
  const routes = useStaticRoutes();
  const paths = routes.map((route) => route.path).reverse();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Your Logo
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {paths.map((path, index) => (
              <li key={index}>
                <Link to={path} className="text-gray-600 hover:text-gray-800">
                  {path === "/"
                    ? "Home"
                    : path.replace("/", "").charAt(0).toUpperCase() +
                      path.replace("/", "").slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
