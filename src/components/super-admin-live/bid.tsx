import React from "react";

const Bid = () => {
  return (
    <div className="bg-white rounded-lg px-10 py-5 flex justify-between items-center">
      <div className="flex flex-col justify-between">
        <h4 className="text-lg font-medium">
          Aktiv Bilformidling AS -{" "}
          <span className="text-primaryred">Autobud</span>
        </h4>
        <p>04.08.24 - 17:12:53</p>
      </div>
      <h4 className="text-primaryred text-2xl font-bold">750 000 kr</h4>
    </div>
  );
};

export default Bid;
