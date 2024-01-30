import React from "react";
import ImageSearch from "./Components/ImageSearch";
import DisplayImage from "./Components/DisplayImage";
import { useState } from "react";
import "./index.css"



const App = ()=>{
  const [imagesList, setimagesList] = useState([]);
  

  return(
    <div className="container">
      <ImageSearch 
      setimagesList={setimagesList}
      />
      <DisplayImage 
      imagesList = {imagesList}
      />
    </div>
  )
}

export default App;
