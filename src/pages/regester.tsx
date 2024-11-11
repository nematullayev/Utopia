import { FC } from "react";
import Header from "../components/header/header";
import { BsTelephone } from "react-icons/bs";

import Bg from "../assets/svg/bg.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { InputMask } from "@react-input/mask";
import { IoPersonOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";

interface LoginResponse {
  token?: string;
}

const Regester: FC = () => {
  const [input, setInput] = useState<string>("");

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleAdd = () => {
    console.log(input);
    if (input === "") {
      toast.error("Telefon raqamni kiriting");
    } else {
      fetch(" https://fakestoreapi.com/auth/login  ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_",
        }),
      })
        .then((res) => res.json())
        .then((json: LoginResponse) => {
          // Type the response here
          console.log(json);
          if (json.token) {
            localStorage.setItem("token", json.token);
            navigate("/sms");
            // dispatch({
            //   type: "login",
            //   payload: json.token,
            // });
          } else {
            alert("Invalid login");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Something went wrong");
        });
    }
  };

  return (
    <div className="flex flex-col bg-[#fca311] ">
      <Header />
      <div
        id="path"
        className="mt-[100px] w-[550px]  mx-auto p-[50px] rounded-2xl flex flex-col "
      >
        <div className="bg-[#fbb43f] text-center pt-[50px] px-[50px] rounded-t-3xl">
          <h2 className="text-2xl text-white">Войти в аккаунт</h2>
        </div>
        <img className=" z-10" src={Bg} alt="" />
        <div
          id="bg"
          className="p-[40px] rounded-b-3xl bg-white flex flex-col gap-[23px]  pt-[100px]"
        >
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[15px] items-center">
              <BsTelephone size={22} color="fca311" />
              <div className="flex flex-col gap-[5px]">
                <p className="text-[#fca311]">НОМЕР ТЕЛЕФОНА</p>
                <div className="flex items-center gap-[2px]">
                  <h2>+998</h2>
                  <InputMask
                    value={input}
                    onChange={(evt) => setInput(evt.target.value)}
                    className="text-black bg-transparent outline-none"
                    mask=" (__) ___-__-__"
                    replacement={{ _: /\d/ }}
                  />
                </div>
              </div>
            </div>
            <hr className="text-[#fdb541]" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[15px] items-center">
              <RiLockPasswordLine size={24} color="#9f9f9f" />
              <div className="flex flex-col gap-[2px]">
                <p className="text-[#fca311]">ПАРОЛЬ</p>
                <div className="flex items-center gap-[2px]">
                  <div className="input max-w-72" data-toggle-password="true">
                    <input
                      placeholder="Password"
                      className=" outline-none"
                      type="password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-[#fdb541]" />
          </div>
          <button
            onClick={handleAdd}
            className="w-full py-[12px] text-black bg-[#fdb541] rounded-xl"
          >
            Далее
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Regester;
