import React from "react";
import Header from '../components/Header';
// import Parent from '../components/Parent';
import { Outlet } from "react-router-dom";
// import ImageSlider from '../components/ImageSlider';

function Body(){
    return(
        <>
        <Header></Header>

        
        {/* <Parent></Parent> */}
        {/* Children component bind here */}
        <Outlet></Outlet>

        {/* <ImageSlider></ImageSlider> */}
        </>
    )
}


export default Body;