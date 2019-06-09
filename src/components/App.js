import React from "react";
import SearchBar from "./SearchBar";
import { getPhoto } from "./api";

class App extends React.Component {
  async onSearchSubmit(term) {
    const {
      data: { results }
    } = await getPhoto(term);
    console.log(results);
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
