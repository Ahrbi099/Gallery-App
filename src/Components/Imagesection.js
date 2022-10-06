import { render } from "@testing-library/react";
import React from "react";
import './Imagesection.css';

class Imagesection extends React.Component{
    render(){
       return (
               <div className="image-section"> 
               <img src={this.props.src} width="200px" height="250px"/>
               </div>
       )
       }
   }


export default Imagesection;