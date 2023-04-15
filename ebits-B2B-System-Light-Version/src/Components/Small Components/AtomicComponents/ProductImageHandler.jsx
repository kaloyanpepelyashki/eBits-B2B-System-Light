import { useState } from "react";

export default function ProductImageHandler(props) {
  const { imageURL, fallBackURL, product } = props;

  const [imgSrc, setImageSrc] = useState(imageURL);

  const onImageError = () => setImageSrc(fallBackURL);

  return (
    <img
      className="w-10 h-10 object-contain"
      src={imgSrc ? imgSrc : fallBackURL}
      onError={onImageError}
      alt={product.ProductName}
    />
  );
}
