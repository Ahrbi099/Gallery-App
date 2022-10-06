import React from 'react';
import Imagesection from './Imagesection';
import './Searchbar.css';

const Images = ({ image}) => {


  return (
    <div className="comp2">
    {image.map((img) => (
    <Imagesection src={img.urls.thumb} key={img.id} />
  ))}
</div>
  );
};



export default Images;