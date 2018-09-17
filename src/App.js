import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Results from "./components/Results";
import Details from "./components/Details";
import SearchParams from "./components/SearchParams";
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
