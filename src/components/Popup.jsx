import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import Cartitems from "./Cartitems";


function Popup({ setIsOpen, cartItems, total, setTotal,qty, setQty, removeFromCart }) {
    

// Opens a pop-up and shows the items added to the cart
// Enables to change quantity, remove item from the product

  return (
    <div className="container-sm-12" style={{ width: "70%" }}>
      <div className="row">
        <div className="col-md-12  d-flex justify-content-between align-items-center">
          <FontAwesomeIcon icon={faCartShopping} />
          <h2>Your Cart</h2>
          <button 
            type="button"
            onClick={() => {
              setIsOpen(false);
            }}
            className="btn btn-outline-dark mt-auto"
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
                    return <Cartitems key={product.id} product={product} total={total} setTotal={setTotal}  removeFromCart={removeFromCart} qty={qty} setQty={setQty}/>

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
