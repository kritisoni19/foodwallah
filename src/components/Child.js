

function Child(props){

    return <>
        <h3>Here getting data from parent component 
             <span className="red">{props.name} </span> </h3>

        <button onClick={ ()=> props.setupAge('30')}>when click on btn the age will change</button>
    </>
}

export default Child;