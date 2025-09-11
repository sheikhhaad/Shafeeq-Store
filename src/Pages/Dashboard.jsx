import React, { useState, useEffect } from "react";
import { FaUsers, FaBox, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const mockUsers = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
        { id: 3, name: "Robert Johnson", email: "robert@example.com", role: "User" },
        { id: 4, name: "Sarah Williams", email: "sarah@example.com", role: "Editor" },
        { id: 5, name: "Michael Brown", email: "michael@example.com", role: "User" },
      ];

      const mockProducts = [
        { id: 1, name: "Laptop", category: "Electronics", price: 999 },
        { id: 2, name: "Smartphone", category: "Electronics", price: 699 },
        { id: 3, name: "Desk Chair", category: "Furniture", price: 199 },
        { id: 4, name: "Coffee Maker", category: "Appliances", price: 89 },
        { id: 5, name: "Headphones", category: "Electronics", price: 149 },
        { id: 6, name: "Bookshelf", category: "Furniture", price: 129 },
        { id: 7, name: "Running Shoes", category: "Sports", price: 120 },
      ];

      setUsers(mockUsers);
      setProducts(mockProducts);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600 mb-8">
          Welcome back! Here's what's happening with your store today.
        </p>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow-sm animate-pulse"
              >
                <div className="h-7 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{users.length}</p>
                    <p className="text-sm text-green-600 mt-2 flex items-center">
                      <span className="inline-block mr-1">↑</span> 12% from last month
                    </p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FaUsers className="text-blue-600 text-xl" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Total Products</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{products.length}</p>
                    <p className="text-sm text-green-600 mt-2 flex items-center">
                      <span className="inline-block mr-1">↑</span> 8% from last month
                    </p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <FaBox className="text-green-600 text-xl" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-1">$12,489</p>
                    <p className="text-sm text-green-600 mt-2 flex items-center">
                      <span className="inline-block mr-1">↑</span> 23% from last month
                    </p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FaChartLine className="text-purple-600 text-xl" />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Users</h2>
                <div className="space-y-4">
                  {users.slice(0, 4).map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-medium">
                            {user.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {user.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Products</h2>
                <div className="space-y-4">
                  {products.slice(0, 4).map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <FaBox className="text-green-600 text-sm" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{product.name}</p>
                          <p className="text-sm text-gray-500">{product.category}</p>
                        </div>
                      </div>
                      <span className="font-medium text-gray-800">${product.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
