import "./ImageList.css";
import React from "react";

const ImageList = ({ images }) => {
  const imgList = images.map(({ urls, id, alt_description }) => {
    return <img key={id} src={urls.regular} alt={alt_description} />;
  });

  return <div className="image-list">{imgList}</div>;
};

export default ImageList;
