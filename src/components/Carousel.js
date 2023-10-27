import React, { useEffect, useState } from "react";
import {SWIGGY_API} from '../utils/constant';
import {SWIGGY_CAROUSEL_IMG} from '../utils/constant';

function Carousel(){

    const [showCarousalImage, setShowCarousalImage] = useState([]);
    useEffect(()=>{
       getCarouselCards();
    },[])

    const getCarouselCards = async() =>{
        const data = await fetch(SWIGGY_API);
        const json = await data.json(data);
        // console.log(json?.data);
         
        setShowCarousalImage(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)

    }
    
    return(
        <div className="container mt-5">
            <div className="row ">
                <div className="col-md-12 col-sm-12">
                    <h2 className="page_heading">Best offers for you</h2>

                 
                        <div className="d-flex main-scroll">
                            {
                                showCarousalImage.map((e,index)=>{
                                    return  <img key={index} src={SWIGGY_CAROUSEL_IMG + e.imageId} style={{height:'252px', paddingRight: '16px'}} alt='card img'/>
                                })
                            }
                            {/* {showCarousalImage} */}
                           
                        </div>
                  

                </div>
            </div>
        </div>
    )
}
export default Carousel;