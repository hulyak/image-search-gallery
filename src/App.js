import React, { useState } from "react";
import api from "./components/api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await api.get("/search/photos", {
      params: { query: term },
    });
    setImages(response.data.results); // update the state with the query
  };

  return (
    <div className="ui container" style={{ marginTop: "15px" }}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
