import React from "react";
import routes from "./routes";
import {  Route, Routes } from "react-router-dom";

// Import Bootstrap css
import "./theme.scss";

// Import themify Icon
import "./assets/css/themify-icons.css";

// Import Custom Css
import "./assets/css/style.css";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route>
          {routes.map((route, idx) => (
            <Route
              path={route.path}
              element={route.component}
              key={idx}
              exact={true}
            />
          ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
