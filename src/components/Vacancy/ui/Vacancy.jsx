import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { VACANCY_ITEM_CONTENT } from "../../../constants/vacanyItem";
import { GetMethod } from "../../../hooks/get-method";
import "./Vacancy.css";

export const Vacancy = () => {
  const [data, setData] = useState(null);

  // fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetMethod("http://localhost:5000/job", setData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const vacancyMiddleContent = VACANCY_ITEM_CONTENT.map((el) => {
    return (
      <li
        key={el.id}
        className="vacany-item flex md:flex-col items-center p-5 md:items-start gap-6 border rounded-md lg:p-8 lg:py-10 w-full md:w-[45%] lg:w-auto cursor-pointer"
      >
        <FontAwesomeIcon color="#bdbdbd" icon={el.icon} />
        <p className="w-full text-[14px] lg:w-[280px]">{el.name}</p>
      </li>
    );
  });

  const vacancyBottomContent = data?.jobVacancy.map((vacancy) => {
    return (
      <li
        key={vacancy.id}
        className="vacany-item cursor-pointer flex flex-col  p-5 items-start gap-6 border rounded-md w-full md:w-[45%] lg:w-[26%]"
      >
        <h4 className="font-bold">{vacancy.title}</h4>
        <ul className="">
          {vacancy.jobName.map((job, index) => {
            return (
              <li key={index} className="">
                <Link
                  className="text-blue-600 hover:opacity-80 active:opacity-60 "
                  to="/"
                >
                  {job}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  });

  return (
    <>
      {/* intro section */}
      <section className="intro-section">
        <div className="container flex items-center flex-col gap-3 ">
          <h2 className="text-[40px] text-center text-white">
            {data?.intro?.title}
          </h2>
          <p className="text-[24px] text-center text-white ">
            {data?.intro?.description}
          </p>
        </div>
      </section>
      {/* Bread crumbs */}
      <div className="container my-[70px]">
        <nav aria-label="breadcrumb">
          <ol className="flex gap-3 text-[14px] p-0">
            <li className="text-[#a1a1a1]">
              <NavLink to="/">Главная</NavLink>
            </li>
            <li className="text-[#a1a1a1]" aria-current="page">
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <li className="breadcrumb-item">
              <NavLink to="/">Вакансии</NavLink>
            </li>
          </ol>
        </nav>
      </div>
      {/* Vacancy */}
      <div className="container mb-10">
        <div className="vacancy-top">
          <h3 className="text-[32px] font-bold">{data?.vacancy?.title}</h3>
          <p className=" lg:w-[1020px] mt-5">
            Хотите стать частью нашего продукта и развиваться с опытной
            командой? Присоединяйтесь к EyesBerg.uz, отправьте email на
            <a href="/" className="text-blue-600 font-bold hover:opacity-50">
              team@eyesberg.uz
            </a>
            с вашим резюме и расскажите почему мы нуждаемся в вас.
          </p>
        </div>
        <div className="vacancy-middle mt-8">
          <h3 className="text-[24px] font-bold">Мы предлагаем</h3>
          <ul className="mt-8 flex flex-wrap gap-4">{vacancyMiddleContent}</ul>
          <h3 className="text-[24px] mt-10 font-bold">Сейчас нам нужны</h3>
          <ul className="mt-6 flex flex-wrap gap-4 ">{vacancyBottomContent}</ul>
          <p className="mt-6">
            Не нашли подходящей вакансии? Не беда! Отправляйте резюме на почту
            <a href="/" className="text-blue-600 font-bold hover:opacity-50">
              team@eyesberg.uz
            </a>
            возможно мы еще не знаем, как вы нам нужны.
          </p>
        </div>
      </div>
    </>
  );
};
