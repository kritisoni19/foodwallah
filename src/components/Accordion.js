import { useEffect ,useState } from "react";
import { MEDIA_ASSETS_SWIGGY } from "../utils/constant";
import { useDispatch } from "react-redux";
import {incrementItems} from '../utils/IncrDecreBtnSlice';

function Accordion({ cardProps }) {
    const {title,itemCards} = cardProps;
    const [isActive, setIsActive] = useState(false);
    const [increValueShow, setIncreValueShow] = useState(0);
    const [onPageLoadShowBtns , setonPageLoadShowBtns] = useState(false);


    const dispatch = useDispatch();


    const incrementHandle = (id)=>{
      console.log('hikiti',+ id)
      setIncreValueShow(increValueShow+1);
      setonPageLoadShowBtns(true);
      dispatch(incrementItems(id))
    }
    const decrementHandle =()=>{
      if( increValueShow === 1){
        setonPageLoadShowBtns(false)
      }else{
        setIncreValueShow(increValueShow-1);
      } 
    }

   
   
    // const {itemCards} = ;
    useEffect(()=>{
        //  console.log(itemCards)
    },[])
  return (
    <   >
      {/* Accordion */}
      <div className="accordion-item">
        <h2 className="accordion-header" >
          <button
            className="accordion-buttons"
            type="button"
            onClick={() => setIsActive(!isActive)}
          >
           <span>{title}</span> 
           <span className="font-30">
            {isActive?'-':'+'}
            </span>
          </button>
          
        </h2>
        {
          isActive &&   <div>
          <div className="accordion-body">
            <div>
              {itemCards && itemCards.map((cardsevent) => {
                return (
                  <div key={cardsevent?.card?.info?.id}  >
                    <div className="d-flex align-items-center justify-content-between">
                      
                      <div>
                        {cardsevent?.card.info.itemAttribute.vegClassifier==="VEG"?<h4 className="green">
                          
                          {cardsevent.card.info.itemAttribute.vegClassifier}
                        </h4>:<h4 className="red">
                          
                          {cardsevent.card.info.itemAttribute.vegClassifier}
                        </h4>}
                        <p className="mb-0">{cardsevent.card.info.name}</p>
                        <p className="font-13">
                          {cardsevent.card.info.description}
                        </p>
                        <p>Rs {cardsevent.card.info.price / 100}</p>
                      </div>
                      <div className="d-flex flex-column">
                        <img
                          src = {MEDIA_ASSETS_SWIGGY+cardsevent.card.info.imageId}
                          alt="card img"
                          className="wd-img"
                        />
                      
                        { onPageLoadShowBtns?
                          <div className="d-flex align-items-center justify-content-center mt-1 mb-1">
                          <button type='button' className="btn-sm btn-success"  onClick={()=> incrementHandle(cardsevent?.card.info.id)}>+</button>
                            <p className="mb-0 mx-2">{increValueShow}</p>
                          <button  type='button' className="btn-sm btn-danger" onClick={decrementHandle}>-</button>
                        </div> : <button  type='button'  className="btn-sm btn-primary"
                         onClick={()=> incrementHandle(cardsevent?.card.info.id)}>ADD</button>
                        }
                      </div>
                    </div>
                    <div className="seperator"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        }
      
      </div>
   

      {/* Accordion ends */}
    </>
  );
}

export default Accordion;
