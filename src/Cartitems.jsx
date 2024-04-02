import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Cartitems({ product, total, setTotal, removeFromCart }) {
  const [qty, setQty] = useState(1);
  const [subTotal, setSubTotal] = useState(product.price);

  useEffect(() => {
setTotal(total + subTotal);
  }, []);
  return (
    <tr>
      <td>
        <button
          onClick={() => {
            setTotal(total - subTotal);

            removeFromCart(product);
          }}
          type="button"
          className="border-0 p-0 bg-white"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <span className="ms-2">{product.name}</span>
      </td>
      <td>&#8377;{product.price}</td>
      <td>
        <button
          onClick={() => {
            qty > 1 &&
              subTotal > product.price &&
              total > 0 &&
              setQty(
                qty - 1,
                setSubTotal(subTotal - product.price),
                setTotal(total - product.price)
              );
          }}
          type="button"
        >
          -
        </button>
        {qty}
        <button
          onClick={() => {
            setQty(qty + 1);
            setSubTotal(subTotal + product.price);
            setTotal(total + product.price);
          }}
          type="button"
        >
          +
        </button>
      </td>
      <td>&#8377;{subTotal}</td>
    </tr>
  );
}

export default Cartitems;
