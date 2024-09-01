import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) {
      setQuantity(quantity + 1);
    }
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
      })
    );
  };
  return (
    <div className="flex gap-10">
      <img className="w-[400px] h-[400px] object-cover mb-8" src={productDetail?.image}></img>
      <div className="">
        <div className="text-3xl font-bold">{productDetail?.title}</div>
        <div className="my-2">{productDetail?.description}</div>
        <div className="my-2 text-lg text-red-500  ">Rating: {productDetail?.rating?.rate}</div>
        <div className="my-2 text-lg text-red-500">Count: {productDetail?.rating?.count}</div>
        <div className="my-2 text-3xl text-red-500">{productDetail?.price} TL</div>
        <div className="flex items-center gap-5 my-4">
          <div onClick={decrement} className="text-5xl cursor-pointer">
            -
          </div>
          <input className="text-center w-20 text-4xl" type="text" value={quantity} />
          <div onClick={increment} className="text-3xl cursor-pointer">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border w-[200px] text-2xl h-16 flex items-center justify-center mt-5 "
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
