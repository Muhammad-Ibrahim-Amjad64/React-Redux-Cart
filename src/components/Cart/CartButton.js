import classes from './CartButton.module.css';
import { uiSliceActions } from '../../store/ui-slice';
import {useDispatch, useSelector} from "react-redux"

const CartButton = (props) => {
  const totalQty = useSelector(state=>state.cart.totalQuantity)  
  const dispatch = useDispatch()
  const toggleCartHandler = ()=>{
    dispatch(uiSliceActions.showCart())
    console.log("yaha aya nabiha")
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default CartButton;
