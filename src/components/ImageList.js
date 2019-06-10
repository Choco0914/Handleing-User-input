import React from "react";

const ImageList = ({ images }) => {
  console.log(images);
  const imgList = images.map(image => {
    return <img src={image.urls.regular} alt={image.alt_description} />;
  });

  return <div>{imgList}</div>;
};

export default ImageList;
