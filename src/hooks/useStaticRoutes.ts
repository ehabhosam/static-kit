import { useState, useEffect } from "react";

interface Route {
  path: string;
  component: React.ComponentType<any>;
}

export function useStaticRoutes(): Route[] {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    async function generateRoutes() {
      const modules = import.meta.glob<{ default: React.ComponentType<any> }>(
        "/src/pages/*.tsx"
      );
      const routePromises = Object.entries(modules).map(
        async ([path, module]) => {
          const component = (await module()).default;
          const fileName = path.split("/").pop()?.replace(".tsx", "") || "";
          const routePath =
            fileName.toLowerCase() === "home"
              ? "/"
              : `/${fileName.toLowerCase()}`;
          return { path: routePath, component };
        }
      );

      const generatedRoutes = await Promise.all(routePromises);
      setRoutes(generatedRoutes);
    }

    generateRoutes();
  }, []);

  return routes;
}
