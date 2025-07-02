import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Renderiza tu App principal
const appRootElement = document.getElementById('root');
const appRoot = createRoot(appRootElement);
appRoot.render(<App />);

