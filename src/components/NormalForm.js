import React, { useState } from "react";
let renderCount = 0
function NormalForm(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showFormData, setShowFormData] = useState(false)

    const submitHandle = (e)=>{
        e.preventDefault();
        setShowFormData(true)
        console.log('hh')
    }
    renderCount += 1
    return (
        <>
        <div>
            <h1>Normal Form</h1>
            Render Count -- {renderCount}
            <form onSubmit={submitHandle}>
                <div>
                    <label>firstname:</label>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <input type="submit" value='submit'/>
            </form>
            <p> Data:
              {
                showFormData ?
                  <span> {name} {email} </span>
                  : null
              }
            </p>

        </div>
        </>
    )
}

export default NormalForm;