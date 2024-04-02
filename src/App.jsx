import "/node_modules/bootstrap/dist/css/bootstrap.css";

import Navbar from "./Navbar";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";

import { useState } from "react";

function App() {
  const products = [
    {
      id: 1,
      img: "https://picsum.photos/200/300",
      name: "iPhone",
      price: 80000,
    },
    {
      id: 2,
      img: "https://picsum.photos/200/300",
      name: "iPhone",
      price: 80000,
    },
    {
      id: 3,
      img: "https://picsum.photos/200/300",
      name: "iPhone",
      price: 80000,
    },
    {
      id: 4,
      img: "https://picsum.photos/200/300",
      name: "iPhone",
      price: 80000,
    },
  ];

  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  let addToCart = (product) => {
    setCart([...cart, product]);
    setCartItemCount(cart.length);
  };

  let showItemsInCart = (item) => {
    return item;
  };

  return (
    <>
      <Navbar
        cart={cart}
        cartItemCount={cartItemCount}
        showItemsInCart={showItemsInCart}
      />
      <Header />
      <Section products={products} addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default App;
