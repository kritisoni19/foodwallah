import { useEffect ,useState } from "react";
import { MEDIA_ASSETS_SWIGGY } from "../utils/constant";

function Accordion({ cardProps }) {
    const {title,itemCards} = cardProps;
    const [isActive, setIsActive] = useState(false);
 
    useEffect(()=>{
        // console.log(itemCards)
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
              {itemCards && itemCards.map((cardsevent,index) => {
                return (
                  <div key={index}>
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
                        <button type='button' className="btn-sm btn-primary">ADD</button>
                        <div className="d-flex align-items-center justify-content-center mt-1 mb-1">
                          <button type='button' className="btn-sm btn-success">+</button>
                            <p className="mb-0 mx-2">0</p>
                          <button type='button' className="btn-sm btn-danger">-</button>
                        </div>
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
