import React from "react";
const Table = ({table}) => {
  return (
    <div>
      {
        <div>
          {/* row  */}
          <tr className="md:flex md:justify-center md:gap-50">
            <td className="text-left">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={table.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{table.title}</div>
                </div>
              </div>
            </td>
            <td className="text-left">
              ${table.currentBidPrice}
            </td>
            <td>{table.timeLeft} left</td>
            <th>
              Data Part
            </th>
          </tr>
          <hr></hr>
        </div>
      }
    </div>
  );
};

export default Table;



