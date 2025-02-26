import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { Provider } from '@/components/ui/provider';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap the app with BrowserRouter */}
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);


