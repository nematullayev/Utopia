import { FC } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";
import { LuFacebook } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";

const Footer: FC = () => {
  return (
    <div className="  mt-[100px]  w-full p-[50px] flex gap-[100px] justify-center pl-[400px] bg-white">
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
  );
};

export default Footer;
