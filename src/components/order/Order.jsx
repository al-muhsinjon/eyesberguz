import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronDown,
  faCheck,
  faPhone,
  faChevronUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import InputMask from "react-input-mask"; // react-input-mask ni import qilamiz

import Logo from "../../assets/svg/phone.svg";

const Order = () => {
  const [showsInfo, setShowsInfo] = useState(false);
  const [formData, setFormData] = useState({
    phone: "", // phone field qo'shamiz
    image: null,
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handlesFocus = () => {
    setShowsInfo(true);
  };
  const handlesBlur = () => {
    // setTimeout(() => setShowsInfo(false), 100);
    console.log("handlesBlur ishga tushirildi.");
    setShowsInfo(false);
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({
        ...formData,
        [name]: files[0], // Faqat birinchi faylni oladi
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );

      console.log("Ma'lumotlar muvaffaqiyatli yuborildi:", response.data);
      alert("Ma'lumotlar muvaffaqiyatli yuborildi!");
      setFormData({
        phone: "",
      });
    } catch (error) {
      console.error("Xatolik sodir bo'ldi:", error.message);
      alert("Xatolik sodir bo'ldi. Qayta urinib ko'ring.");
    }
  };

  return (
    <>
      <div className="flex font-sans">
        <div className="flex-col mr-6 mt-[40px] p-10 rounded-xl bg-[#DDF8E1]  max-w-[402px] max-h-[240px]">
          <div className="text-[#23B339] text-base mb-6">
            Используйте все функции нашего сервиса в мобильном приложении
            EyesBerg.uz
          </div>
          <button className="font-bold w-[100%] bg-[#32D74B] hover:opacity-75  text-[#ffff] rounded-lg p-5 text-center outline-none border-0 cursor-pointer">
            Получить ссылку
          </button>
        </div>
        <div className="max-w-[100%] flex-1 flex-shrink-1   ">
          <div className="relative w-[100%] max-w-[828px] mr-auto mt-[40px] ">
            <div>
              <div className="mb-[16px]">
                <label className="uppercase font-[600] text-base leading-6 text-gray-500">
                  <span className=" opacity-50">Что нужно сделать?</span>
                  <span className="text-red-600 opacity-100">*</span>
                </label>
              </div>

              <div className="rounded-xl bg-[#ffff] border-2 border-solid border-transparent ">
                <textarea
                  type="text"
                  className="w-full resize-none h-48  outline-none border-0 rounded-none  p-10 text-base leading-6 bg-transparent transition border-color duration-100 ease-in"
                  placeholder="Укажите больше подробностей, чтобы специалисты могли точно оценить объем работы"
                ></textarea>
              </div>
            </div>
            <div className="mt-[40px]">
              <p className="font-semibold text-base text-[#a1a1a1] mb-[16px] uppercase">
                Как с вами связаться?
              </p>
            </div>
            <div className="relative mb-[16px]">
              <div
                tabIndex={0}
                onFocus={handlesFocus}
                onBlur={handlesBlur}
                className=" pt-[20px] pr-[24px] pb-[20px] rounded-xl pl-[24px] bg-[#ffff] cursor-pointer flex items-center justify-between"
              >
                <div className="">Позвоните мне</div>
                <FontAwesomeIcon
                  className="text-[#a1a1a1]"
                  icon={faChevronDown}
                />
              </div>
              {showsInfo && (
                <div className=" pl-[20px] pr-[20px]  absolute top-0 left-0 right-0  z-[2]  bg-white shadow-[0_24px_40px_rgba(28,28,30,0.16)] rounded-lg">
                  <ul className=" list-none pt-[8px] pb-[8px] pl-0 pr-0 m-[-4] max-h-[312px] overflow-auto">
                    <li className="hover:bg-[#e9e9e9] rounded-lg flex items-center justify-between  pt-[15px] pr-[16px] pl-[16px] pb-[15px] li-before cursor-pointer leading-6">
                      <span>Позвоните мне</span>
                      <FontAwesomeIcon icon={faCheck} />
                    </li>
                    <li className="hover:bg-[#e9e9e9] rounded-lg leading-6 li-before relative  pt-[8px] pr-[16px] pl-[16px] pb-[8px] cursor-not-allowed">
                      <span className="text-[#a1a1a1] text-[16px]">
                        Напишите мне <br />
                        <span className="text-[14px]">
                          Доступно только в мобильном приложении{" "}
                        </span>
                        <span className="text-[#0A84FF] cursor-pointer">
                          {" "}
                          Скачать
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="flex items-center pl-[24px] pr-[24px] border border-solid border-transparent rounded-lg bg-white ">
              <FontAwesomeIcon
                className="mr-[16px] text-[#a1a1a1] "
                icon={faPhone}
              />
              <div>
                <InputMask
                  mask="+7 (999) 999-99-99"
                  id="phone"
                  name="phone"
                  className="border-0 rounded-none px-[1px] py-[2px] outline-none w-full h-16 leading-16 bg-transparent"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (000) 000-00-00"
                >
                  {(inputProps) => (
                    <input {...inputProps} type="tel" required />
                  )}
                </InputMask>
              </div>
            </div>
            <div className="mt-[40px]">
              <div className="cursor-pointer" onClick={toggleForm}>
                <h4 className="text-[24px] font-semibold mb-[16px]">
                  Получите лучшие предложения!
                </h4>
                <div
                  className="drop__down"
                  style={{
                    display: "flex",
                  }}
                >
                  <p className="text-[#a1a1a1] text-[16px] pr-[24px] cursor-pointer">
                    Добавьте в заявку фото, адрес, время и другие детали и
                    получите на 50% больше откликов с<br />
                    точной ценой
                  </p>
                  <span>
                    <FontAwesomeIcon
                      className="text-[#a1a1a1] text-[16px]"
                      // icon={` ${isOpen ? { faChevronUp } : { faChevronDown }}  `}
                      icon={faChevronDown}
                    />
                  </span>
                </div>
              </div>
              {isOpen && (
                <div className="mt-[40px] text-[#a1a1a1]">
                  <h1 className="text-[16px] font-semibold  uppercase mb-[16px]">
                    КОГДА И ГДЕ НАЧАТЬ РАБОТУ?
                  </h1>
                  <div className="relative ">
                    <FontAwesomeIcon
                      className="absolute top-[35%]  text-[16px] cursor-pointer left-[2%] "
                      icon={faSearch}
                    />
                    <input
                      type="search"
                      className="bg-white pl-[64px] pt-[20px] pr-[20px] pb-[20px] w-full border-none rounded-lg text-[16px] text-[#a1a1a1] cursor-pointer outline-none  "
                      placeholder="Укажите свой адрес"
                    />
                  </div>
                  <div className="mt-[50px] text-[#a1a1a1] text-[16px] ">
                    <h1 className="mb-[16px] text-[16px] font-medium   uppercase">
                      СКОЛЬКО ВЫ ГОТОВЫ ЗАПЛАТИТЬ?
                    </h1>
                    <div className="flex gap-[24px]">
                      <input
                        className="bg-[#fff] pl-[24px] pr-[24px] pt-[20px] pb-[20px] w-full border-none rounded-lg  text-[#0000] cursor-pointer  outline-none "
                        type="number"
                        placeholder="От"
                      />
                      <input
                        className="bg-[#fff] pl-[24px] pr-[24px] pt-[20px] pb-[20px] w-full border-none rounded-lg   text-[#0000] cursor-pointer  outline-none "
                        type="number"
                        placeholder="До"
                      />
                    </div>
                    <div className="bg-[#fff] pl-[24px] pr-[24px] pt-[20px] pb-[20px] w-full  rounded-lg cursor-pointer flex justify-between mt-[20px] ">
                      <div className="  ">Наличными или переводом</div>
                      <span>
                        <FontAwesomeIcon
                          className="text-[16px] "
                          icon={faChevronDown}
                        />
                      </span>
                    </div>
                    <div className="mt-[20px] flex justify-between bg-[#fff] pl-[24px] pr-[24px] pt-[20px] pb-[20px] w-full cursor-pointer ">
                      <div className="text-[16px]  ">Цена за всю работу</div>
                      <span>
                        <FontAwesomeIcon className="   " icon={faChevronDown} />
                      </span>
                    </div>
                  </div>
                  <div className="mt-[50px] flex text-[#a1a1a1] text-[16px] gap-[24px]">
                    <div>
                      <h1 className="mb-[16px]  font-medium   uppercase">
                        ДОБАВЬТЕ ФОТО ИЛИ ВИДЕО
                      </h1>
                      <label
                        htmlFor="exampleInputImg1"
                        className="flex items-center justify-center    "
                        style={{
                          height: "260px",
                          width: "260px",
                          overflow: "hidden",
                          backgroundPosition: "50% 50%",
                          backgroundSize: "cover",
                          borderRadius: "8px",
                          fontSize: " 24px !important",
                          padding: " 0 !important",
                          lineHeight: " 130px !important",
                          textAlign: "center",
                          cursor: "pointer",
                          outline: "none",
                          border: " 2px solid #0A84FF",
                          background: "#D6EAFF",
                        }}
                      >
                        <img
                          // src={file}
                          alt=""
                          style={{
                            minWidth: "100%",
                            minHeight: "100%",
                            zIndex: "45",
                          }}
                        />
                        <span
                          style={{
                            position: "relative",
                          }}
                        >
                          <i
                            className="fa-solid fa-camera"
                            style={{
                              position: "absolute",
                              top: "-20px",
                              right: "120px",
                              fontSize: "48px",
                              zIndex: "5",
                              color: "#0A84FF",
                            }}
                          ></i>
                          <i
                            className="fa-solid fa-plus"
                            style={{
                              position: "absolute",
                              top: "-30px",
                              right: "158px",
                              fontSize: "30px",
                              zIndex: "5",
                              color: "#0A84FF",
                            }}
                          ></i>
                        </span>
                      </label>

                      <span
                        style={{
                          position: "relative",
                        }}
                      >
                        <input
                          type="file"
                          id="image"
                          name="image"
                          className="form-control"
                          accept=".png, .jpeg, .jpg"
                          onChange={handleChange}
                          style={{
                            position: "absolute",
                            top: "-100px",
                            zIndex: "-999",
                          }}
                        />
                      </span>
                    </div>
                    <div
                      className="imgs__type"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={Logo}
                        alt=""
                        style={{
                          width: "260px",
                          height: "260px",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="chevron__checked"
                    style={{
                      marginTop: "50px",
                    }}
                  >
                    <h1
                      style={{
                        marginBottom: "16px",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#a1a1a1",
                        textTransform: "uppercase",
                      }}
                    >
                      ТРЕБОВАНИЯ К СПЕЦИАЛИСТАМ
                    </h1>
                    <div
                      htmlFor="checkbox"
                      className="checked__input"
                      style={{
                        padding: "20px 24px",
                        background: "#fff",
                        borderRadius: "12px",
                        cursor: "pointer",
                        display: "grid",
                        gridTemplateColumns: "auto auto",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "16px",
                        }}
                      >
                        Личность подтверждена
                      </p>
                      <input
                        type="checkbox"
                        id="checkbox"
                        style={{
                          fontSize: "16px",
                          color: "#000",
                          cursor: "pointer",
                          outline: "none",
                        }}
                        className="border-[2px] border-solid border-[#a1a1a1] bg-white w-[20px] rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full text-white bg-[#0A84FF] border-[#0A84FF] mt-[40px] mb-[24px] text-[500] leading-6  font-medium  text-center  h-14  rounded-lg  outline-none  no-underline  px-4  flex  items-center justify-center  border-2  border-transparent  whitespace-nowrap  overflow-hidden  text-ellipsis  transition "
            >
              Опубликовать
            </button>
            <div className="mb-[120px] ">
              <small className="text-[#a1a1a1] text-[16px]">
                Нажимая «Опубликовать», вы соглашаетесь с{" "}
                <a
                  href="https://eyesberg.uz/legal"
                  className="text-[#0A84FF] underline"
                >
                  правилами сервиса
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
