
 import  {useRouteError}  from "react-router-dom"
import React from "react"; 

function Error(){
    const err = useRouteError();
    // console.log(err)
     return(
        <>
            <h2>{err.status}</h2>
            <h3>{err.statusText}</h3>
        </>
     )
}

export default Error;