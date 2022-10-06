import { render } from "@testing-library/react";
import React from "react";
import './Imagesection.css';

class Imagesection extends React.Component{
    render(){
       return (
               <div className="image-section"> 
               <img src={this.props.src} width="250px" height="300px"/>
               </div>
       )
       }
   }


export default Imagesection;