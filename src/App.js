import { useState, useEffect } from "react";

import './App.css';
import ButtonBar from "./components/buttonbar"
import Gallery from "./components/gallery"

function App() {
const [artId, setArtId] = useState(12720)
const [data, setData] = useState({})

  useEffect(() => {
    document.title= 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  const displayImage = () => {
    if(!data.primaryImage) {
      return (
        <h1>No Image</h1>
      )
    }
      return(
        <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      )
  }

  return (
    <div className="App">
      <ButtonBar handleIterate={handleIterate} />
      {displayImage()}
    </div>
  );
}

export default App;
