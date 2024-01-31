import React from  'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';



const ImageSearch = ({setimagesList})=>{
    const [imageName, setImageName] = useState("");

    useEffect(()=>{
        searchImageOnLoad()
    },[])


    // loads on the first time page reload
    function searchImageOnLoad(){

        axios.get("https://api.unsplash.com/photos",{
            headers: {
                "Accept-Version" : "v1",
                Authorization:  `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
            }
        })
        .then((response) => setimagesList(response.data))
        .catch((error) => console.log(error))
        
    }

// searched image depending on the search query
    function searchImage(e){
        e.preventDefault();

        axios.get("https://api.unsplash.com/search/photos",{
            headers: {
                "Accept-Version" : "v1",
                Authorization:  `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
            },
            params:{
                query: imageName
            }
        })
        .then((response) => setimagesList(response.data.results))
        .catch((error) => console.log(error))
        
    }

    return(
        <div className='form'>
            <h1>Image Search</h1>
            <form className="container" onSubmit={searchImage}>
                <input type="text" placeholder="Search images..."
                value={imageName}
                onChange={(e)=> setImageName(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default ImageSearch;