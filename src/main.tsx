import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app.tsx';
import { Provider } from './provider.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>
);
