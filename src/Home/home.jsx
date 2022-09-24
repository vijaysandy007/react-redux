import React, { useState, Ref, useRef } from "react";
import { Link } from "react-router-dom";
import HttpService from '../Http-Response/Http-Service'
import './Home.css'
import {useSelector} from 'react-redux';
import {emptyData} from '../Features/User';
import {useDispatch} from 'react-redux';




const HomeComponent = () => {

   const user = useSelector(state => state.user.value)
   const dispatch = useDispatch()


    return(
        <>
        <h1>Home Component</h1>

        <p>Name:{user.name}</p>
        <p>Age:{user.age}</p>
        <p>Email:{user.email}</p>

        <button onClick={() => dispatch(emptyData({
                name:"", age:0, email:""
            }))}>Log Out</button>
        </>

        
    )
  
}

export default HomeComponent