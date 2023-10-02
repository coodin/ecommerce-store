"use client";

import { Product } from "@/types";
import Image from "next/image";

type ProductCartProps = {
  data: Product;
};

const ProductCart: React.FC<ProductCartProps> = ({ data }) => {
  return (
    <div className="bg-white group cursor-pointer  rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image fill src={data.images[0].url} alt="image" />
      </div>
    </div>
  );
};

export default ProductCart;
