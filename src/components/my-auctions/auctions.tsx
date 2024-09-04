"use client";

import Auction from "./auction";


const Auctions = ({ data }: { data: any }) => {



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {data?.map((data: any, index: number) => (
        <Auction key={data.id} {...data} />
      ))}
    </div>
  );
};

export default Auctions;
