import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const Cart = (props) => {
  const CartItems = useSelector(state=>state.cart.items)
  let content
  if (CartItems.length===0) {
      content = <p>No items in the cart :)</p>
    
  }else{
     content = <ul>
        {CartItems.map(item=>{
           return <CartItem
            item={{ title: item.title, quantity: item.quantity, total: item.totalPrice, price: item.price }}
            key={item.itemId}
            id={item.itemId}
          />
        })}
      </ul> 
        // itemId: newItem.id,
        // price: newItem.price,
        // quantity: 1,
        // totalPrice:newItem.price,
        // title:newItem.title

  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {content}
     
    </Card>
  );
};

export default Cart;
