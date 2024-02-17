
import { useState } from "react";
import Child from "./Child";

function Parent(){

    const [age, setAge] = useState('20')
    const name= 'Kriti Soni'
    return <>
      <div style={{marginTop:'10%'}}>
        <h1>Parent Comp <span className="green">my age is {age}</span></h1>
        <Child name={name} age= {age} setupAge = {setAge}/>
      </div>
    </>
}
export default Parent;