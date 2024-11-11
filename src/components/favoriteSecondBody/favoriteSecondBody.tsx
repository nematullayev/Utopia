import { FC, useEffect, useState } from "react";

import heart from "../../assets/svg/heard.svg";
import heartRed from "../../assets/svg/red-heard.svg";
import Divan1 from "../../assets/svg/divan1.svg";
import Divan2 from "../../assets/svg/divan2.svg";
import Divan3 from "../../assets/svg/divan3.svg";
import Divan4 from "../../assets/svg/divan4.svg";
import { Link } from "react-router-dom";
import HeartNoo from "../../assets/img/heart-no.png";

interface Product {
  id: string;
  title: string;
  image: string;
  favorite: boolean;
  money: string;
  description: string;
}

const FavoriteSecondBody: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const renderingFavorites = () => {
    fetch("https://66cc9ebfa4dd3c8a71b84178.mockapi.io/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  };
  useEffect(() => {
    renderingFavorites();
  }, []);

  const handleChangeFavorite = (id, favorite) => {
    fetch(`https://66cc9ebfa4dd3c8a71b84178.mockapi.io/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorite: favorite }),
    })
      .then((res) => res.json())
      .then((data) => {
        renderingFavorites();
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  };
  const favoriteProducts = products.filter((product) => product.favorite);

  if (loading) {
    return (
      <div
        className="flex justify-center items-center mt-[100px]"
        role="status"
      >
        <svg
          aria-hidden="true"
          className="w-[100px] h-[100px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex gap-[30px] flex-wrap justify-center">
      {favoriteProducts.length > 0 ? (
        favoriteProducts.map((product) => {
          return (
            <div key={product.id} className="w-[325px] flex flex-col">
              <Link to={`/${product.id}`}>
                <img
                  className="w-full h-[231px] rounded-t-xl"
                  src={product.image}
                  alt=""
                />
              </Link>
              <div className="bg-white p-[20px] flex flex-col gap-[24px]">
                <h2 className="text-2xl">{product.title}</h2>
                <div className="flex justify-between items-center">
                  <div className="flex gap-[7px] items-center">
                    <p className="text-[#73a11b] text-2xl">$</p>
                    <p className="text-[#73a11b] text-2xl">{product.money}</p>
                  </div>
                  <button
                    onClick={() => {
                      handleChangeFavorite(product.id, !product.favorite);
                    }}
                  >
                    <img
                      className="w-[29px]"
                      src={product.favorite ? heartRed : heart}
                      alt="heart"
                    />
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-[7px]">
                      <img src={Divan1} alt="" />
                      <p className="text-[#999999]">20</p>
                    </div>
                    <div className="flex items-center gap-[7px]">
                      <img src={Divan2} alt="" />
                      <p className="text-[#999999]">60 m²</p>
                    </div>
                    <div className="flex items-center gap-[7px]">
                      <img src={Divan3} alt="" />
                      <p className="text-[#999999]">10</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[7px]">
                    <img src={Divan4} alt="" />
                    <p className="text-[#999999]">{product.money}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-black">г.Ташкент, Чиланзарский р-н</p>
                  <p className="text-[#999999]">{product.description}</p>
                </div>
              </div>
              <div className="h-[10px] bg-[#fca311] rounded-b-xl"></div>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img className="w-[350px]" src={HeartNoo} alt="Heard-no" />
          <h2 className="text-2xl">Sizga yoqqanini qoʻshing</h2>
          <p className="w-[400px] text-center mt-[20px]">
            Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha
            saralanganlar saqlanib qoladi
          </p>
        </div>
      )}
    </div>
  );
};

export default FavoriteSecondBody;
