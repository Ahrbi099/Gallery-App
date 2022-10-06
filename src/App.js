import './App.css';
import { useState } from "react";
import Searchbar from './Components/Searchbar';
import Imagesection from './Components/Imagesection';
import {LoadImages,SearchImages} from './Components/api';
import {returnQuery} from './Components/Searchbar';




function App() {
 //data filter
//const [query,setQuery]=useState();

//Call the function, Store data
//const query= returnQuery;
 //const searchData= SearchImages(query);
 //const data= LoadImages();
//const searchData=SearchImages(query);
//console.log(data); //Object.data.urls.thumb
 return (
  <div>
  <Searchbar />

  </div>
 )
}

export default App;
