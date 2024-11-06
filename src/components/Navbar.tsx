import { searchProps } from "../type";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = (props: searchProps) => {
  const { handleChange, value, handleClick, cartItems } = props;
  const cartLength = cartItems.length;

  return (
    <div>
      <nav className="z-50 fixed w-full top-0 h-20 bg-[#535343]">
        <div className="px-10 h-full flex gap-3 justify-between items-center">
          <h2 className="text-[24px] font-bold text-gray-200">Simple Shop</h2>
          <div className="ml-0 md:ml-[50%]">
            <input
              className="rounded-2xl px-2 py-1 focus:outline-none text-[15px]"
              placeholder="Search....."
              type="text"
              value={value}
              onChange={handleChange}
            />
          </div>
          <div
            onClick={handleClick}
            className="relative right-0 cursor-pointer"
          >
            <span className="text-white ">
              <FaShoppingCart />
            </span>
            <span className=" flex justify-center items-center text-white top-0 -right-2 absolute bg-red-800 w-3 h-3 text-center rounded-full text-[10px]">
              <span> {cartLength}</span>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
