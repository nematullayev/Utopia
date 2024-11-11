import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { CiLogout } from "react-icons/ci";

const Profil: React.FC = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const userName: string | null = localStorage.getItem("name");

  if (!token) {
    navigate("/login");
  }

  const handleLogOut = () => {
    localStorage.removeItem("token");
    toast.loading("We are logging out");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleChange = () => {
    if (name) {
      localStorage.setItem("name", name);
      toast.success("Ism muvaffaqiyatli o'zgartirildi");
    }
  };

  return (
    <div className=" relative">
      <Header />
      <Navbar />
      <div className=" w-[1111px] mx-auto flex pt-[158px] ml-[300px] mb-[100px]">
        <div className="mt-[68px] ml-[75px]">
          <h1 className="text-[#161A1D] text-[30px] font-medium mb-[54px]">
            Мой аккаунт
          </h1>
          <div className="bg-[white] p-[60px] flex gap-[182px] rounded-xl">
            <div className="flex flex-col justify-between h-full gap-60 mr-20">
              <div className="flex flex-col gap-[35px]">
                {/* <img src={MyAccount} alt="" />
                <img src={MyAccount} alt="" />
                <img src={MyAccount} alt="" />
                <img src={MyAccount} alt="" />
                <img src={MyAccount} alt="" />
                <img src={MyAccount} alt="" />
                <img src={MyAccount} alt="" /> */}
              </div>
              <button
                className="flex items-end gap-[10px]"
                onClick={handleLogOut}
              >
                <CiLogout color="red" size={30} />
                <p className="text-[#ff3d3d]">Выйти</p>
              </button>
            </div>
            <div>
              <h2 className="text-[36px] text-[#161A1D] font-medium mb-[68px]">
                Изменить профиль
              </h2>
              <div className="flex flex-col gap-2 mb-[30px]">
                <p className="text-[#999999] text-[14px] font-medium">Имя</p>
                <input
                  className="border-[1px] border-mainOrange rounded-md outline-none py-3 pl-[21px]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder={userName ?? ""}
                />
              </div>
              <div className="flex flex-col gap-2 mb-[60px]">
                <p className="text-[#999999] text-[14px] font-medium">
                  Телефон
                </p>
                <input
                  className="bg-[#F3F3F3] rounded-md outline-none py-3 pl-[21px] text-[#999]"
                  type="text"
                  placeholder="+998 99 895 90-95"
                  disabled={true}
                />
              </div>
              <button
                className="w-full bg-[#fca311] text-[#161A1D] py-[15px] rounded-lg font-medium mb-[74px]"
                onClick={handleChange}
              >
                Сохранить
              </button>
              <p className="text-[#999] font-medium text-[14px] mb-[10px]">
                Текущий тариф
              </p>
              <h4 className="text-[#161A1D] text-[18px] font-medium mb-[30px]">
                Optimal Plan 3
              </h4>
              <p className="text-[#999] font-medium text-[14px] mb-[10px]">
                Разрешение на размещение объявлений
              </p>
              <h4 className="text-[#6A9B0C] text-[18px] font-medium mb-[30px] flex items-center">
                Есть <IoMdCheckmark size={24} color="#6A9B0C" />
              </h4>

              <p className="text-[#999] font-medium text-[14px] mb-[10px]">
                Разрешение на просмотр дополнительной информации об объявлении
              </p>
              <h4 className="text-[#FE6633] text-[18px] font-medium mb-[30px] flex items-center">
                Нет <RxCross1 size={22} color="#FE6633" />
              </h4>
              <button className="w-full bg-[#fca311] text-[#161A1D] py-[15px] rounded-lg font-medium mb-[74px]">
                Поднять объявление в топ
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Profil;
