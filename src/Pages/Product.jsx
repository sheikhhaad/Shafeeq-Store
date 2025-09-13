import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabse";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const navigate = useNavigate();
  const [Product, setProduct] = useState([]);
  const [Search, setSearch] = useState("");

  useEffect(() => {
    const fetchproduct = async () => {
      const { data, error } = await supabase.from("addproduct").select("*");
      if (error) {
        console.log("error", error);
      } else {
        setProduct(data);
      }
    };
    fetchproduct();
  }, []);

  const searchproduct = Product.filter((itm) =>
    itm.title.toLowerCase().includes(Search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Our Products
          </h1>
          <p className="text-gray-600">
            Discover our curated collection of premium products
          </p>
        </div>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => navigate("/addproducts")}
        >
          + Add Product
        </button>
      </div>

      {/* Search */}
      <div className="mb-6 flex items-center justify-between">
        <div className="relative w-full sm:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-blue-500 transition"
          />
        </div>
      </div>

      {/* Product Grid */}
      {searchproduct.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div >
          {searchproduct.map((itm) => (
            <div key={itm.id} className="rounded-lg">
              <ProductCard
                title={itm.title}
                image={itm.image}
                price={itm.price}
                description={itm.description}
                status={itm.status}
                indx={itm.id}
                onDelete={(id) =>
                  setProduct((prev) => prev.filter((p) => p.id !== id))
                }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
