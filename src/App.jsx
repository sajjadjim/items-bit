import "./App.css";
import DataPart from "./Data section/DataPart";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import { useRef, useState } from "react";
import ItemsList from "./Favourite Items List/ItemsList";
import Footer from "./Footer/Footer";

function App() {
  const [bidItems, setBidItems] = useState([]);
  const [liked, setLiked] = useState([]);
  const [bidAmount, setBidAmount] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [toastKey, setToastKey] = useState(0);
  const messageTimeout = useRef(null);

  const handleBidItemDetails = (item) => {
    if (!liked.includes(item.id)) {
      setBidItems([...bidItems, item]);
      setLiked([...liked, item.id]);
      showToast("Item is added on the bid !!!");
    }
  };

  const handleRemoveBidItems = (id) => {
    const newBidItems = bidItems.filter((item) => item.id !== id);
    setBidItems(newBidItems);
    const newBidAfterLiked = liked.filter((item) => item !== id);
    setLiked(newBidAfterLiked);
    const newBidAmount = bidAmount - bidItems.find((item) => item.id === id).currentBidPrice;
    setBidAmount(newBidAmount);
    showToast("Item removed from the bid !!!");
  };

  const handleBidAmount = (item, currentBidPrice) => {
    const newBidAmount = bidAmount + currentBidPrice;
    setBidAmount(newBidAmount);
    handleBidItemDetails(item);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setToastKey((prev) => prev + 1);
    if (messageTimeout.current) {
      clearTimeout(messageTimeout.current);
    }
    messageTimeout.current = setTimeout(() => setToastMessage(""), 2000);
  };
  return (
    <>
      <Navbar liked={liked}></Navbar>
      <Hero></Hero>
      <div className="main-container  md:pt-30  md:pb-10 pb-5 pt-5 bg-[#EBF0F5]">
        <div className="grid gap-2 md:ml-15 mb-3 md:justify-start justify-center md:text-left text-center">
          <h1 className="text-2xl font-semibold">Active Auctions</h1>
          <p>Discover and bid on extraordinary items</p>
        </div>
        <div className="md:flex">
          <div className="md:w-[70%] md:ml-15 bg-white p-5 rounded-4xl">
            <div className="relative">
              {/* Toast Message */}
              {toastMessage && (
                <div
                  key={toastKey}
                  className="fixed top-4 right-4 bg-white text-green-700  rounded shadow px-4 py-2 z-50 w-fit animate-fade"
                >
                  {toastMessage}
                  <div className="h-1 bg-linear-to-r/longer from-indigo-500 to-teal-400 mt-1 overflow-hidden rounded">
                    <div className="h-full bg-linear-to-r/longer from-indigo-500 to-teal-400 animate-slide"></div>
                  </div>
                </div>
              )}

              <style>
                {`
          @keyframes slide {
            from { width: 100%; }
            to { width: 0%; }
          }

          .animate-slide {
            animation: slide 2s linear forwards;
          }
        `}
              </style>
              <DataPart
                handleBidItemDetails={handleBidItemDetails}
                handleBidAmount={handleBidAmount}
                liked={liked}
              ></DataPart>
            </div>
          </div>
          <div className="md:w-[30%] md:mb-0 mb-5">
            <div className="relative">
              {/* Toast Message */}
              {toastMessage && (
                <div
                  key={toastKey}
                  className="fixed top-4 right-4 bg-white text-red-500  rounded shadow px-4 py-2 z-50 w-fit animate-fade"
                >
                  {toastMessage}
                  <div className="h-1  mt-1 overflow-hidden rounded">
                    <div className="h-full bg-linear-65 from-purple-500 to-pink-500 animate-slide"></div>
                  </div>
                </div>
              )}

              <style>
                {`
                    @keyframes slide {
                      from { width: 100%; }
                      to { width: 0%; }
                    }
          
                    .animate-slide {
                      animation: slide 2s linear forwards;
                    }
                  `}
              </style>
              {
                <div className="text-center m-5 bg-white rounded-xl">
                  <h1 className="border-b-[1px] border-[#DCE5F3] pt-10 text-[25px]">
                    ❤️Favorite Items
                  </h1>

                  {bidItems.length === 0 ? (
                    <div className="py-[40px] grid gap-5">
                      <h1 className="font-bold text-2xl">No favorites yet</h1>
                      <p className="opacity-50">
                        Click the heart icon on any item <br></br> to add it to
                        your favorites
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
                  <div className="border-t-[1px] border-[#DCE5F3] text-[20px] p-5 flex justify-between">
                    <p>Total bids Amount</p>{" "}
                    <p className="font-semibold">${bidAmount}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
