import './App.css';
import { useState } from "react";
import Searchbar from './Components/Searchbar';
import Imagesection from './Components/Imagesection';
import {LoadImages} from './Components/api';





function App() {
 //data filter
const [query,setQuery]=useState();

//Call the function, Store data
 const data= LoadImages();
  console.log(data); //Object.data.urls.thumb
 return (
  <div>
  <Searchbar />

  {data.map((img)=>{
    <Imagesection src={img.urls.thumb} />
  })}

  </div>
 )
}

export default App;
