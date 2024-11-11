import { FC, useState } from "react";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";

import First from "../assets/img/firstBody.png";
import FirstHira from "../assets/img/firstBodyHira.png";
import SecondHira from "../assets/img/secondBodyHira.png";
import Second from "../assets/img/secondBody.png";

import Olov from "../assets/svg/olov.svg";
import FirstBody from "../components/firstBody/firstBody";
import SecondBody from "../components/secondBody/secondBody";
import { LiaTelegramPlane } from "react-icons/lia";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

const Index: FC = () => {
  const [tab, setTab] = useState<number>(1);

  return (
    <div className=" relative">
      <Header />
      <Navbar />
      <div className="w-full absolute top-[170px]   flex flex-col gap-[100px]">
        <div className="flex items-center gap-[100px] px-[90px]">
          <p>pplkjnnlnnlnnbbkbkkdjjjjjjjjj</p>
          <div className="flex flex-col gap-[54px] w-full ">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[10px]">
                <h1 className="text-2xl">Топ объявления</h1>
                <img className="w-[35px]" src={Olov} alt="Olov" />
              </div>
              <div className="flex gap-[10px] items-center">
                <button className=" cursor-pointer">
                  <img
                    onClick={() => {
                      setTab(1);
                    }}
                    src={tab == 1 ? First : FirstHira}
                    alt="nimadir"
                  />
                </button>
                <button className=" cursor-pointer">
                  <img
                    onClick={() => {
                      setTab(2);
                    }}
                    src={tab == 2 ? Second : SecondHira}
                    alt="nimadir"
                  />
                </button>
              </div>
            </div>
            <div className="">{tab == 1 ? <FirstBody /> : <SecondBody />}</div>
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

export default Index;
