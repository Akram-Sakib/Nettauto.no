import Image from "next/image";
import React from "react";
import Product from "./product";

const Products = () => {
  return (
    <section className="text-black">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl text-center mb-11">
          Eksempler på <span className="text-[#FF003D]">auksjoner</span>
        </h1>
        <div className="space-y-5">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  );
};

export default Products;
