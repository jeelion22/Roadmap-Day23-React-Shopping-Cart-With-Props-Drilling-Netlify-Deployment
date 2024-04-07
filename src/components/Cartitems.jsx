import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Cartitems({ product, removeFromCart, setTotal, qty, setQty }) {
 
//  it is component responsible for showing items in the cart

  return (
    <tr>
      <td>
        {/* remove btn */}
        <button onClick={()=>{
          removeFromCart(product)
        }} type="button" className="btn btn-outline-dark mt-auto" >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <span className="ms-2">{product.name}</span>
      </td>

      <td>&#8377;{product.price}</td>

      {/* quantity control btns */}
      <td>
        <button className="btn btn-outline-dark  mt-auto"
          onClick={() => {
            qty[product.id] > 1 && [
              setQty(prevQty => {const updateQty = {...prevQty};
              updateQty[product.id] = updateQty[product.id]-1; return updateQty}),
            
              setTotal(total=>total-product.price)
           
            ];
          }}
          type="button"
        >
          -
        </button > 
        {qty[product.id]}
        <button className="btn btn-outline-dark mt-auto"
          onClick={() => {
            setQty(prevQty => {const updateQty = {...prevQty};
              updateQty[product.id] = updateQty[product.id] + 1; return updateQty}),
          
            setTotal(total => total + product.price);
          }}
          type="button"
        >
          +
        </button>

        {/* subtotal of the product */}
      </td>
      <td>&#8377;{product.price*qty[product.id]}</td>
    </tr>
  );
}

export default Cartitems;
