import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import Cartitems from "./Cartitems";
import { useState } from "react";

function Popup({ setIsOpen, cartItems, setCartItems, setCartItemsCount }) {
    const [total, setTotal] = useState(0)


    const removeFromCart = (product)=>{

        setCartItems(cartItems.filter(cartItem=>cartItem.id != product.id))
        setCartItemsCount(cartItems.length-1)
    }


  return (
    <div className="container" style={{ width: "70%" }}>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between align-items-center">
          <FontAwesomeIcon icon={faCartShopping} />
          <h2>Your Cart</h2>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
            }}
            className="border-0 bg-white"
          >
            {" "}
            <FontAwesomeIcon icon={faWindowClose} />
          </button>
        </div>
      </div>

      <div className="row d-flex flex-column">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Qty.</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
                {cartItems.map(product=>{
                    return <Cartitems key={product.id} product={product} total={total} setTotal={setTotal} removeFromCart={removeFromCart}/>

                })}
            
            </tbody>
          </table>
        </div>
        <div className="col-md-12  sticky-bottom d-flex justify-content-around">
          <p>Total</p>
          <p>
          &#8377;{total}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
