import { ProductProps } from "../type";


const Product = (props: ProductProps) => {
  const { img, name, price,set} = props 
 
  const addToCart = () => {
    set(cart=>[
      ...cart,
      {
        name: name,
        price: price,
        img: img,
      }
    ]);
  };
 

  return (
    <div className="m-5 max-w-[381px] rounded-xl shadow-lg">
      <div className="h-[500px] flex justify-center p-6 gap-1">
        <div className="flex flex-col justify-between ">
          <div className="w-[270px]">
            <h3 className="text-[20px] font-medium ">{name}</h3>
          </div>
          <div className="w-[270px] h-[190px] flex justify-center ">
            <img src={img} alt="sd" className="rounded-[6px] h-full " />
          </div>
          <div className="flex justify-between h-[44px]">
            <div className="flex gap-1 flex-col">
              <h3 className="text-[20px] font-medium leading-[25.2px] text-[#1a202c] ">
                <span>&#8377;</span> {price}
              </h3>
            </div>

            <button
              onClick={addToCart}
              className="pr-5 pl-5 bg-[#3d3d35] rounded-md text-[white] text-[16px] font-medium align-middle hover:bg-[#57574b]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
