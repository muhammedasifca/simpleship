import { clickProps } from "../type";
import CartProduct from "./CartProduct";

const ShowCart = (props: clickProps) => {
  const { isCart, cartItems } = props;
  const sum=cartItems.reduce((acc,val)=>val.price+=acc,0)
    console.log(sum);
    
  return (
    <div
      className={`fixed right-0  top-[80px] w-[35%] px-6 pb-10 rounded-xl bg-gray-100  ${
        !isCart ? "translate-x-[100%]" : null
      }`}
    >
      <h2 className="text-center mt-8 text-[24px]">Cart</h2>
      <div className="flex flex-wrap">
        {cartItems.map((item, index) => (
          <div key={index}>
            <CartProduct img={item.img} price={item.price} name={item.name} />
          </div>
        ))}
      </div>
    
      {
         cartItems.length>0? <button className="bg-blue-900  text-white text-[15px] py-1 px-4 rounded-md">
         Check out {sum}
       </button>:null
      }
    
    </div>
  );
};

export default ShowCart;
