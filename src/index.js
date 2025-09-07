import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import reportWebVitals from './reportWebVitals';

import Screenloading from './components/Screenloading';
// import Page_router from './components/Page_router';

import { Suspense, lazy } from 'react';

const Page_router = lazy(() => import('./components/Page_router'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    {/* <div className="min-h-screen bg-black ">
      <Page_router />

    </div> */}

    <Suspense fallback={<Screenloading />}>
     <Page_router/>
    </Suspense>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
