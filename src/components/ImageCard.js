import React, { useState, useRef, useEffect } from "react";

const ImageCard = ({ image }) => {
  const { description, urls } = image;
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    const handleSpans = () => {
      const height = imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10);
      setSpans(spans);
    };

    imageRef.current.addEventListener("load", handleSpans);
  }, []);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img src={urls.small} ref={imageRef} alt={description} />
    </div>
  );
};

export default ImageCard;
