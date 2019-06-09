import React from "react";
import SearchBar from "./SearchBar";
import { getPhoto } from "./api";

class App extends React.Component {
  onSearchSubmit(term) {
    getPhoto(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
