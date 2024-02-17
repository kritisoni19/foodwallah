import { useState } from "react";


function Help(){
    const [freshNum, setFreshNum] = useState(1);
    const [multtiPlyVal,setMultiplyVal] = useState(1)

    //input value
    const [inputval, setinputvalue] = useState('')
    const [itemList, setItemList] = useState([])

    const changeHandle =()=>{
        setMultiplyVal(freshNum * 5);
        setFreshNum(freshNum+1)
    }


      const onInputhandle = (e) => {
        setinputvalue(e.target.value)
      }
      const addHandler = () => {
        setItemList([...itemList, inputval])
        // console.log(items.name)
      }
      const deletehandle = (index) => {
        const itemListCopy = [...itemList]
        itemListCopy.splice(index, 1)
        setItemList(itemListCopy)
      }
      
      let guest = 0;
      guest = guest + 1;
      console.log(guest)
    return(
    <>
    {guest}
         <p style={{marginTop:'8%',marginRight:'5%'}}>Help</p>
         <h1>{freshNum}</h1>
         <button className="btn btn-primary" onClick={changeHandle}>Change Num and multiple by 5</button>
        <h2>{multtiPlyVal}</h2>
        <input
        type="text"
        name="name"
        value={inputval}
        onChange={onInputhandle}
      />
      <button onClick={addHandler}>Add</button>

      {itemList.map((items, index) => {
        return (
          <div key={index}>
            {items} <button onClick={() => deletehandle(index)}>Delete</button>
          </div>
        )
      })}
   
    </>
    )
   
}
    


export default Help;