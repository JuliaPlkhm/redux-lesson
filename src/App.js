import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import { Context } from "./context";
import Body from "./components/Body";
import DnDFlow from "./components/diagramm";
import V2Example from "./components/Xarrow";


export default function App() {
  const [isDark, toggleIsDark] = useState(false);

  const ctx = {
    toggleTheme: () => {
      toggleIsDark(!isDark);
    },
    theme: isDark ? "dark" : "light",
  };

  return (
    <Context.Provider value={ctx}>
      <Router>
        <Provider store={store}>
          {/* <Body></Body> */}
          {/* <DnDFlow></DnDFlow> */}
          <V2Example/>
        </Provider>
      </Router>
    </Context.Provider>
  );
}
