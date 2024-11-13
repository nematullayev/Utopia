import { FC, useState } from "react";
import Header from "../components/header/header";

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OtpInput from "react-otp-input";
import "react-toastify/dist/ReactToastify.css";
import Bg from "../assets/svg/bg.svg";
import { FaArrowLeftLong } from "react-icons/fa6";

const Sms: FC = () => {
  const [otp, setOtp] = useState<string>("");

  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-[#fca311]">
      <Header />
      <div
        id="path"
        className="mt-[100px] w-[550px]  mx-auto p-[50px] rounded-2xl flex flex-col "
      >
        <div className="bg-[#fbb43f] text-center pt-[50px] px-[50px] rounded-t-3xl">
          <h2 className="text-2xl text-white">Подтверждение номера</h2>
        </div>
        <img className=" z-10" src={Bg} alt="" />
        <div
          id="bg"
          className="p-[40px] rounded-b-3xl bg-white flex flex-col gap-[23px]  pt-[100px]"
        >
          <Link to="/">
            <button className="flex items-center gap-[10px] text-[#999999]">
              <FaArrowLeftLong color="#999999" />
              Вернуться
            </button>
          </Link>
          <p className="text-xl text-[#999]">Введите код из СМС</p>
          <p className="text-[#999] flex flex-col ">
            <div className="flex gap-[10px]">
              <p className="text-[#999]">Не получили код?</p>
              <span className="text-[#FCA311] w-[157px]">
                Отправить повторно
              </span>
            </div>
            <p className="text-[#999]">
              Получить повторный код можно через 1:48
            </p>
          </p>
          <OtpInput
            value={otp}
            onChange={(value) => {
              setOtp(value);
            }}
            numInputs={4}
            renderSeparator={<span>&nbsp;&nbsp;</span>}
            inputStyle={{
              width: "70px",
              paddingTop: "20px",
              paddingBottom: "20px",
              fontSize: "18px",
              borderRadius: "8px",
              background: "#fff",
              margin: "5px",
              textAlign: "center",
              outline: "none",
              border: "none",
              borderBottom: "2px solid #999999",
            }}
            renderInput={(props) => <input {...props} />}
          />

          <button
            onClick={() => {
              if (otp.length === 4) {
                toast.success("Siz Muvafaqiyatli royhatdan otdingiz ");
                navigate("/");
              }
            }}
            className="text-black bg-[#fbb43f] w-full py-[12px] rounded-xl"
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sms;
