import { FC, useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { toast } from "react-toastify";

const Add: FC = () => {
  const [money, setMoney] = useState<string>("");
  const [name, setName] = useState<string>("");

  const rendering = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    fetch(`https://66cc9ebfa4dd3c8a71b84178.mockapi.io/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ money: money, title: name }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Mahsulot muvafaqiyatli qoshildi !!!");
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
  return (
    <div className=" relative">
      <Header />
      <div className="flex flex-col gap-[50px] pt-[200px] w-[1200px] mx-auto justify-center items-center">
        <h2 className="text-4xl">Разместить объявление</h2>
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <div className="py-[44px] px-[54px] bg-white text-center rounded-t-xl">
              <h2 className="text-2xl text-[#fca311]">Продажа</h2>
              <p className="text-[#999] text-sm w-[160px]">
                Разместить объявление о продаже
              </p>
            </div>
            <div className="bg-[#eeeeee] h-[115px] py-[25px] px-[50px] w-[250px] text-center ">
              <p className="text-[#999] text-2xl">Аренда</p>
              <p className="text-[#999] text-sm">
                Разместить объявление об аренде
              </p>
            </div>
            <div className="bg-[#eeeeee] h-[115px] py-[25px] px-[40px] w-[250px] text-center ">
              <p className="text-[#999] text-2xl">Сожительство</p>
              <p className="text-[#999] w-full text-sm">
                Разместить объявление о сожительстве
              </p>
            </div>
          </div>
          <div className=" w-[1200px] bg-white py-[70px] px-[150px] rounded-3xl">
            <form
              onSubmit={(evt) => {
                rendering(evt);
              }}
              className=" flex gap-[150px]"
              action=""
            >
              <div className="flex flex-col gap-[40px]">
                <select
                  required
                  className="bg-[#f3f3f3] p-[15px] rounded-xl px-[20px] w-[330px] text-[#aaaaaa]"
                >
                  <option value="Категория недвижимости">
                    Категория недвижимости
                  </option>
                </select>
                <select
                  required
                  className="bg-[#f3f3f3] p-[15px] rounded-xl px-[20px] w-[330px] text-[#aaaaaa]"
                >
                  <option value="Область">Область</option>
                </select>
                <select
                  required
                  className="bg-[#f3f3f3] p-[15px] rounded-xl px-[20px] w-[330px] text-[#aaaaaa]"
                >
                  <option value="Район">Район</option>
                </select>
                <select
                  required
                  className="bg-[#f3f3f3] p-[15px] rounded-xl px-[20px] w-[330px] text-[#aaaaaa]"
                >
                  <option value="Ремонт">Ремонт</option>
                </select>
                <select
                  required
                  className="bg-[#f3f3f3] p-[15px] rounded-xl px-[20px] w-[330px] text-[#aaaaaa]"
                >
                  <option value="Количество комнат">Количество комнат</option>
                </select>
                <select
                  required
                  className="bg-[#f3f3f3] p-[15px] rounded-xl px-[20px] w-[330px] text-[#aaaaaa]"
                >
                  <option value="Площадь">Площадь</option>
                </select>
                <select
                  required
                  className="bg-[#f3f3f3] p-[15px] rounded-xl px-[20px] w-[330px] text-[#aaaaaa]"
                >
                  <option value="Рядом">Рядом</option>
                </select>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#999]">Комиссионные </p>
                  <div className="flex gap-[20px] items-center">
                    <div className="flex gap-[10px] items-center">
                      <input required className="w-[24px]" type="checkbox" />
                      <p>Есть</p>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <input className="w-[24px]" type="checkbox" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#999]">Цена </p>
                  <input
                    value={money}
                    onChange={(e) => {
                      setMoney(e.target.value);
                    }}
                    required
                    className="bg-[#f3f3f3] py-[10px] rounded-xl px-[20px] w-[330px] text-[#444]"
                    type="number"
                    placeholder="Цена"
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#999]">Имя продакта </p>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                    className="bg-[#f3f3f3] py-[10px] rounded-xl px-[20px] w-[330px] text-[#444]"
                    type="text"
                    placeholder="Имя продакта"
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#999]">Обмен </p>
                  <div className="flex gap-[20px] items-center">
                    <div className="flex gap-[10px] items-center">
                      <input required className="w-[24px]" type="checkbox" />
                      <p>Есть</p>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <input className="w-[24px]" type="checkbox" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#999]">Рассрочка </p>
                  <div className="flex gap-[20px] items-center">
                    <div className="flex gap-[10px] items-center">
                      <input className="w-[24px]" type="checkbox" />
                      <p>Есть</p>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <input required className="w-[24px]" type="checkbox" />
                      <p>Нет</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#999]">Предоплата </p>
                  <input
                    required
                    className="bg-[#f3f3f3] py-[10px] rounded-xl px-[20px] w-[330px] text-[#444]"
                    type="number"
                    placeholder="Предоплата "
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#999]">Скидка </p>
                  <input
                    required
                    className="bg-[#f3f3f3] py-[10px] rounded-xl px-[20px] w-[330px] text-[#444]"
                    type="number"
                    placeholder="0% - 100% "
                  />
                </div>
                <button className="bg-[#fca311] text-black py-[10px] px-[19px] rounded-sm">
                  Опубликовать
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Add;
