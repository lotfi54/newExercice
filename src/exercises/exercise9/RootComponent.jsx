import React from "react";
import { Routes, Route, Router, Link } from "react-router-dom";
const RootComponent = (props) => {
  console.log("<Exercise::RootComponent>");

  function Route1() {
    return <p>Hello from route 1</p>;
  }

  function Route2() {
    return <p>Hello from route 2</p>;
  }

   function Strange() {
     return <p> Unknown route</p>;
   }

  return (
    <div>
      <div>
        <div>
          <Link to={process.env.PUBLIC_URL + "/route1"}>Go to route 1</Link>
        </div>
        <div>
          <Link to={process.env.PUBLIC_URL + "/route2"}>Go to route 2</Link>
        </div>
        <div>
          <Link to={process.env.PUBLIC_URL + "/strange"}>
            Go to wrong route
          </Link>
        </div>
      </div>
      <div className="card mt-5">
        <div className="card-body ">
          <Routes>
            <Route
              exact
              strict
              path={process.env.PUBLIC_URL + "/route1"}
              element={<Route1 />}
            ></Route>
            <Route
              exact
              strict
              path={process.env.PUBLIC_URL + "/route2"}
              element={<Route2 />}
            ></Route>
            <Route
              exact
              strict
              path={process.env.PUBLIC_URL + "/strange"}
              element={<Strange />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default RootComponent;
