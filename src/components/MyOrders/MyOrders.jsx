import React from "react";
import { CardButton } from "../CardButton/CardButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";

export const MyOrders = () => {
  return (
    <section className="font-inter max-w-[1990px] container bg-wildsand ">
      <Breadcrumbs my="py-10" />
      <div className="flex items-start flex-col justify-between lg:flex-row ">
        {/* SIDEBAR */}
        <div className="flex flex-col order-1 lg:order-none lg:mr-6  mx-auto">
          <CardButton
            className={` bg-lightBlue mb-6 font-inter`}
            title={"Нужны хорошие специалисты?"}
            btnTxt={"Создать заказ"}
          />
          <CardButton
            className={` bg-[#DDF8E1] font-inter`}
            text={`Используйте все функции нашего сервиса в мобильном приложении EyesBerg.uz`}
            btnTxt={"Получить ссылку"}
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between w-full lg:justify-between gap-32 flex-1">
          <div className="flex items-center justify-start flex-col md:items-start">
            {/* HEADING & BUTTON */}
            <div className="flex items-center justify-start flex-col md:flex-row md:justify-between w-full">
              <h2 className="font-bold font-inter text-[40px] mb-2 leading-[1.4]">
                Мои заявки
              </h2>
              <button className="self-center leading-[1.4]">
                <FontAwesomeIcon
                  icon={faTrash}
                  color="#a1a1a1"
                  className="mr-2"
                />
                Архив заявок
              </button>
            </div>

            {/* TEXT */}
            <p className="text-base mb-10 text-gray">
              Кликните на заявку для просмотра откликов
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-[40px] mb-6 leading-[1.4] font-inter font-semibold text-shark text-center">
              У вас пока нет заявок
            </h1>
            <p className="text-gray text-2xl text-center">
              Нажмите Создать заявку и получите предложения от специалистов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
