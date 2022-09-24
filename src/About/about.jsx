import React from "react";
import { Link, useNavigate, useParams, NavLink } from "react-router-dom";


const AboutComponent = () =>{

    return (
        
        <div>
            <h1>About</h1>
            <Link to={'/'}>Home</Link>
            <button >Check</button>
        </div>
    )
}

export default AboutComponent