import { useEffect, useState } from "react";
import axios from "axios";
const count = 1;
//import images from API [Call API] 
function LoadImages() {
    //Store data
    const [state, setState] = useState([]);
    //Access and run function once
    useEffect(() => {
        //Access the images
        axios
            .get("https://api.unsplash.com/photos?client_id=fFHNnrLjyPGJRdQlB4YFlumEH_eXyQPWEOLRfvujJ0Q")
            //If success
            .then((data) => {
                setState(data.data); //Store data for the app [Object.data]
            })
    }, [count])
    return state;
}

export  {LoadImages};