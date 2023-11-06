import React, { useEffect, useState } from "react";

import swiggyapidata from '../utils/mockdata';
import {CLOUDANAY_IMG} from '../utils/constant';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function TopRestaurant() {
  const [showRestaurantData,setshowRestaurantData] = useState(swiggyapidata.restaurants);
  
  const [inputText, setInputText] = useState("");

  //  console.log(showRestaurantData);

   useEffect(()=>{
    
   })
  const searchBtn =() =>{
    console.log(inputText);

     const filterData = showRestaurantData.filter((res)=>{
      return  res?.info?.name?.toLowerCase().includes(inputText.toLowerCase());
     
     })
     console.log(filterData)
      setshowRestaurantData(filterData);
  }

 
  
  return  showRestaurantData.length === 0 ? (<Shimmer/>) :(
    <div className="container mt-8rem">
      <div className="row ">
        <div className="col-md-12 col-sm-12">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="page_heading">Top Restaurant</h2>
            <div className="d-flex align-items-center">
      
                <label className=" d-flex">
                  <input
                    type="text"
                    value={inputText}
                    placeholder="Search"
                    className="form-control"
                    onChange={(e)=>{
                      setInputText(e.target.value) 
                    }}
                  />
                    
                  <span className="search-icon" role="button" onClick={searchBtn}>
                    <svg
                      viewBox="5 -1 12 25"
                      height="17"
                      width="17"
                      fill="#fff"
                    >
                      <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
                    </svg>
                  </span>
                </label>
          </div>
          </div>

          <div  className="grid_property mb-3">
            {
              showRestaurantData.map((e,index)=>{
                const {name,avgRating,cuisines,areaName} = e.info;
              return (
                <Link to={'/restaurants/' + e.info.id } key={e.info.id}>
                   <div >
                  <img
                   src ={CLOUDANAY_IMG + e.info.cloudinaryImageId}
                    style={{
                      height: "180px",
                      width: "100%",
                      borderRadius:'20px'
                    }}
                    alt="card img"
                  />
                  <div className="mt-3">
                    <h4 className="fs-5">{name}</h4>
                    <div className="d-flex mb-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
                        <span>&nbsp; {avgRating} . {new Date(e?.info?.availability?.nextCloseTime).getMinutes()} min </span>
                    </div>
                    <p className="p-mt">{cuisines.join(', ')}</p>
                    <p className="p-mt">{areaName}</p>
                   
                  </div>
                </div>
                </Link>
             
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopRestaurant;
