import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { useEffect, useRef, useState } from "react";
import { CartProps, items } from "./type";
import ShowCart from "./components/ShowCart";

function App() {
  const [productData, setProductData] = useState<items[]>();
  const [searchName, setSearchName] = useState("");
  const [filteredItem, setFilteredItem] = useState<items[]>();
  const [isCart, setIsCart] = useState(false);
  const [cartItem, setCartItem] = useState<CartProps[]>([]);
  const [unique, setUnique] = useState<CartProps[]>();
  const divRef = useRef<HTMLDivElement | null>(null);
  console.log("hi", unique);

  console.log(cartItem);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        setFilteredItem(data);
      })

      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        divRef.current &&
        !divRef.current.contains(event.target as HTMLInputElement)
      ) {
        setIsCart(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    const filtered = productData?.filter((item) =>
      item.title.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilteredItem(filtered);
  }, [searchName]);

  const searchProduct = (event: React.ChangeEvent) => {
    const eventTarget = event.target as HTMLInputElement;
    setSearchName(eventTarget.value);
  };

  const showCart = () => {
    setIsCart(!isCart);
  };
  const mapFrom = new Map(cartItem.map((item) => [item.name, item]));
  const uniqueCart = [...mapFrom.values()];
  useEffect(() => {
    setUnique(uniqueCart);
  }, [cartItem]);

  return (
    <>
      <div className="relative ">
        <Navbar
          handleChange={searchProduct}
          value={searchName}
          handleClick={showCart}
          cartItems={uniqueCart}
        ></Navbar>
        <div className="w-[80%] mx-auto mt-32">
          <div className="mt-10 flex flex-wrap justify-between">
            {productData && filteredItem ? (
              filteredItem.map((item: items) => (
                <div
                  className="flex justify-center hover:scale-105 cursor-pointer"
                  key={item.id}
                >
                  <Product
                    cart={cartItem}
                    set={setCartItem}
                    img={item.image}
                    price={item.price}
                    name={item.title}
                  ></Product>
                </div>
              ))
            ) : (
              <div className="text-center min-h-[1200px] w-full text-3xl text-gray-600 ">
                Loading.....
              </div>
            )}
          </div>
        </div>
        <ShowCart
          reff={divRef}
          isCart={isCart}
          mainCart={unique}
          cartItems={cartItem}
          setCartItems={setCartItem}
        ></ShowCart>
      </div>
    </>
  );
}

export default App;
