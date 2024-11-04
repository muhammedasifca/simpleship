import { CartProps } from "../type"

const CartProduct = (props:CartProps) => {
    const {img,name,price}=props
  return (
    <div className="m-5 mx-auto max-w-[90%] rounded-xl shadow-lg">
    <div className="h-[300px]  flex justify-center p-6 gap-1">
      <div className="flex flex-col justify-between ">
        <div className="w-[170px]">
          <h3 className="text-[15px] font-medium ">{name}</h3>
        </div>
        <div className="w-[170px] h-[100px] flex justify-center ">
          <img src={img} alt="sd" className="rounded-[6px] h-full " />
        </div>
        <div className="flex justify-between h-[44px]">
          <div className="flex gap-1 flex-col">
            <h3 className="text-[14px] font-medium leading-[25.2px] text-[#1a202c] ">
              <span>&#8377;</span> {price}
            </h3>
          </div>

          <button
            
            className="pr-5 pl-5 bg-red-700 rounded-md text-[white] text-[16px] font-medium align-middle hover:bg-red-600"
          >
           Remove
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartProduct