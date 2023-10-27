import React from "react";
import Carousel from '../components/Carousel';
import CarouselSec from '../components/CarouselSec';
import TopRestaurant from '../components/TopRestaurant';
import Footer from "./Footer";

function Body(){
    return(
        <>
          <Carousel></Carousel>
          <CarouselSec></CarouselSec>
          <TopRestaurant></TopRestaurant>
          <Footer></Footer>
        </>
    )
}


export default Body;