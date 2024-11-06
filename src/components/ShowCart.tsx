import { useEffect, useState } from "react";
import { clickProps } from "../type";
import CartProduct from "./CartProduct";


const ShowCart = (props: clickProps) => {
  const { isCart, mainCart, cartItems, reff, setCartItems } = props;
  const [removeCart, setRemoveCart] = useState("");
  let sum = 0;
  cartItems?.forEach((item) => (sum += item.price));

  const checkOut = () => {
    alert("Thank you for shopping with us")
    setCartItems([]);
    window.location.reload()
  };
  
  useEffect(() => {
    setCartItems(cartItems?.filter((item) => item.name != removeCart));
  }, [removeCart]);

  return (
    <div
      ref={reff}
      className={`fixed right-0  top-[80px] w-100% md:w-[35%] z-50 pb-10 rounded-xl bg-gray-100 h-full ${
        !isCart ? "translate-x-[100%]" : null
      }`}
    >
   
      <div className="overflow-auto  h-full px-5  ">
        <h2 className="text-center mt-8 font-semibold text-gray-800 text-[36px]">
          Cart
        </h2>
        <div className="flex flex-wrap">
          {mainCart
            ? mainCart.map((item, index) => (
                <div className="grow " key={index}>
                  <CartProduct
                    img={item.img}
                    price={item.price}
                    name={item.name}
                    remove={setRemoveCart}
                  />
                </div>
              ))
            : null}
        </div>
        {cartItems && cartItems.length > 0 ? (
          <div className="px-4">
            <div className="my-5">Total price:{sum.toFixed(2)}</div>
            <button
              onClick={checkOut}
              className=" font-semibold bg-[#3d3d35] hover:bg-[#4d4d42] mb-12 w-full  text-white text-[15px] py-2 px-4 rounded-md"
            >
              Check out
            </button>
          </div>
        ) : (
          <div className="text-center mt-16 text-[24px] font-medium ">
            Cart is Empty <span>{String.fromCodePoint(0x1f610)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowCart;
