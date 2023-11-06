import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import swiggyapidata from '../utils/mockdata';
function RestaurantMenu(){
    const [resData] =  useState(swiggyapidata?.restaurants);
    const [selectedResturant, setselectedResturant] = useState(null);
    const {resId} = useParams();

    // console.log(selectedResturant?.info);
    useEffect(()=>{
        resData.forEach((restaurant)=>{
            if(restaurant?.info?.id === resId)
            {
                setselectedResturant(restaurant);
            }
        })
   
       
    },[resData])
  
     
    return resData.length === 0 ? (<Shimmer/>) :  (
        <>
         <div className="container mt-8rem">
            <div className="row ">
                <div className="col-md-12 col-sm-12 bg-blue">
                    <h2 className="mb-5 res-head"> Menu</h2>
                        <h2>{selectedResturant?.info?.name}</h2>
                        <p>{selectedResturant?.info?.areaName} - {selectedResturant?.info?.locality}</p>    
                            <ul>
                                <li>{selectedResturant?.info?.cuisines.join(' , ')} </li>
                            </ul>  
                        
                   
                </div>
            </div>
        </div>
        </>
    )
}

export default RestaurantMenu;