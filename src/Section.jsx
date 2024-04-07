import Card from "./Card";
import Popup from "./Popup";

function Section({
  products,
  addToCart,
  removeFromCart,
  isOpen,
  setIsOpen,
  cartItems,
  setCartItems,
  setCartItemsCount,
  total,
  setTotal,
  qty,
  setQty
}) {
  return (
    <>
      <section className="py-5 d-flex">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-start">
            {products.map((product) => {
              return (
                <Card
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  qty={qty}
                  removeFromCart={removeFromCart}
                />
              );
            })}
          </div>
        </div>
        {isOpen && (
          <Popup
            setIsOpen={setIsOpen}
            cartItems={cartItems}
            setCartItems={setCartItems}
            setCartItemsCount={setCartItemsCount}
            total={total}
            setTotal={setTotal}
            qty={qty}
            setQty={setQty}
            removeFromCart={removeFromCart}
          />
        )}
      </section>
    </>
  );
}

export default Section;
