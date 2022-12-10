import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { carttActions } from '../../store/cart-slice';
const CartItem = (props) => {
  const { title, quantity, total, price ,description} = props.item;
  const {id}= props;
  const dispatch = useDispatch()
  const removeItemFromCartHandler = ()=>{
    dispatch(carttActions.removerItemFromTheCart(id))

  }
  const addItemFromCartHandler = ()=>{
    dispatch(carttActions.addItemToTheCart(  {id:id, title: title,  price: price }
      ))

  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addItemFromCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
