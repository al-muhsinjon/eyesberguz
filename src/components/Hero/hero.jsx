import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Categories from "./categories";
import service from "../../assets/categories/repair.png";
import friendship from "../../assets/categories/friendship.png";
import coin from "../../assets/categories/coin.svg";
import chat from "../../assets/categories/chat.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PopularVacancies from "./popular";

export default function Hero() {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1900 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1900, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const accordion = [
    {
      title: "Для чего нужно оставлять отзывы о специалистах eyesberg.uz?",
      description:
        "Отзывы на специалистов помогают улучшить качество выполняемой ими работы. При проявлении грубых нарушений со стороны специалистов, сервис eyesberg.uz предусматривает меры наказания вплоть до блокировки анкеты специалиста. Также отзывы помогают создать большую базу хороших специалистов, которые будут полезны вам в будущем",
    },
    {
      title: "Для чего нужно оставлять отзывы о специалистах eyesberg.uz?",
      description:
        "Отзывы на специалистов помогают улучшить качество выполняемой ими работы. При проявлении грубых нарушений со стороны специалистов, сервис eyesberg.uz предусматривает меры наказания вплоть до блокировки анкеты специалиста. Также отзывы помогают создать большую базу хороших специалистов, которые будут полезны вам в будущем",
    },
    {
      title: "Для чего нужно оставлять отзывы о специалистах eyesberg.uz?",
      description:
        "Отзывы на специалистов помогают улучшить качество выполняемой ими работы. При проявлении грубых нарушений со стороны специалистов, сервис eyesberg.uz предусматривает меры наказания вплоть до блокировки анкеты специалиста. Также отзывы помогают создать большую базу хороших специалистов, которые будут полезны вам в будущем",
    },
    {
      title: "Для чего нужно оставлять отзывы о специалистах eyesberg.uz?",
      description:
        "Отзывы на специалистов помогают улучшить качество выполняемой ими работы. При проявлении грубых нарушений со стороны специалистов, сервис eyesberg.uz предусматривает меры наказания вплоть до блокировки анкеты специалиста. Также отзывы помогают создать большую базу хороших специалистов, которые будут полезны вам в будущем",
    },
    {
      title: "Для чего нужно оставлять отзывы о специалистах eyesberg.uz?",
      description:
        "Отзывы на специалистов помогают улучшить качество выполняемой ими работы. При проявлении грубых нарушений со стороны специалистов, сервис eyesberg.uz предусматривает меры наказания вплоть до блокировки анкеты специалиста. Также отзывы помогают создать большую базу хороших специалистов, которые будут полезны вам в будущем",
    },
    {
      title: "Для чего нужно оставлять отзывы о специалистах eyesberg.uz?",
      description:
        "Отзывы на специалистов помогают улучшить качество выполняемой ими работы. При проявлении грубых нарушений со стороны специалистов, сервис eyesberg.uz предусматривает меры наказания вплоть до блокировки анкеты специалиста. Также отзывы помогают создать большую базу хороших специалистов, которые будут полезны вам в будущем",
    },
    {
      title: "Для чего нужно оставлять отзывы о специалистах eyesberg.uz?",
      description:
        "Отзывы на специалистов помогают улучшить качество выполняемой ими работы. При проявлении грубых нарушений со стороны специалистов, сервис eyesberg.uz предусматривает меры наказания вплоть до блокировки анкеты специалиста. Также отзывы помогают создать большую базу хороших специалистов, которые будут полезны вам в будущем",
    },
    {
      title: "Для чего нужно оставлять отзывы о специалистах eyesberg.uz?",
      description:
        "Отзывы на специалистов помогают улучшить качество выполняемой ими работы. При проявлении грубых нарушений со стороны специалистов, сервис eyesberg.uz предусматривает меры наказания вплоть до блокировки анкеты специалиста. Также отзывы помогают создать большую базу хороших специалистов, которые будут полезны вам в будущем",
    },
    {
      title: "Для чего нужно оставлять отзывы о специалистах eyesberg.uz?",
      description:
        "Отзывы на специалистов помогают улучшить качество выполняемой ими работы. При проявлении грубых нарушений со стороны специалистов, сервис eyesberg.uz предусматривает меры наказания вплоть до блокировки анкеты специалиста. Также отзывы помогают создать большую базу хороших специалистов, которые будут полезны вам в будущем",
    },
  ];

  return (
    <div className="container">
      <div
        onClick={() => navigate("")}
        className="rounded-[10px]  w-full overflow-hidden mb-10 cursor-pointer"
      >
        <img
          className="w-full h-full object-cover"
          src="https://naimi.kz/img/slider/yandex-banner.png"
          alt="hero-img"
        />
      </div>

      <div className="w-full gap-1 md:gap-3 flex-wrap flex md:flex-row md:flex-nowrap justify-between mb-10">
        <Categories
          title={"Услуги"}
          description={"Заказывайте услуги"}
          icon={service}
        />
        <Categories
          title={"Персонал"}
          description={"Нанимайте работников"}
          icon={friendship}
        />
        <div
          className="p-6 justify-evenly xlg:flex flex-col gap-3 items-center hover:bg-[#c1e0ff] cursor-pointer transition-[background-color] hidden bg-[#f2f9ff] text-blue rounded-2xl"
          style={{ width: "calc(50% - 4px)" }}
        >
          <span className="text-[3rem] font-extralight ">+</span>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-xl font-[400] mb-[-10px]">Создать</h3>
            <p className="font-light text-sm leading-[-5px] text-center">
              Заявку, вакансию и т.д.
            </p>
          </div>
        </div>
        <Categories
          title={"Работа"}
          description={"Начните зарабатывать"}
          icon={coin}
        />
        <Categories
          title={"Гид"}
          description={"Ответы на все вопросы"}
          icon={chat}
        />
      </div>

      <h2 className="text-xl md:text-[1.38rem] lg:text-2xl mb-4 leading-tight">
        Популярное
      </h2>

      <Carousel responsive={responsive} className="mb-20">
        <PopularVacancies
          title={"Услуги маляров и штукатуров"}
          price={"2 000 000 so'm"}
        />
        <PopularVacancies
          title={"Услуги маляров и штукатуров"}
          price={"2 000 000 so'm"}
        />
        <PopularVacancies
          title={"Услуги маляров и штукатуров"}
          price={"2 000 000 so'm"}
        />
        <PopularVacancies
          title={"Услуги маляров и штукатуров"}
          price={"2 000 000 so'm"}
        />
        <PopularVacancies
          title={"Услуги маляров и штукатуров"}
          price={"2 000 000 so'm"}
        />
        <PopularVacancies
          title={"Услуги маляров и штукатуров"}
          price={"2 000 000 so'm"}
        />
        <PopularVacancies
          title={"Услуги маляров и штукатуров"}
          price={"2 000 000 so'm"}
        />
        <PopularVacancies
          title={"Услуги маляров и штукатуров"}
          price={"2 000 000 so'm"}
        />
        <PopularVacancies
          title={"Услуги маляров и штукатуров"}
          price={"2 000 000 so'm"}
        />
        <PopularVacancies
          title={"Услуги маляров и штукатуров"}
          price={"2 000 000 so'm"}
        />
      </Carousel>

      <h2 className="text-xl md:text-[1.38rem] lg:text-2xl mb-4 leading-tight">
        Услуги
      </h2>
      <Carousel responsive={responsive} className="mb-20">
        <PopularVacancies title={"Услуги маляров и штукатуров"} />
        <PopularVacancies title={"Услуги маляров и штукатуров"} />
        <PopularVacancies title={"Услуги маляров и штукатуров"} />
        <PopularVacancies title={"Услуги маляров и штукатуров"} />
      </Carousel>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-[1.41rem] lg:text-2xl leading-tight">
          Популярные вопросы
        </h2>
        <Link className="text-blue text-base md:text-sm">
          Ответы на все вопросы
        </Link>
      </div>

      <div className="flex flex-col gap-5 lg:gap-3 mb-10">
        {accordion.map((item, index) => {
          const isActive = index === expandedIndex;
          return (
            <div
              key={index}
              className={`p-4 md:p-6 border-[1px] border-athens rounded-xl overflow-hidden transition-[background-color] ${
                isActive ? "bg-lupa !border-lupa" : "bg-white"
              }`}
              onClick={() => handleAccordionClick(index)}
            >
              <div
                className={`flex justify-between items-start md:items-center${
                  isActive ? "mb-4" : ""
                }`}
              >
                <h3 className="text-base md:text-sm lg:text-xl lg:leading-7 font-semibold leading-[1.30]">
                  {item.title}
                </h3>
                <span
                  className={`text-2xl self-start font-medium font-nunito transition-transform ${
                    isActive ? "rotate-[45deg]" : ""
                  }`}
                >
                  +
                </span>
              </div>
              {isActive && (
                <p className="text-sm lg:text-base font-regular">
                  {item.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
