import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Optionally, you can add an error boundary for production apps
function ErrorBoundary({ children }) {
  return children;
  // For a real app, use a proper error boundary implementation
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
