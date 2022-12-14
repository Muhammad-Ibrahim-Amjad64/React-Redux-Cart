import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from "react-redux"
function App() {
  const toggleCart = useSelector(state=>state.ui.toggleCart)
  return (
    <Layout>
      {toggleCart&&<Cart />}
      {console.log("toggle cart",toggleCart)}
      <Products />
    </Layout>
  );
}

export default App;
