import React from "react";

const ItemsList = ({ item, handleRemoveBidItems }) => {
  return (
    <div className="mt-[45px] mb-[45px] flex gap-20 mx-5 border-b-[1px] border-[#DCE5F3] pb-2">
      <div className=" h-22 w-22 border-[1px] border-[#DCE5F3]">
        <img src={item.image} alt="Avatar Tailwind CSS Component" />
      </div>
      <div className=" text-left">
        <p className="text-[18px]">{item.title}</p>
        <div className="flex gap-3 mt-3">
          <p className="text-[16px]">${item.currentBidPrice}</p>
          <p>BidsCount : {item.bidsCount}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleRemoveBidItems(item.id)}
          className="cursor-pointer font-extrabold text-shadow-amber-950 hover:text-red-500 border-[1px] rounded-full px-2 py-1 "
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ItemsList;
