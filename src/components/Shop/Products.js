import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Products = [
  { id: 'p1',price: 9,title:"book", description:"A very good book"},
  { id: 'p2',price: 6,title:"watch", description:"A very good watch"},
  { id: 'p3',price: 15,title:"mouse", description:"A very good mouse"}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map(item=>{
          return  <ProductItem
          title={item.title}
          price={item.price}
          description={item.description}
          key={item.id}
          id={item.id}
        />
        })}
       
      </ul>
    </section>
  );
};

export default Products;
