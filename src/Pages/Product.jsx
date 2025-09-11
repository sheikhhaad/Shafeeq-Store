import React from "react";
import {
  FaFilter,
  FaSearch,
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaEye,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Products = () => {
  let navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div>
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Our Products
            </h1>
            <p className="text-gray-600">
              Discover our curated collection of premium products
            </p>
          </div>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => navigate("/addproducts")}
          >
            Add Products
          </button>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white">
                All Products
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
                Men's
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
                Women's
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
                Unisex
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="default">Sort by</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid (Static Mock Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Product"
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <FaHeart className="text-gray-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <FaEye className="text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-800">Product Title</h3>
                  <span className="font-bold text-blue-600">$49.99</span>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">(4.5)</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                    Category
                  </span>
                  women
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="mt-8 text-center text-gray-500">
          Showing 4 of 8 products
        </div>
      </div>
    </div>
  );
};

export default Products;
