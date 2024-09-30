"use client";

import { useEffect, useState } from "react";
import { getData } from "@/data/api";
import Image from "next/image";

export default function Home() {
  // Initialize products state to an empty array
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data asynchronously
    async function fetchProducts() {
      const data = await getData(); // Await the data if getData is asynchronous
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <h1 className="text-3xl font-bold text-center mb-12 bg-black text-white p-4 rounded-lg">
        Welcome to API
      </h1>

      {products.length === 0 ? (
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-indigo-500 text-white py-2 px-4 rounded-md flex items-center"
            disabled
          >
            <svg
              className="animate-spin h-5 w-5 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 2v6m0 8v6M2 12h6m8 0h6M4.93 4.93l4.24 4.24M15.75 15.75l4.24 4.24M15.75 4.93l-4.24 4.24M4.93 15.75l4.24 4.24" />
            </svg>
            Processing...
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  width={250}
                  height={250} // Adjusted height for better proportion
                  src={product.image}
                  alt={product.title}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product.description.length > 100
                    ? product.description.substring(0, 100) + "..."
                    : product.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
