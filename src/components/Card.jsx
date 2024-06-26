import React from "react";

function Card({ product, addToCart, qty, removeFromCart }) {
  return (
    <div className="col-auto mb-5">
      <div className="card h-100 p-1">
        <img className="card-img-top" src={product.img} alt="product-img" style={{height: 200}} />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.name}</h5>
            Rs. {product.price}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {qty[product.id]? <button onClick={()=>{
              removeFromCart(product)
            }} className="btn btn-outline-dark mt-auto">Remove From Cart</button> : <button onClick={()=>{addToCart(product)}} className="btn btn-outline-dark mt-auto">
              Add to Cart
            </button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
