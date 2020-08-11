import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Icon } from "@material-ui/core";
import "./App.css";
import { Home } from "./home/Home";
import { Sandbox01 } from "./sandbox01/Sandbox01";
import { Sandbox02 } from "./sandbox02/Sandbox02";
import { Sandbox03 } from "./sandbox03/Sandbox03";
import { Sandbox04 } from "./sandbox04/Sandbox04";
import { Sandbox05 } from "./sandbox05/Sandbox05";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar position="relative">
          <Toolbar>
            <IconButton edge="start" color="inherit">
              <Icon>menu</Icon>
            </IconButton>
          </Toolbar>
        </AppBar>

        <div>
          <Link to="/">home</Link> |
          <Link to="/sandbox01">sandbox01</Link> |
          <Link to="/sandbox02">sandbox02</Link> |
          <Link to="/sandbox03">sandbox03</Link> |
          <Link to="/sandbox04">sandbox04</Link> |
          <Link to="/sandbox05">sandbox05</Link> |
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sandbox01" component={Sandbox01} />
          <Route path="/sandbox02" component={Sandbox02} />
          <Route path="/sandbox03" component={Sandbox03} />
          <Route path="/sandbox04" component={Sandbox04} />
          <Route path="/sandbox05" component={Sandbox05} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
