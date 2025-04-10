import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
const DataPart = ({ handleBidAmount, liked }) => {
  const [table, setTableData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/sajjadjim/JSON-Data-Folder/refs/heads/main/items-list"
    )
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div>
      {/* <h1>Length {table.length}</h1> */}
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-left">Items</th>
              <th></th>
              <th className="text-left">Current Bid</th>
              <th className="text-left">Time Left</th>
              <th className="text-left">Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {table.map((table) => (
              <tr className="" key={table.id}>
                <td>
                  <img
                    className="md:w-15  md:h-15 rounded-xl"
                    src={table.image}
                  ></img>
                </td>
                <td>{table.title}</td>
                <td>${table.currentBidPrice}</td>
                <td>{table.timeLeft} days left</td>
                <td>
                  <button
                    onClick={() =>
                      handleBidAmount(table, table.currentBidPrice)
                    }
                    disabled={liked.includes(table.id)}
                    className={`${
                      liked.includes(table.id)
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    <FaRegHeart
                      color={liked.includes(table.id) ? "red" : "green"}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataPart;

// {
//     "id": 1,
//     "title": "Vintage Watch",
//     "description": "A classic 1960s wristwatch in excellent condition.",
//     "currentBidPrice": 150,
//     "timeLeft": "2h 30m",
//     "bidsCount": 12,
//     "image": "images/watch.jpg"
// }
