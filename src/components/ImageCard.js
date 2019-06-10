import React from "react";

class ImageCard extends React.Component {
  render() {
    const { urls, alt_description: description } = this.props.image;

    return (
      <div>
        <img src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
