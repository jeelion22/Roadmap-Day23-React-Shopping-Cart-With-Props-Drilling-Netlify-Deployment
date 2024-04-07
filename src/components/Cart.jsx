

function Cart({ cartItemsCount,  setIsOpen }) {



  

  


  return (
    <>
      <form className="d-flex flex-column">
        <button
          onClick={() => {
            setIsOpen(true)
            
          }}
          className="btn btn-outline-dark"
          type="button"
        >
          <i className="bi-cart-fill me-1"></i>
          Cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">
            {cartItemsCount}
          </span>
        </button>  
      


      </form>
    </>
  );
}

export default Cart;
