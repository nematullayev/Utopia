import { FC } from "react";
import Burger from "../../assets/svg/burger.svg";
import Logo from "../../assets/img/logo.png";
import Line from "../../assets/img/line.png";
import B from "../../assets/img/bootomLine.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <div className=" fixed  top-0 left-0 py-[38px] px-[25px] bg-white h-full w-[345px] overflow-auto flex flex-col gap-[40px] z-20">
      <img className="w-[30px] cursor-pointer" src={Burger} alt="Buregr" />
      <div className="flex flex-col gap-[20px]">
        <Link to="/">
          <img className="w-[176px] cursor-pointer" src={Logo} alt="Logo" />
        </Link>
        <hr />
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className="text-black">Фильтр</p>
        <div className="flex justify-between gap-[10px]">
          <button className="rounded-xl p-[12px] bg-[#f3f3f3] text-sm flex gap-[5px] items-center w-[90px]">
            Продажа
            <img className="" src={Line} alt="Line" />
            <MdKeyboardArrowDown size={18} />
          </button>
          <button className="rounded-xl p-[12px] bg-[#f3f3f3] text-sm flex gap-[5px] items-center  w-[90px]">
            Аренда
            <img className="" src={Line} alt="Line" />
            <MdKeyboardArrowDown size={18} />
          </button>
          <button className="rounded-xl p-[12px] bg-[#f3f3f3] text-sm flex gap-[5px] items-center  w-[90px]">
            Сожит.
            <img className="" src={Line} alt="Line" />
            <MdKeyboardArrowDown size={18} />
          </button>
        </div>
        <div className="flex flex-col gap-[20px]">
          <button className="bg-[#f3f3f3] py-[15px] w-full flex justify-between items-center px-[20px] rounded-xl">
            Категория недвижимости
            <MdKeyboardArrowDown size={18} />
          </button>
          <button className="bg-[#f3f3f3] py-[15px] w-full flex justify-between items-center px-[20px] rounded-xl">
            Область
            <MdKeyboardArrowDown size={18} />
          </button>
          <button className="bg-[#f3f3f3] py-[15px] w-full flex justify-between items-center px-[20px] rounded-xl">
            Район
            <MdKeyboardArrowDown size={18} />
          </button>
          <button className="bg-[#f3f3f3] py-[15px] w-full flex justify-between items-center px-[20px] rounded-xl">
            Ремонт
            <MdKeyboardArrowDown size={18} />
          </button>
          <div className="flex justify-between items-center">
            Комнат
            <div className="flex gap-[15px] items-center bg-[#f3f3f3] p-[10px] rounded-xl px-[20px]">
              <p className="text-[#afafaf]">от</p>
              <div className="flex flex-col gap-[2px] items-center">
                <p className="text-black">5</p>
                <img src={B} alt="B" />
              </div>
              <p className="text-[#afafaf]">до</p>
              <div className="flex flex-col gap-[2px] items-center">
                <p className="text-black">12</p>
                <img src={B} alt="B" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            Площадь
            <div className="flex gap-[15px] items-center bg-[#f3f3f3] p-[10px] rounded-xl px-[10px]">
              <p className="text-[#afafaf]">от</p>
              <div className="flex flex-col gap-[2px] items-center">
                <p className="text-black">50</p>
                <img src={B} alt="B" />
              </div>
              <p className="text-[#afafaf]">до</p>
              <div className="flex flex-col gap-[2px] items-center">
                <p className="text-black">100</p>
                <img src={B} alt="B" />
              </div>
              <p className="text-[#afafaf]">м2</p>
            </div>
          </div>
          <button className="bg-[#f3f3f3] py-[15px] w-full flex justify-between items-center px-[20px] rounded-xl">
            Рядом
            <MdKeyboardArrowDown size={18} />
          </button>
          <div className="flex flex-col gap-[20px]">
            <p className="text-black">Комиссионные</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[20px]">
                <p className="text-black">Да</p>
                <input type="checkbox" />
              </div>
              <div className="flex items-center gap-[20px]">
                <p className="text-black">Нет</p>
                <input type="checkbox" />
              </div>
              <button className="bg-[#fca311] text-black py-[8px] px-[19px] rounded-sm">
                Применить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
