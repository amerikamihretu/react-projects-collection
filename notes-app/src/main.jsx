// Imports React's StrictMode component
import { StrictMode } from "react";

// Imports ReactDOM
import { createRoot } from "react-dom/client";

// Imports Tailwind's CSS file
import "./index.css";

// Imports the App component
import App from "./App";

// Imports the Context Provider


// Finds the div with id="root"
createRoot(document.getElementById("root")).render(
  // Enables additional React development checks
  <StrictMode>
    {/* Makes the shared data available to the entire application */}
    
      {/* Renders the application */}
      <App />
   
  </StrictMode>
);