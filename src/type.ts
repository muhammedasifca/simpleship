export type items = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    count: number;
    rate: 3.9;
  };
  category: string;
};


export type searchProps={
    handleChange:(e:React.ChangeEvent)=>void
    value:string
    handleClick: () => void;
    cartItems:CartProps[]
    
}

export type clickProps={
  isCart:boolean
  cartItems:CartProps[]|undefined
}

export type ProductProps = {
  img: string;
  name: string;
  price: number;
  set:React.Dispatch<React.SetStateAction<CartProps[]>>
  cart:any
};

export type CartProps={
  img: string;
  name: string;
  price: number;
}