import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Cards from './Card.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cards />
  </StrictMode>,
);
