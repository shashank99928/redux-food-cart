import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: " Palak Paneer",
    description: "Spinach and veggies",
    price: 22.29
  },
  {
    id: "m2",
    name: "Butter Paneer",
    description: "Butter  and Panner",
    price: 22.29
  },
  {
    id: "m3",
    name: "Alu Paneer",
    description: "Alu, Paneer and veggies",
    price: 22.29
  },
  {
    id: "m4",
    name: "Thali",
    description: "Complete meal",
    price: 22.29
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_MEALS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
