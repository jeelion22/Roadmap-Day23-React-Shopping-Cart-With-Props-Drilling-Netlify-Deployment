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

  const productsAvailable =[
    {
      "name": "Soap",
      "price": 334.00,
      "img": "https://m.media-amazon.com/images/I/71g5533hooL._SY355_.jpg",
      "id": "1"
    },
    {
      "name": "Bike",
      "price": 354.00,
      "img": "https://m.media-amazon.com/images/I/618SH6KX51L._SX355_.jpg",
      "id": "2"
    },
    {
      "name": "Towels",
      "price": 651.00,
      "img": "https://m.media-amazon.com/images/I/81XnP2TrMGL._SX425_.jpg",
      "id": "3"
    },
    {
      "name": "Keyboard",
      "price": 627.00,
      "img": "https://m.media-amazon.com/images/I/61t0piIdb1L._SY450_.jpg",
      "id": "4"
    },
    {
      "name": "Gloves",
      "price": 984.00,
      "img": "https://m.media-amazon.com/images/I/616WLGTjkIL._AC_UL320_.jpg",
      "id": "5"
    },
    {
      "name": "Pants",
      "price": 191.00,
      "img": "https://m.media-amazon.com/images/I/71G6UQ0ZUeL._AC_UL320_.jpg",
      "id": "6"
    },
    {
      "name": "Keyboard",
      "price": 86.00,
      "img": "https://m.media-amazon.com/images/I/71pZ9RnvACL._AC_UL320_.jpg",
      "id": "7"
    },
    {
      "name": "Bacon",
      "price": 476.00,
      "img": "https://m.media-amazon.com/images/I/71GAKEDnPeL._AC_UL320_.jpg",
      "id": "8"
    },
    {
      "name": "Ball",
      "price": 530.00,
      "img": "https://m.media-amazon.com/images/I/615GyPLqUjL._AC_UL320_.jpg",
      "id": "9"
    },
    {
      "name": "Keyboard",
      "price": 486.00,
      "img": "https://m.media-amazon.com/images/I/71TRDyIUBlL._AC_UY218_.jpg",
      "id": "10"
    }
  ]

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
