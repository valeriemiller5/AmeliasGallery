import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Piece from "./pages/Piece";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const App = () => (
  <Router>
    <div>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/piece" component={Piece} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
)

export default App;
