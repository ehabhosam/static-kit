# StaticKit

StaticKit is a powerful, lightweight starter kit for building static websites using React, Vite, Tailwind CSS, and TypeScript. It provides a solid foundation for developers who want to quickly set up a project with modern web technologies and best practices.

## Features

- 🚀 Fast development with [Vite](https://vitejs.dev/)
- ⚛️ [React](https://reactjs.org/) for building user interfaces
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for rapid UI development
- 🏷️ [TypeScript](https://www.typescriptlang.org/) for type safety
- 🗂️ File-based routing
- 🎭 Customizable color palette
- 📱 Responsive layout components (Header, Footer)
- 🧩 Pre-built pages (Home, About, Contact)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/static-kit.git
   cd static-kit
   ```

2. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn
   ```

3. Start the development server:

   ```
   npm run dev
   ```

   or

   ```
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173` to see your app running.

## Usage

### Adding New Pages

1. Create a new `.tsx` file in the `src/pages` directory.
2. The file name will automatically become the route. For example, `src/pages/Services.tsx` will be accessible at `/services`.
3. Export your component as the default export.

**Note:** we don't support nested routes at the moment.

Example:

```tsx
import React from "react";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-secondary-800">Our Services</h1>
    </div>
  );
};

export default Services;
```

### Customizing Colors

1. Open `src/styles/palette.ts`.
2. Modify the color values in the `palette` object.
3. The changes will automatically apply throughout your app.

### Modifying Layout Components

- Edit `src/components/Header.tsx` and `src/components/Footer.tsx` to customize the layout.
- The `Layout` component in `src/components/Layout.tsx` wraps all pages with the Header and Footer.

### Building for Production

Run the following command to build your project for production:

```
npm run build
```

or

```
yarn build
```

The built files will be in the `dist` directory, ready for deployment to your preferred hosting platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

Happy coding with StaticKit! If you have any questions or run into issues, please open an issue on the GitHub repository.
