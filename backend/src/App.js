import React, { useEffect, useState, Suspense } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import routes from "./routes";
import { auth } from "./firebaseConfig";
import NavBar from "./Pages/NavBar";
import { Layout } from "./Layout";

const SignIn = React.lazy(() => import("./Pages/SignIn"));
const Unauthorized = React.lazy(() => import("./Pages/Page404"));

function App() {

  const [user] = useAuthState(auth);
  return (
    <Suspense>
      <Router>
        <Routes>
          {
            !user ?
              <>
                <Route path="/" element={<SignIn />} />
                <Route path="*" element={<SignIn />} />
                {routes.map((route, idx) =>
                  <Route
                    path={route.path}
                    element={route.privateRoute ? <Unauthorized /> : route.component}
                    key={idx}
                  />
                )}
              </>
              :
              <>
                <Route path="/" element={<Layout />}>
                  {routes.map((route, idx) => {
                    console.log(route.privateRoute && route.component)
                    return route.privateRoute && <Route
                      path={route.path}
                      element={route.privateRoute && route.component}
                      key={idx}
                    />
                  }
                  )}
                </Route>

              </>
          }
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
