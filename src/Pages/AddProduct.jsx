import React, { useState } from 'react';
import { FaUpload, FaArrowLeft, FaPlus } from 'react-icons/fa';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
    gender: '',
    category: ''
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductData({
        ...productData,
        image: file
      });

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Product data:', productData);
    alert('Product added successfully!');
    
    // Reset form
    setProductData({
      title: '',
      description: '',
      price: '',
      image: null,
      gender: '',
      category: ''
    });
    setImagePreview(null);
  };

  const categories = {
    Men: ['Clothing', 'Shoes', 'Accessories'],
    Women: ['Clothing', 'Shoes', 'Accessories', 'Beauty'],
    Kids: ['Clothing', 'Shoes', 'Toys']
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans ">
      <div>
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <button className="flex items-center text-blue-600 hover:text-blue-800 mr-4">
              <FaArrowLeft className="mr-2" /> Back
            </button>
            <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>
          </div>
          <p className="text-gray-600">Fill in the details below to add a new product to your catalog</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Product Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={productData.title}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Men's Casual Shirt"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                  <textarea
                    name="description"
                    value={productData.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe the product features, materials, etc."
                    required
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price *</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                    <input
                      type="number"
                      name="price"
                      value={productData.price}
                      onChange={handleInputChange}
                      min="0"
                      step="0.01"
                      className="w-full pl-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Image *</label>
                  <div className="flex items-center justify-center w-full">
                    <label className={`flex flex-col items-center justify-center w-full h-64 border-2 ${imagePreview ? 'border-gray-300' : 'border-dashed border-gray-300'} rounded-lg cursor-pointer hover:bg-gray-50`}>
                      {imagePreview ? (
                        <div className="relative w-full h-full">
                          <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="w-full h-full object-contain rounded-lg"
                          />
                          <div className="absolute bottom-3 right-3">
                            <label className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50">
                              <FaUpload className="mr-2 text-gray-600" />
                              Change Image
                              <input
                                type="file"
                                name="image"
                                onChange={handleImageChange}
                                className="hidden"
                                accept="image/*"
                                required
                              />
                            </label>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <FaUpload className="w-10 h-10 mb-3 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500">Click to upload or drag and drop</p>
                          <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 5MB)</p>
                          <input
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            className="hidden"
                            accept="image/*"
                            required
                          />
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Gender and Category */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                    <select
                      name="gender"
                      value={productData.gender}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Men">Men</option>
                      <option value="Women">Women</option>
                      <option value="Kids">Kids</option>
                      <option value="Unisex">Unisex</option>
                    </select>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                    <select
                      name="category"
                      value={productData.category}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      disabled={!productData.gender}
                    >
                      <option value="">Select Category</option>
                      {productData.gender && categories[productData.gender]?.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Additional Options</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">Feature this product</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">Publish immediately</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
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

        {/* Tips */}
        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-800 mb-2">Tips for adding products:</h3>
          <ul className="text-sm text-blue-700 list-disc pl-5 space-y-1">
            <li>Use high-quality images with a plain background</li>
            <li>Write detailed and accurate descriptions</li>
            <li>Set competitive prices based on market research</li>
            <li>Select the appropriate gender and category for better discoverability</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;