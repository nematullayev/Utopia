import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import Olov from "../assets/svg/olov.svg";
import Share from "../assets/img/Share.png";
import heart from "../assets/svg/heard.svg";

import { FaArrowLeftLong } from "react-icons/fa6";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LiaTelegramPlane } from "react-icons/lia";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

interface Product {
  id: string;
  title: string;
  image: string;
  favorite: boolean;
  money: string;
  description: string;
}

const OnePruduct: FC = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`https://66cc9ebfa4dd3c8a71b84178.mockapi.io/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [id]);
  return (
    <div className=" relative">
      <Header />
      <Navbar />
      <div className="w-full absolute top-[170px]   flex flex-col gap-[100px]">
        <div className="flex items-center gap-[100px] px-[90px]  mb-[50px]">
          <p>pplkjnnlnnlnnbbkbkkdjjjjjjjjj</p>
          <div className="flex flex-col gap-[35px]">
            <Link to="/">
              <button className="flex gap-[20px] items-center">
                <FaArrowLeftLong color="#999" />
                <p className="text-[#999]">Вернуться</p>
              </button>
            </Link>
            <div className="flex gap-[30px] ">
              <div className="flex flex-col gap-[30px] w-[550px]">
                <img className=" rounded-2xl" src={products.image} alt="" />
                <div className="w-full ml-[1px]">
                  <Swiper
                    spaceBetween={2}
                    slidesPerView={3}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide className="pl-[21px]">
                      <img
                        className=" w-[140px] rounded-2xl"
                        src={products.image}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide className="pl-[21px]">
                      <img
                        className=" w-[140px] rounded-2xl"
                        src={products.image}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide className="pl-[21px]">
                      <img
                        className=" w-[140px] rounded-2xl"
                        src={products.image}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide className="pl-[21px]">
                      <img
                        className=" w-[140px] rounded-2xl"
                        src={products.image}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide className="pl-[21px]">
                      <img
                        className=" w-[140px] rounded-2xl"
                        src={products.image}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide className="pl-[21px]">
                      <img
                        className=" w-[140px] rounded-2xl"
                        src={products.image}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide className="pl-[21px]">
                      <img
                        className=" w-[140px] rounded-2xl"
                        src={products.image}
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="flex flex-col gap-[15px] items-end">
                  <div className="flex gap-[22px] items-center">
                    <p className="text-[#55575a]">+998 99 555 60-70</p>
                    <button className="bg-[#fca311] text-black py-[10px] px-[30px] rounded-sm rounded-xl">
                      Показать номер
                    </button>
                  </div>
                  <div className="flex gap-[22px] items-center">
                    <p className="text-[#55575a] w-[230px] text-end">
                      г.Ташкент, Чиланзарский р-н ул.Улица, Дом 65
                    </p>
                    <button className="bg-[#fca311] text-black py-[10px] px-[30px] rounded-sm rounded-xl">
                      Посмотреть на карте
                    </button>
                  </div>
                </div>
                <div className="w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5085.5611582596985!2d69.19973150643499!3d41.28418738196768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1731163178539!5m2!1sru!2s"
                    width="550"
                    height="450"
                    allowFullScreen={true}
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="w-[470px] bg-white rounded-2xl p-[30px] flex flex-col gap-[25px]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[10px]">
                    <img className="w-[29px]" src={Olov} alt="OLOV" />
                    <h2 className="text-2xl">{products.title}</h2>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <img src={Share} alt="Share" />
                    <img className="w-[29px]" src={heart} alt="Heart" />
                  </div>
                </div>
                <div className="flex items-start gap-[10px]">
                  <h2 className="text-5xl text-[#89b03f]">
                    $ {products.money}
                  </h2>
                  <div className="bg-red-500  px-[12px] py-[3px] text-white rounded-s rounded-e">
                    1%
                  </div>
                </div>
                <div className="flex justify-between">
                  <button className="flex flex-col  p-[10px] bg-[#f6f6f6] text-[#999] rounded-xl">
                    <p>Стоимость м2 </p>
                    <p className="text-[#444]">$ 18,950</p>
                  </button>
                  <button className="flex flex-col  p-[10px] bg-[#f6f6f6] text-[#999] rounded-xl">
                    <p> Предоплата </p>
                    <p className="text-[#444]">85%</p>
                  </button>
                  <button className="flex flex-col  p-[10px] bg-[#f6f6f6] text-[#999] rounded-xl">
                    <p> Рассрочка</p>
                    <p className="text-[#444]">Есть</p>
                  </button>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]">Месячный платеж</p>
                    <p className="text-[#6a6d6f] w-[200px]">1%</p>
                  </div>
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]">Скидка</p>
                    <p className="text-[#6a6d6f] w-[200px]">1%</p>
                  </div>
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]">Акция</p>
                    <p className="text-[#6a6d6f] w-[200px]">
                      Описание акции, здесь будет подробная информация об акции
                    </p>
                  </div>
                  <div className="flex gap-[50px] mb-[50px]">
                    <p className="text-[#6a9b0c] w-[150px]">Комиссионные</p>
                    <p className="text-[#6a9b0c] w-[200px]">Нет</p>
                  </div>
                  <hr />
                  <div className="flex gap-[50px] mt-[50px]">
                    <p className="text-[#999999] w-[150px]">
                      Количество комнат
                    </p>
                    <p className="text-[#6a6d6f] w-[200px]">28 комнат</p>
                  </div>
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]">Площадь</p>
                    <p className="text-[#6a6d6f] w-[200px]">100 м2</p>
                  </div>
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]">
                      Количество этажей
                    </p>
                    <p className="text-[#6a6d6f] w-[200px]">3 этажа и подвал</p>
                  </div>
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]">Санузел</p>
                    <p className="text-[#6a6d6f] w-[200px]">
                      10 отдельных санузлов
                    </p>
                  </div>
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]">Состояние</p>
                    <p className="text-[#6a6d6f] w-[200px]">Евроремонт</p>
                  </div>
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]">Планировка</p>
                    <p className="text-[#6a6d6f] w-[200px]">Планировка</p>
                  </div>
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]">Год постройки</p>
                    <p className="text-[#6a6d6f] w-[200px]">2020</p>
                  </div>
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]">Высота потолка</p>
                    <p className="text-[#6a6d6f] w-[200px]">3.5 м</p>
                  </div>
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]">В доме имеется</p>
                    <div className="flex gap-[10px] flex-wrap items-center w-[200px]">
                      <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                        интернет
                      </button>
                      <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                        интернет
                      </button>
                      <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                        интернет
                      </button>
                      <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                        интернет
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]"> Прочие удобства</p>
                    <div className="flex gap-[10px] flex-wrap items-center w-[200px]">
                      <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                        интернет
                      </button>
                      <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                        интернет
                      </button>
                      <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                        интернет
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]">Рядом</p>
                    <div className="flex gap-[10px] flex-wrap items-center w-[200px]">
                      <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                        интернет
                      </button>
                      <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                        интернет
                      </button>
                      <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                        интернет
                      </button>
                      <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                        интернет
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]">
                      Брокерское обслуж.
                    </p>
                    <p className="text-[#6a6d6f] w-[200px]">Есть</p>
                  </div>
                  <div className="flex gap-[50px]">
                    <p className="text-[#999999] w-[150px]">
                      Опубликовано 22:38 25-Окт 2021
                    </p>
                    <button className="bg-[#fca311] text-black py-[2px] px-[30px] rounded-xl">
                      Продлить топ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-[50px] flex gap-[100px] justify-center pl-[400px] bg-white">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-2xl ">Полезные Ссылки</h2>
            <div className="flex flex-col gap-[10px] mb-[40px]">
              <p className="text-[#999]">О Нас</p>
              <p className="text-[#999]">Пользовательское Соглашение</p>
            </div>
            <p className="text-[#999]">
              ©️ 2021 <span className="text-black">Utopia</span> | Все права
              защищены
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-2xl ">Наши Страницы</h2>
            <div className="flex gap-[7px] items-center">
              <LiaTelegramPlane size={24} />
              <PiYoutubeLogoLight size={24} />
              <LuFacebook size={24} />
              <SlSocialInstagram size={24} color="#fca311" />
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[10px]">
              <BsTelephone size={22} />
              <p>Тех. поддержка</p>
            </div>
            <h2 className="text-2xl ">+998 99 880 80-80</h2>
            <div className="flex items-center gap-[10px]">
              <MdOutlineMailOutline size={22} />
              <p>info@utopia.uz</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <AiOutlineHome size={22} />
              <p> г. Ташкент, Чиланзарский р-н, ул. Гульхани, д-52</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePruduct;
