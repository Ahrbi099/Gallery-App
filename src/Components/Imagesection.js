import { render } from "@testing-library/react";
import React from "react";

class Imagesection extends React.Component{
 render(){
    return (
            <img src={this.props.src} />
    )
    }
}

export default Imagesection;