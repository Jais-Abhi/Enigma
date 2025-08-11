import "./App.css";
// import Body from "./Body";
import store from "./store/store";
import { Provider } from "react-redux";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      offset: 100,    // distance from top before triggering
      once: true,     // animate only once
    });
  }, []);

  return (

    <>
      <Provider store={store}>
        <Body />
      </Provider>
    </>

  );
}

export default App;
