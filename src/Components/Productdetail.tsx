import React from "react";
import { useParams } from "react-router-dom";

export const Productdetail: React.FC<{ products: any[] }> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-500">{product.brand}</p>
      <img src={product.image} alt={product.name} className="my-4 rounded-xl" />
      <p className="text-lg">Price: Rs. {product.price}</p>
      <p className="mt-4">Detailed description of the product goes here.</p>
    </div>
  );
};
