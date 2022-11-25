import React, { useState } from "react";
import Formulir from "../atoms/form";
import Tabel from "../atoms/table";

const Product = () => {
  return (
    <div className=" mt-2 p-5">
      <div>
        <h3>Daftar Produk</h3>
        <div className="mt-3">
          <Tabel />
        </div>
      </div>
      <div className="mt-5 w-50 mx-auto">
        <h4 className="text-center mb-3 ">Tambah Produk Baru</h4>
        <Formulir />
      </div>
    </div>
  );
};

export default Product;
