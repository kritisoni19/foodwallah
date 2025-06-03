import { useEffect ,useState } from "react";
import { MEDIA_ASSETS_SWIGGY } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addItemsCart} from '../utils/cartSlice';

function Accordion({ cardProps }) {
    const {title,itemCards} = cardProps;
      
    const [isActive, setIsActive] = useState(false);
    const [increValueShow, setIncreValueShow] = useState(0);
    const [selectedData,setselectedData]=useState(new Map());

    const isVisible=(id)=>{
      for (let [key, value] of selectedData) {
        if(key===id && value>0)
        {
          return true;
        }
         
      }
      return false;

    }

    const dispatch = useDispatch();

    const incrementHandle = (id)=>{
      // console.log('hikiti', + id)
      setIncreValueShow(increValueShow+1);

      let currentValue=selectedData.get(id);
      if(currentValue!==undefined)
      {
        selectedData.set(id,currentValue+1);
      }
      else
      {
        selectedData.set(id,1)
      };
      setselectedData(selectedData);

      dispatch(addItemsCart())
      
      

    }
    const decrementHandle =(id)=>{
      let currentValue=selectedData.get(id);
      setIncreValueShow(increValueShow-1);
      if(currentValue!== undefined || currentValue>0)
      {
        selectedData.set(id,currentValue-1);
      }
      else
      {
        selectedData.set(id,0)
      };

    }

   
   
   
    useEffect(()=>{
      // console.log("here")
    })
    

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
                     
                          {isVisible(cardsevent?.card.info.id)?<div className="d-flex align-items-center justify-content-center mt-1 mb-1">
                           <button type='button' className="btn-sm btn-success"  onClick={()=> incrementHandle(cardsevent?.card.info.id)}>+</button>
                          
                            <p className="mb-0 mx-2">{selectedData.get(cardsevent?.card.info.id)}</p>
                            {/* selectedData */}
                          <button  type='button' className="btn-sm btn-danger" onClick={()=> decrementHandle(cardsevent?.card.info.id)}>-</button>
                        </div> : <div className="d-flex align-items-center justify-content-center mt-1 mb-1"><button  type='button'  className="btn-sm btn-primary"
                         onClick={()=> incrementHandle(cardsevent?.card.info.id)}>ADD</button></div>}
                        
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
