import React from "react";
import Header from '../components/Header';
import { Outlet } from "react-router-dom";

function Body(){
    return(
        <>
        <Header></Header>
        {/* Children component bind here */}
        <Outlet></Outlet>
        </>
    )
}


export default Body;