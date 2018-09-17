import React, { Component } from "react";
import { navigate } from "@reach/router";
import SearchBox from "./SearchBox";

class SearchParams extends Component {
  search() {
    navigate("/");
  }
  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.search} />
      </div>
    );
  }
}

export default SearchParams;
