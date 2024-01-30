import React from "react";



const DisplayImage = ({imagesList})=>{

    console.log(imagesList)

    return (
        <div className="displayImages">
            { imagesList.map((image,index) => (
                <img key={index} src={image.urls.regular} alt={image.alt_description} />
            ))}

        </div>
        )
}

export default DisplayImage