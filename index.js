import { registerRootComponent } from 'expo';

import App from './App';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // optional — only if you're using Tailwind or custom CSS

// Get the root element from index.html
const rootElement = document.getElementById('root');

// Safety check to prevent null error
if (!rootElement) {
  throw new Error("Root element not found. Make sure there's a <div id='root'></div> in index.html");
}

// Create the root and render the app
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
