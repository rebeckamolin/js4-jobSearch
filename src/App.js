import React from "react";
import { Switch, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/job/:id" component={DetailPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
export default App;
