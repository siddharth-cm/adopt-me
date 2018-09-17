import React, { Component, Fragment } from "react";
import { Router, Link } from "@reach/router";
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
            <Link to="/search-params">
              <span aria-label="search" role="img">
                🔍
              </span>
            </Link>
          </header>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
