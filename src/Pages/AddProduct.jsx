import React, { useEffect, useState } from "react";
import { FaUpload, FaArrowLeft, FaPlus } from "react-icons/fa";
import { supabase } from "../../supabse";
const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    // Cloudinary script load
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: "do8y0zgci", // apna cloud name
          uploadPreset: "admin panel", // apna upload preset
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Upload hua:", result.info);

            // Set image URL in state
            setProductData((prev) => ({
              ...prev,
              image: result.info.secure_url,
            }));

            // Preview ke liye bhi
            setImagePreview(result.info.secure_url);
          }
        }
      );

      document
        .getElementById("upload_widget")
        .addEventListener("click", () => myWidget.open());
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !productData.title ||
      !productData.description ||
      !productData.price ||
      !productData.image
    ) {
      alert("Please fill all fields and upload an image");
      return;
    }

    const { data, error } = await supabase.from("addproduct").insert([
      {
        title: productData.title,
        description: productData.description,
        price: productData.price,
        image: productData.image,
      },
    ]);

    if (error) {
      console.error("Insert error:", error);
      alert("Error adding product: " + error.message);
      return;
    } else {
      console.log("Product added successfully", data);
    }

    alert("Product added successfully!");

    setProductData({
      title: "",
      description: "",
      price: "",
      image: null,
    });
    setImagePreview(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans ">
      <div>
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <button
              className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
              onClick={() => window.history.back()}
            >
              <FaArrowLeft className="mr-2" /> Back
            </button>
            <h1 className="text-3xl font-bold text-gray-800">
              Add New Product
            </h1>
          </div>
          <p className="text-gray-600">
            Fill in the details below to add a new product to your catalog
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={productData.title}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Men's Casual Shirt"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={productData.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe the product features, materials, etc."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      name="price"
                      value={productData.price}
                      onChange={handleInputChange}
                      min="0"
                      step="0.01"
                      className="w-full pl-8 p-3 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Cloudinary Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Image *
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <button
                      type="button"
                      id="upload_widget"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-800 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-contain rounded-lg"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <FaUpload className="w-10 h-10 mb-3 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            SVG, PNG, JPG or GIF (MAX. 5MB)
                          </p>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                className="px-6 py-2 border border-gray-800 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <FaPlus className="mr-2" />
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
