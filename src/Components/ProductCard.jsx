import React from "react";
import { FaEdit, FaTrash, FaPowerOff } from "react-icons/fa";
import { supabase } from "../../supabse.js";

const ProductCard = ({
  image,
  title,
  description,
  status,
  price,
  indx,
  onDelete,
}) => {
  // Delete function
  let deleteProduct = async (indx) => {
    try {
      const { error } = await supabase
        .from("addproduct")
        .delete()
        .eq("id", indx);

      if (error) {
        console.error("Error deleting product:", error.message);
      } else {
        console.log("Product deleted successfully");
        if (onDelete) onDelete(indx);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow duration-300">
      {/* Left Section: Image and Info */}
      <div className="flex items-start gap-4 w-full md:w-auto">
        <img src={image} alt={title} className="w-20 h-20 rounded-md " />
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {title}
          </h2>
          <p className="text-sm text-gray-600 truncate-2-lines mb-2">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {/* Price */}
            <p className="text-md font-bold text-blue-600">${price}</p>

            {/* Status */}
            {status === "active" ? (
              <span className="px-3 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full">
                Active
              </span>
            ) : (
              <span className="px-3 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-full">
                Inactive
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center justify-end md:justify-start gap-2 md:gap-3 mt-4 md:mt-0 w-full md:w-auto">
        <button className="flex items-center gap-1 text-sm md:text-base text-orange-600 hover:text-orange-700 p-2 rounded hover:bg-orange-50 transition-colors">
          <FaPowerOff className="flex-shrink-0" />
          <span className="hidden sm:inline">Deactivate</span>
        </button>
        <button className="flex items-center gap-1 text-sm md:text-base text-blue-600 hover:text-blue-700 p-2 rounded hover:bg-blue-50 transition-colors">
          <FaEdit className="flex-shrink-0" />
          <span className="hidden sm:inline">Edit</span>
        </button>
        <button
          className="flex items-center gap-1 text-sm md:text-base text-red-600 hover:text-red-700 p-2 rounded hover:bg-red-50 transition-colors"
          onClick={() => deleteProduct(Number(indx))}
        >
          <FaTrash className="flex-shrink-0" />
          <span className="hidden sm:inline">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
