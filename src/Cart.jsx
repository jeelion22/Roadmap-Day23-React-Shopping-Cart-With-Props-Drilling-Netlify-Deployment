import CartItems from "./CartItems";

function Cart({ cart, cartItemCount, showItemsInCart }) {
  return (
    <>
      <form className="d-flex">
        <button
          onClick={() => {
            window.alert("Clicked Cart");
          }}
          className="btn btn-outline-dark"
          type="submit"
        >
          <i className="bi-cart-fill me-1"></i>
          Cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">
            {cartItemCount}
          </span>
        </button>
      </form>
    </>
  );
}

export default Cart;
