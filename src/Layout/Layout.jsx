import React from "react";
import {Link} from 'react-router-dom'

const Layout = () =>{
    return (
        <div>

         <ul>
             <Link to={'/'}>Home</Link>
             <Link to={'/about'}>About</Link>
             <Link to={'/contact'}>Contact</Link>
         </ul>
   
        </div>
    )
}

export default Layout