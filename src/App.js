import React, { useState } from "react";
import HomeComponent from './Home/home'
import ContactComponent from './Contact/contact'
import AboutComponent from './About/about'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from './Layout/Layout'

const App = () => {

    return (
     <div>
     <BrowserRouter>
      <Layout/>
      <Routes>
         <Route path="/" element={<HomeComponent/>}></Route>
         <Route path="contact" element={<ContactComponent/>}></Route>
         <Route path="about/:id" element={<AboutComponent/>}></Route>
         <Route path="*" element={<HomeComponent/>}></Route>
         
      </Routes>
     </BrowserRouter>
     </div>

     
    )

}

export default App