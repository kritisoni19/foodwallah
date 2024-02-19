import { useSelector } from "react-redux";
import Accordion from '../components/Accordion';
function CartPage(){

    const cartItemList = useSelector((store)=>store.cart.items)

    return (
        <>
        <h2>Cart List</h2>
        <Accordion cardProps={cartItemList}/>
        </>
    )
}

export default CartPage;