# YourWebsite - Responsive React Website Builder - BETA

**YourWebsite** is a powerful tool designed to help you create fully responsive React websites without the need for writing responsive CSS. Just focus on your content and simple styling, and let the app handle responsiveness for all devices.

## Key Features

- **Automatic Responsive Layout**: Your website will adapt seamlessly to mobile, tablet, and desktop views.
- **No More Media Queries**: Create layouts without worrying about writing custom responsive CSS.
- **Easy Page Setup**: Define your pages and styling, and let the app generate responsive pages automatically.
- **React Router Integrated**: Navigate between different pages easily.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/dnx01/YourWebsite-BETA
   cd yourwebsite

2. **Install Dependencies**: Make sure you have Node.js installed, then run:

   ```bash
   npm install

3. **Run the App**: Start the development server with:

   ```bash
   npm start

4. **Build for Production**: To build the app for production:

   ```bash
   npm run build

5. **Project Structure**

   ```bash
   yourwebsite/
    ├── public/                    # Static assets (HTML, images, etc.)
    ├── src/                       # Source code
    │   ├── components/            # Reusable React components
    │   ├── hooks/                 # Custom hooks (e.g., responsive logic)
    │   ├── pages/                 # Pages of the application
    │   ├── styles/                # CSS files (base and main styling)
    │   ├── App.jsx                # Main application component
    │   └── index.js               # Entry point of the app
    ├── package.json               # Project configuration and dependencies
    └── README.md                  # Project documentation (this file)
   
 6. **Creating a New Page**
  
7. **Creating a New Page**:

    To add a new page to your application, follow these steps:

    Add the Page File:
    Create a new .jsx file inside the src/pages/ directory. For example, to add an "About" page, create about.jsx:
   
   ```bash
      src/
    └── pages/
        └── about.jsx


 **Configure Routing**
 
  Open App.jsx and add the new route for the page:
  
     ```bash
      import AboutPage from './pages/about';
  
    <Route path="/about" element={<AboutPage />} />

  This will allow the page to be accessed at **/about** in the browser.


**Styling the Application**

The application uses two primary CSS files:

**main.css**: Contains general styles for the layout and basic components.
**base.css**: Includes the base styles for making the layout responsive. You don't need to write media queries for responsiveness; it is handled automatically.
Feel free to modify these files to adapt the design to your project's needs.


**License**
This project is licensed under the MIT License. For more details, see the LICENSE file.

