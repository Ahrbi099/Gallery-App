import './App.css';
import { useState } from "react";
import Searchbar from './Components/Searchbar';
import Imagesection from './Components/Imagesection';
import {LoadImages} from './Components/api';


function App() {
 //data filter
// const [query,setQuery]=useState();

//Call the function, Store data
 const data= LoadImages();
 console.log(data);
   //Object.data.urls.thumb
 return (
  <div className='App'>
  <Searchbar/>

  {data.map((img)=>  (
    <Imagesection src={img.urls.thumb} key={img.id} />
  ))}

  </div>
 )
}

export default App;
