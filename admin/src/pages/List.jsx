import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App";   

const List = () => {
  const [products, setProducts] = useState([]);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(backendUrl + "api/product/list");
      if (res.data.success) {
        setProducts(res.data.product);
      } else {
        toast.error("Failed to load products");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Delete a product
  const removeProduct = async (id) => {
    try {
      const res = await axios.post(backendUrl + "api/product/remove", { id });

      if (res.data.success) {
        toast.success("🗑️ Product removed successfully");
        fetchProducts();
      } else {
        toast.error("Unable to remove product");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-white">

      {/* Header Row for Large Screens */}
      <div className="hidden sm:grid grid-cols-[1fr_2fr_1fr_1fr_1fr] bg-gray-100 border p-3 font-semibold rounded">
        <p>Image</p>
        <p>Name</p>
        <p>Price</p>
        <p>Category</p>
        <p className="text-center">Delete</p>
      </div>

      {/* Product List */}
      <div className="flex flex-col gap-4 mt-4">
        {products.length > 0 ? (
          products.map((item, index) => (
            <div
              key={index}
              className="border rounded p-4 bg-gray-50 flex flex-col sm:grid 
                         sm:grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center 
                         gap-3 hover:shadow transition"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded sm:w-20 sm:h-20 mx-auto"
              />

              {/* Name */}
              <p className="font-semibold sm:text-left text-center">{item.name}</p>

              {/* Price */}
              <p className="text-green-700 font-bold text-center sm:text-left">
                ₹{item.price}
              </p>

              {/* Category */}
              <p className="text-gray-700 text-center sm:text-left">
                {item.category}
              </p>

              {/* Delete Button */}
              <p
                onClick={() => removeProduct(item._id)}
                className="text-red-500 cursor-pointer font-bold text-xl text-center hover:text-red-700"
              >
                ✖
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-6">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default List;
