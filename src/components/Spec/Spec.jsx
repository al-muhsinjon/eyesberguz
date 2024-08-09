import { useState, useEffect } from "react";
import specialist from "../../assets/img/specialist_2.png";
import specialist2 from "../../assets/img/specialist_4.png";
import specialist3 from "../../assets/img/specialist_3.png";
import specialist4 from "../../assets/img/specialist_5.png";
import CardImg from "../../assets/img/helmet.png";
import BgImg from "../../assets/img/header-ellipses.png";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import { HiOutlineArrowSmallDown } from "react-icons/hi2";
import { AiOutlineCaretRight } from "react-icons/ai";
import { SpecLink } from "../SpecLink/SpecLink";

export const Spec = () => {
  const images = [specialist, specialist2, specialist3, specialist4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section>
      <div className="container max-w-[1990px]">
        <div className="flex items-center justify-between">
          <div className="max-w-[41%] max-[1022px]:max-w-[100%] max-[1022px]:w-[100%]">
            <div className="flex text-base mb-10">
              <SpecLink text={"Найти специалиста"} btnText={"Найти работу"} />
            </div>

            <h1 className="text-4xl font-inter font-bold leading-normal my-6 font-primary ">
              Найдите хорошую работу или подработку{" "}
              <span className="text-blue font-inter">
                в <br className="max-[1022px]:hidden" />
                Алматы
              </span>
            </h1>

            <div className="text-lg text-gray font-inter mb-10 ">
              Зарегистрируйтесь в приложении EyesBerg.uz и получите доступ к
              тысяче заказов и вакансий
            </div>

            <div>
              <button className="w-64 font-roboto bg-blue text-base text-white font-bold rounded-xl px-5 py-4 max-[1022px]:w-full relative z-10">
                Стать специалистом EyesBerg.uz
              </button>
            </div>
          </div>

          <img
            className="absolute z-[-10] hidden max-[1022px]:block top-12 left-[0] w-full"
            src={BgImg}
            alt="ellipses"
          />

          <div className="relative flex justify-center w-[55%] max-w-[55%] max-[1022px]:hidden">
            {images.map((img, index) => (
              <img
                key={index}
                className={` w-full max-w-[700px]   h-800 max-[1022px]:min-h-full  ${
                  index === currentIndex ? "block" : "hidden"
                }`}
                style={{
                  transition: "opacity 0.5s ease-in-out",
                  opacity: index === currentIndex ? 1 : 0,
                  zIndex: index === currentIndex ? 1 : 0,
                }}
                src={img}
                alt={`Slide ${index + 1}`}
              />
            ))}
            <div className="absolute w-[100%] max-w-[100%] bottom-[100px] flex justify-center max-[1496px]: ">
              <button
                className="rounded-l-xl bg-white w-16 h-16 z-30 flex items-center justify-center shadow-sm"
                onClick={prevSlide}
              >
                <RxArrowLeft className="text-2xl text-blue hover:text-blue  " />
              </button>
              <button
                className="rounded-r-xl bg-white  w-16 h-16  z-30 flex items-center justify-center shadow-sm"
                onClick={nextSlide}
              >
                <RxArrowRight className="text-2xl text-blue hover:text-blue" />
              </button>
            </div>
            <div className="block">
              <a
                href="#search"
                className="absolute bottom-0 left-[5%] rounded-full border-2 border-custom-gray text-alto px-5 py-5 hover:border-gray-600 hover:text-gray z-30"
              >
                <HiOutlineArrowSmallDown />
              </a>
            </div>
          </div>
        </div>

        <div
          id="search"
          className="grid grid-cols-4 gap-6 mt-32 min-[1496px]:grid-cols-4  max-[1438px]:grid-cols-2  max-[768px]:grid-cols-1"
        >
          <div className="mb-7 ">
            <h2 className="text-4xl font-inter  font-bold leading-normal my-6 ">
              Как найти работу в Астане через eyesberg.uz?
            </h2>
            <div className="text-gray font-inter mb-6">
              Тысячи заказов по услугам и сотни вакансий в день!
            </div>
            <button
              className="text-gray flex items-center hover:text-shark group transition duration-200"
              onClick={() => setModal(true)}
            >
              <span className="mr-2 rounded-full border-2 border-gray text-gray font-inter text-[14px] font-bold px-5 py-5 group-hover:border-shark group-hover:text-shark transition duration-200">
                <AiOutlineCaretRight />
              </span>
              Посмотреть промо-видео
            </button>
          </div>

          <div className="px-10 py-10 bg-white rounded-xl ">
            <div className="mb-7 text-green font-inter font-bold text-lg">
              1
            </div>
            <h3 className="text-lg font-inter font-bold leading-normal mb-3">
              Скачайте приложение
            </h3>
            <p className="text-gray font-inter text-sm leading-normal">
              Поиск работы доступен только в мобильном приложении EyesBerg.uz
            </p>
          </div>

          <div className="px-10 py-10 bg-white rounded-xl">
            <div className="mb-7 text-green font-inter font-bold text-lg">
              1
            </div>
            <h3 className="text-lg font-inter font-bold leading-normal mb-3">
              Скачайте приложение
            </h3>
            <p className="text-gray font-inter text-sm leading-normal">
              Поиск работы доступен только в мобильном приложении EyesBerg.uz
            </p>
          </div>

          <div className="px-10 py-10 bg-white rounded-xl">
            <div className="mb-7 text-green font-inter font-bold text-lg">
              1
            </div>
            <h3 className="text-lg font-inter font-bold leading-normal mb-3">
              Скачайте приложение
            </h3>
            <p className="text-gray font-inter text-sm leading-normal">
              Поиск работы доступен только в мобильном приложении EyesBerg.uz
            </p>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-4xl font-inter font-bold leading-normal mb-4">
            Вакансии (работа) по категориям в Астане
          </h2>
          <span className="block text-gray text-base font-semibold mb-10">
            Тысячи заказов и сотни вакансий ждут вас!
          </span>

          <ul className="grid grid-cols-4 gap-6 min-[1496px]:grid-cols-4 max-[1438px]:grid-cols-2  max-[768px]:grid-cols-1 ">
            <li className="py-10 pr-[20px] pl-10 bg-white rounded-xl cursor-pointer transition duration-100 ease-in-out transform shadow-none hover:shadow-custom">
              <img className="mb-10" src={CardImg} alt={CardImg} />
              <h3 className="text-xl font-inter font-bold leading-normal mb-4 max-[768px]:text-base">
                Строительство и отделка
              </h3>
              <p className="text-gray font-inter text-base">
                Высотные работы, Уборка территорий
              </p>
            </li>
            <li className="py-10 pr-[20px] pl-10 bg-white rounded-xl cursor-pointer transition duration-100 ease-in-out transform shadow-none hover:shadow-custom">
              <img className="mb-10" src={CardImg} alt={CardImg} />
              <h3 className="text-xl font-inter font-bold leading-normal mb-4 max-[768px]:text-base">
                Строительство и отделка
              </h3>
              <p className="text-gray font-inter text-base">
                Высотные работы, Уборка территорий
              </p>
            </li>
            <li className="py-10 pr-[20px] pl-10 bg-white rounded-xl cursor-pointer transition duration-100 ease-in-out transform shadow-none hover:shadow-custom">
              <img className="mb-10" src={CardImg} alt={CardImg} />
              <h3 className="text-xl font-inter font-bold leading-normal mb-4">
                Строительство и отделка
              </h3>
              <p className="text-gray font-inter text-base">
                Высотные работы, Уборка территорий
              </p>
            </li>
            <li className="py-10 pr-[20px] pl-10 bg-white rounded-xl cursor-pointer transition duration-100 ease-in-out transform shadow-none hover:shadow-custom">
              <img className="mb-10" src={CardImg} alt={CardImg} />
              <h3 className="text-xl font-inter font-bold leading-normal mb-4">
                Строительство и отделка
              </h3>
              <p className="text-gray text-base">
                Высотные работы, Уборка территорий
              </p>
            </li>
            <li className="px-10 py-10 bg-[#D6EAFF] rounded-xl cursor-pointer transition duration-100 ease-in-out transform">
              <div className="mb-5 font-inter text-teal font-bold text-2xl max-[510px]:text-xl ">
                Найдите хорошую работу или подработку в EyesBerg.uz
              </div>
              <a
                className="flex items-center justify-center bg-blue text-base text-white font-bold rounded-xl px-4 py-4 "
                href=""
              >
                Скачать приложение
              </a>
            </li>
          </ul>
        </div>
      </div>
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setModal(false)}
        >
          <div
            className="absolute inset-0 bg-[#000000] opacity-50 cursor-pointer"
            onClick={() => setModal(false)}
          ></div>
          <div className="aspect-w-16 aspect-h-9 z-50  h-4/5 max-[768px]:h-2/4  max-[480px]:h-2/4 w-4/5">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube-nocookie.com/embed/wOLbA3-JcsQ?modestbranding=1&rel=0&showinfo=0"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onClick={(e) => e.stopPropagation()}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};
