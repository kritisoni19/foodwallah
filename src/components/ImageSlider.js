import React, { useEffect, useState } from "react";

function ImageSlider(){

    const imageList = ['text1','text2','text3','text4','text5'];
    const [activeImage, setActiveImage] = useState(0);

    const nextBtnHandle = ()=>{
        setActiveImage((activeImage + 1) % imageList.length)
        console.log('click')
    }
    const prevBtnhandle = ()=>{
        if(activeImage === 0){
            setActiveImage(imageList.length - 1)
        } else {
        setActiveImage(activeImage - 1)
        }
        console.log('fssdf')
    }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            nextBtnHandle();
        },2000)

        return()=>{
            clearTimeout(timer);
        }
    },[activeImage]);
    return <>
    <div style={{display:'flex'}}>
        <button className="mx-3" onClick={prevBtnhandle}>Previous</button>
        <div>{imageList[activeImage]}</div>
        <button className="mx-3" onClick={nextBtnHandle}>Next</button>
    </div>
    </>
}

export default ImageSlider;