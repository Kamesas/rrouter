import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import Content from "./components/Content";
import Home from "./pages/Home";
import Books from "./pages/Books";
import SideNav from "./components/SideNav";
import About from "./pages/About";
import Login from "./pages/Login";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Toolbar />

          <Content>
            <Route path="/books" component={SideNav} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/books" component={Books} />
              <Route path="/books/:topic" component={Books} />
              <Route path="/books/:topic/:book" component={Book} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </Content>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
