import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import ModelProvider from './context/ModelProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ModelProvider>
        <App />
      </ModelProvider>
    </ChakraProvider>
  </React.StrictMode>
);
