import React, { useEffect, useState } from "react";
import ListProduct from "../product-render/ListProduct";

export default function Page() {
  const [money, setMoney] = useState(100000000);

  const [productOrder, setProductOrder] = useState([]);
  const [totalPay, setTotalPay] = useState();
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Cola",
      price: 6,
      count: 0,
      image:
        "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
    },
    {
      id: 3,
      title: "Sprite",
      price: 5,
      count: 0,
      image: "https://images.ofix.com/product-image/s99509_2.jpg",
    },
    {
      id: 4,
      title: "Ayran",
      price: 3,
      count: 0,
      image:
        "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
    },
    {
      id: 5,
      title: "Salgam",
      price: 4,
      count: 0,
      image: "http://esenlik.com.tr//images/prod/5704.jpg",
    },
    {
      id: 6,
      title: "Cay",
      price: 3,
      count: 0,
      image:
        "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg",
    },
    {
      id: 7,
      title: "Kahve",
      price: 10,
      count: 0,
      image:
        "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
    },
    {
      id: 8,
      title: "Soda",
      price: 4,
      count: 0,
      image: "http://esenlik.com.tr//images/prod/2928.jpg",
    },
    {
      id: 9,
      title: "Bisiklet",
      price: 1000,
      count: 0,
      image:
        "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg",
    },

    {
      id: 11,
      title: "Bugatti Chiron",
      price: 2500000,
      count: 0,
      image:
        "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
    },
    {
      id: 12,
      title: "Iskender",
      price: 50,
      count: 0,
      image:
        "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
    },
    {
      id: 13,
      title: "Lahmacun",
      price: 12,
      count: 0,
      image:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
    },
    {
      id: 14,
      title: "Malikane",
      price: 25000,
      count: 0,
      image:
        "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
    },
    {
      id: 15,
      title: "Helicopter",
      price: 28750,
      count: 0,
      image:
        "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
    },
    {
      id: 16,
      title: "Luxury Yatch",
      price: 17500,
      count: 0,
      image: "https://d.neoldu.com/news/57966.jpg",
    },
    {
      id: 17,
      title: "Limosine",
      price: 1000,
      count: 0,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
    },
    {
      id: 18,
      title: "Ada",
      price: 125000,
      count: 0,
      image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
    },
    {
      id: 22,
      title: "Stadium",
      price: 2500,
      count: 0,
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg",
    },
    {
      id: 23,
      title: "Bitcoin",
      price: 60000,
      count: 0,
      image:
        "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg",
    },
  ]);
  const handleAddCount = (index) => {
    let newProduct = [...products];
    newProduct[index].count = newProduct[index].count + 1;
    setMoney(money - newProduct[index].count * newProduct[index].price);
    setProducts(newProduct);
    let a = newProduct.filter((item) => item.count > 0);
    setProductOrder(a);
    total();
  };

  const handleMinusCount = (index) => {
    let newProduct = [...products];
    if (newProduct[index].count < 1) {
      return;
    } else {
      setMoney(money + newProduct[index].count * newProduct[index].price);
      newProduct[index].count = newProduct[index].count - 1;
      setProductOrder([...productOrder, newProduct[index]]);
      setProducts(newProduct);
      let a = newProduct.filter((item) => item.count > 0);
      setProductOrder(a);
      total();
    }
  };
  useEffect(() => {
    total();
  });
  const total = () => {
    let totalAll = productOrder.reduce((acc, item) => {
      return item.price * item.count;
    }, 0);
    setTotalPay(totalAll);
  };
  const handlePay = () => {
    setProductOrder([]);
    setTotalPay();
  };

  return (
    <>
      <header className="fixed w-[100vw] bg-[rgba(212,17,46,0.9)] h-[100px] flex justify-center items-center">
        <h2 className="text-white">to spen {money} you have money</h2>
      </header>
      <div className="flex justify-center pt-[200px]">
        {" "}
        <ListProduct
          products={products}
          addCount={handleAddCount}
          minusCount={handleMinusCount}
        />
      </div>
      <div className="flex justify-center ">
        <div className=" flex justify-center bg-white  relative  mt-[50px] p-[70px] w-[50%]  mb-[50px]  ">
          {" "}
          <h2 className="absolute top-[10px]"> Shopping Cart</h2>
          <ul className="w-[80%] h-[400px]">
            {productOrder === []
              ? ""
              : productOrder.map((item, index) => {
                  return (
                    <li className="flex justify-between text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full">
                      <p>{item.title}</p>
                      <p>{item.count}</p>
                    </li>
                  );
                })}
          </ul>
          <div className=" w-[80%] absolute bottom-[100px] flex justify-between items-center text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0">
            <p>Total </p>
            <p>{totalPay}</p>
          </div>
          <button
            onClick={handlePay}
            className="absolute bottom-[20px] min-w-[30%] cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Pay
          </button>
        </div>
      </div>
    </>
  );
}
