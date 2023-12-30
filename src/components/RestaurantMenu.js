import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU } from '../utils/constant';
import '../App.css';

function RestaurantMenu() {

    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams()

    const fetchMenuData = async () => {
        const menudata = await fetch(RESTAURANT_MENU + resId);
        const menudatajson = await menudata.json();
        console.log(menudatajson.data)
        setResInfo(menudatajson.data)
    }


    useEffect(() => {
        fetchMenuData();
    }, [])

    if (resInfo === null) return <Shimmer />

    // const {name} = resInfo?.cards[0]?.card?.card?.info;
    // const {name} = resInfo?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title;
    return (
        <>
            <div className="container mt-8rem">
                <div className="row ">
                    <div className="col-md-12 col-sm-12 bg-blue">
                        <div className=" d-flex align-items-center justify-content-between">
                            <div>
                                <h3 className="mb-3 res-head"> {resInfo?.cards[0]?.card?.card?.info?.name}</h3>
                                <p className="font-13">{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(' , ')} </p>
                                <p className="font-13">{resInfo?.cards[0]?.card?.card?.info?.areaName} - {resInfo?.cards[0]?.card?.card?.info?.locality}</p>

                                <p className="font-13">{resInfo?.cards[0]?.card?.card?.info?.feeDetails?.message}</p>
                            </div>
                            <div className="outer-part">
                                <p className="mb-0"><span>&#9733;</span>{resInfo?.cards[0]?.card?.card?.info?.avgRatingString}</p>
                                <p className="mb-0">{resInfo?.cards[0]?.card?.card?.info?.totalRatingsString}</p>
                            </div>
                        </div>
                        <div className="seperator"></div>
                        <p>{resInfo?.cards[0]?.card?.card?.info?.sla?.slaString} | {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
                        <div className="seperator"></div>
                        {/* Accordion */}
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        { resInfo?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title}
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Accordion ends */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default RestaurantMenu;