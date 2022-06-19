import "./App.css";

import { Switch, Route } from "react-router-dom";
import Form from "./Pages/form";
import Home from "./Pages/home";

function App() {
  return (
    <div className="Header">
      <Switch>
        <Route exact path="/">
          <Form />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <div className="container">
          <Route path="/form">
            <Form />
          </Route>
        </div>
        ]
      </Switch>
    </div>
  );
}

export default App;
