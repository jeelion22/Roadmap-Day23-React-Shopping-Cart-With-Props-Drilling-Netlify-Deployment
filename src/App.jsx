import "/node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState({});

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

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartItemsCount(cartItems.length + 1);
    setTotal((prevTotal) => prevTotal + product.price);

    setQty((prevQty) => {
      const updatedQty = { ...prevQty };
      updatedQty[product.id] = (updatedQty[product.id] || 0) + 1;
      return updatedQty;
    });
  };


const removeFromCart = (product)=>{

  setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== product.id))
  setTotal(prevTotal => prevTotal - (qty[product.id] * product.price));
  setQty(preQty => {const updatedQty = {...preQty};
  delete updatedQty[product.id];
return updatedQty})

}





  useEffect(() => {
    const count = Object.values(qty).reduce((totalCount, count) => totalCount + count, 0);
    setCartItemsCount(count);
  }, [qty]);

  useEffect(() => {
    setProducts(productsAvailable);
  }, []);

  return (
    <>
      <Navbar cartItemsCount={cartItemsCount} setIsOpen={setIsOpen} />
      <Header />
      <Section
        products={products}
        cartItems={cartItems}
        setCartItems={setCartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setCartItemsCount={setCartItemsCount}
        total={total}
        setTotal={setTotal}
        qty={qty}
        setQty={setQty}
      />
      <Footer />
    </>
  );
}

export default App;
