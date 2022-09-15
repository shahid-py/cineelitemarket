import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
     <AuthProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthProvider>
      </Router>
  </React.StrictMode>
);



