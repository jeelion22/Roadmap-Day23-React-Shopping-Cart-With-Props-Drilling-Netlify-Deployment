import "/node_modules/bootstrap/dist/css/bootstrap.css";

import Navbar from "./Navbar";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";

import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const productsAvailable = [
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

  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [products, setProducts] = useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartItemsCount(cartItems.length + 1 );
  };

 

useEffect(()=>{
  setProducts(productsAvailable)
}, [])



  

  return (
    <>
      <Navbar cartItemsCount={cartItemsCount} setIsOpen={setIsOpen} />
      <Header />
      <Section
        products={products}       
        cartItems={cartItems}
        setCartItems={setCartItems}
        addToCart={addToCart}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setCartItemsCount={setCartItemsCount}
      />
      <Footer />
    </>
  );
}

export default App;
