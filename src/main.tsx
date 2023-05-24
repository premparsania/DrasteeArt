import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes/AppRoute';

function FallbackLoader() {
  return (
    <div className="flex h-[80vh] flex-col w-full items-center justify-center py-9">
      <div className='page-loader' />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<FallbackLoader />}>
        <AppRoute />
        <Toaster />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

