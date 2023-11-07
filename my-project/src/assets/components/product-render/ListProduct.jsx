import React, { useEffect, useState } from "react";

export default function ListProduct(props) {
  const [count, setCount] = useState();
  const handleInterst = () => {};

  return (
    <>
      <div className="grid grid-cols-4 gap-4  w-[90vw]" key={1}>
        {props.products.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow "
              >
                <a href="#" className="flex justify-center">
                  <img
                    className="p-8 rounded-t-lg h-[200px]"
                    src={item.image}
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <div className="flex justify-between">
                    <h5 className=" text-xl font-semibold tracking-tight text-gray-900">
                      {item.title}
                    </h5>
                    <span className="text-3xl font-bold text-gray-900">
                      {item.price}
                    </span>
                  </div>
                  <hr />
                  <div className="flex items-center mt-2.5 mb-5"></div>
                  <div className="flex items-center justify-between ">
                    <div
                      onClick={() => {
                        props.minusCount(index);
                      }}
                      className=" min-w-[30%] cursor-pointer bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-centers border-solid border-2 border-[rgba(0,0,0,0.4]  text-[rgba(0,0,0,0.4)] "
                    >
                      Interest
                    </div>
                    <span> {item.count}</span>
                    <div
                      onClick={() => {
                        props.addCount(index);
                      }}
                      className="min-w-[30%] cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
