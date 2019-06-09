import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import { getPhoto } from "./api";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const {
      data: { results }
    } = await getPhoto(term);
    this.setState({ images: results });
  };

  render() {
    const images = this.state.images;
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={images} />
      </div>
    );
  }
}

export default App;
