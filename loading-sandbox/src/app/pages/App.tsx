import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./home/Home";
import { Sandbox01 } from "./sandbox01/Sandbox01";
import { StoreAwareLoading } from "../../shared/components/loading/StoreAwareLoading";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">home</Link> |<Link to="/sandbox01">sandbox01</Link> |
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sandbox01" component={Sandbox01} />
      </Switch>
      <StoreAwareLoading />
    </BrowserRouter>
  );
};

export default App;
