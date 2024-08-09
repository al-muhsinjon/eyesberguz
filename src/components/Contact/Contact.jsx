import React, { useState } from "react";
import Iframe from "react-iframe";
import "./contact.css";
import { Link } from "react-router-dom";
import image from "../../assets/images/screen.png";
import icon_map from "../../assets/images/yandex-maps-icon.png";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

export const Contact = () => {
  const [showMap, setShowMap] = useState(false);

  const handleImageClick = () => {
    setShowMap(true);
  };

  return (
    <div className="map-container ">
      {!showMap ? (
        <div
          className="image-wrapper cursor-pointer relative"
          onClick={handleImageClick}
        >
          <img
            src={image}
            alt="Map Placeholder"
            className="w-full h-[400px] md:h-[500px]"
          />
          <div className="hover-icon text-center absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[4em] opacity-0 transition-all duration-500 ease-in-out">
            📍
            <h2 className="text-black text-[23px] mt-6">
              Нажмите на карту, чтобы увидеть точное местоположение
            </h2>
          </div>
        </div>
      ) : (
        <div className="relative">
          <Iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.1309865203325!2d69.26218457609234!3d41.327764971307545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0fc20fbfbb%3A0xae9611ee4d4e8300!2sAnhor%20Park!5e0!3m2!1sru!2s!4v1718435042596!5m2!1sru!2s"
            width="1490"
            height="500"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
          <div className="flex gap-2 absolute bottom-0">
            <Link
              to="https://yandex.uz/maps/org/18967724419/?from=api-maps&indoorLevel=1&ll=69.252625%2C41.316244&origin=jsapi_2_1_79&z=16.73"
              className="flex items-center gap-1 px-2 py-1 bg-white rounded-lg shadow-lg"
            >
              <img className="w-7" src={icon_map} alt="yandex-icon" />
              <p>Открыть карту Яндекса</p>
            </Link>
            <Link
              to="https://yandex.ru/maps-api/products/?from=api-maps"
              className="flex items-center gap-1  px-2 py-1 bg-white rounded-lg shadow-lg"
            >
              <p>Создайте свою карту</p>
            </Link>
          </div>
        </div>
      )}
      <div className=" py-10 container">
        <h2 className="my-14">Контакты</h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="px-7 py-3 bg-sky-400 rounded-lg shadow-lg">
            <img src="" alt="" />
            <h3>Номер телефона</h3>
            <a href="tel:+(237) 681-812-255">(237) 681-812-255</a> <br />
          </div>
          <div className="px-7 py-3 bg-sky-400 rounded-lg shadow-lg">
            <img src="" alt="" />
            <h3>Адрес</h3>
            <p>
              Республика Uzbekiston, г. Toshkent, ул. Достык 13, ЖК Нурсая 2, 3
              этаж, кв. 2
            </p>
          </div>
          <div className="px-7 py-3 bg-sky-400 rounded-lg shadow-lg">
            <img src="" alt="" />
            <h3>Эл. почта </h3>
            <a href="erlan.e@eyesberg.uz">erlan.e@eyesberg.uz</a> <br />
          </div>
        </div>
      </div>
    </div>
  );
};
