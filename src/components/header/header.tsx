import { FC } from "react";
import Logo from "../../assets/img/logo.png";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { TiDocumentText } from "react-icons/ti";
import { MdFavoriteBorder } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

const Header: FC = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="w-full flex items-center justify-between px-[90px] py-[30px] bg-white fixed z-10 ">
      <div className=" flex items-center gap-[100px]">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className=" relative">
          <input
            className="w-[300px] py-[10px] px-[20px] rounded-sm bg-[#f3f3f3] outline-none pr-[35px]"
            type="text"
            placeholder="Найти объявления..."
          />
          <button className=" absolute top-[10px] right-[10px] z-20">
            <IoIosSearch size={22} color="#5d5d5d" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-[70px]">
        <Link to={token ? "/add" : "/login"}>
          <button className="bg-[#fca311] text-black py-[10px] px-[19px] rounded-sm">
            Разместить объявление
          </button>
        </Link>
        <div className=" flex gap-[20px] items-center">
          <button>
            <TiDocumentText size={24} />
          </button>
          <Link to="/favorite">
            <button>
              <MdFavoriteBorder size={24} />
            </button>
          </Link>
          <Link to={token ? "/profil" : "/login"}>
            <button>
              <IoPersonOutline size={24} />
            </button>
          </Link>
        </div>
        <div className="">
          <select className="bg-[#f3f3f3] p-[12px] rounded-lg">
            <option value="Ру">Ру</option>
            <option value="Uz">Uz</option>
            <option value="En">En</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
