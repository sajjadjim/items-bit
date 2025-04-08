import "./App.css";
import DataPart from "./Data section/DataPart";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import ItemsList from "./Favourite Items List/ItemsList";
function App() {
  const [bidItems, setBidItems] = useState([]);
  const [liked, setLiked] = useState([]);
  const handleBidItemDetails = (item) => {
    if (!liked.includes(item.id)) {
      setBidItems([...bidItems, item]);
      setLiked([...liked, item.id]);
    }
  };

  const handleRemoveBidItems = (id) => {
    const newBidItems = bidItems.filter((item) => item.id !== id);
    setBidItems(newBidItems);
    const newBidAfterLiked = liked.filter((item) => item !== id);
    setLiked(newBidAfterLiked);
  };

  const [bidAmount, setBidAmount] = useState(0);
  const handleBidAmount = (item, currentBidPrice) => {
    const newBidAmount = bidAmount + currentBidPrice;
    setBidAmount(newBidAmount);
    handleBidItemDetails(item);
    totalNumberOfItems(item)
  };

  const [totalItems , setTotalItems] = useState([])
  const totalNumberOfItems = (totalItem) =>{
setTotalItems([...totalItems ,totalItem])
  }
  return (
    <>
      <Navbar
      totalItems={totalItems}
      ></Navbar>
      <Hero></Hero>
      <div className="main-container md:flex md:pt-30  md:pb-10 bg-[#EBF0F5]">
        <div className="md:w-[70%] md:ml-15 bg-white p-5 rounded-4xl">
          <DataPart
            handleBidItemDetails={handleBidItemDetails}
            handleBidAmount={handleBidAmount}
            liked={liked}
          ></DataPart>
        </div>
        <div className="md:w-[30%]">
          {
            <div className="text-center m-5 bg-white rounded-xl">
              <h1 className="border-b-[1px] border-[#DCE5F3] pt-10 text-[25px]">
                Favorite Items
              </h1>

              {bidItems.length === 0 ? (
                <div className="py-[40px] grid gap-5">
                  <h1 className="font-bold text-2xl">No favorites yet</h1>
                  <p className="opacity-50">
                    Click the heart icon on any item <br></br> to add it to your
                    favorites
                  </p>
                </div>
              ) : (
                bidItems.map((item) => (
                  <ItemsList
                    key={item.id}
                    item={item}
                    handleRemoveBidItems={handleRemoveBidItems}
                    liked={liked}
                  ></ItemsList>
                ))
              )}
              <h1 className="border-t-[1px] border-[#DCE5F3] text-[20px] p-5 font-semibold">
                Total bids Amount :${bidAmount}
              </h1>
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default App;
