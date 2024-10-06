"use client";

import { useEffect, useState } from "react";
import { getData } from "@/data/api";
import Image from "next/image";

export default function Card() {
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="max-w-sm overflow-hidden w-full bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <Image
                  className="rounded-t-lg w-full h-[200px] object-cover object-center "
                  width={500}
                  height={300} // Adjusted height for better proportion
                  src={product.image}
                  alt={product.title}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.title.length > 20
                    ? product.title.substring(0 , 15)
                    : product.title
                    
                    }
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product.description.length > 80
                    ? product.description.substring(0, 40) + "..."
                    : product.description}
                </p>
                <p className="text-lg font-semibold text-indigo-500">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
