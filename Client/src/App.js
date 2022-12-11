import React, { useEffect, useState, Suspense } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import routes from './routes';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Loader = () => (
  <div className="flex justify-center items-center">
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);


function App() {
  return (
    <Suspense fallback={Loader()}>
      {
          <Router >
            <Navbar/>
            <Routes>
              {
                <>
                  {routes.map((route, idx) =>
                    <Route
                      path={route.path}
                      element={route.component}
                    />
                  )}
                </>
              }
            </Routes>
            <Footer/>
          </Router>
      }
    </Suspense>
  );
}

export default App;
