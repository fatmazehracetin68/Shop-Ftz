import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img className="w-[150px] h-[150px] object-cover" src={cart?.image} alt="" />
      <div>
        <div className="text-xl font-bold">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div>
        {cart?.price} TL ({cart?.quantity})
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white w-[130px] text-xl h-10 rounded-md mt-5 flex items-center justify-center"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
