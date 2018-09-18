import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import Content from "./components/Content";
import Home from "./pages/Home";
import Books from "./pages/Books";
import About from "./pages/About";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Toolbar />

          <Content>
            <Route exact path="/" component={Home} />
            <Route path="/books" component={Books} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
          </Content>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
