import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import qr from "../../assets/qr.png";
import { dwapp } from "../../constants/dwapp";
import { useState } from "react";

export default function SendReq() {
  const [phone, setPhone] = useState("");
  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 3) return phoneNumber;
    if (phoneNumberLength < 6)
      return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2)}`;
    if (phoneNumberLength < 8)
      return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(
        2,
        5
      )}-${phoneNumber.slice(5)}`;

    return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(
      2,
      5
    )}-${phoneNumber.slice(5, 7)}-${phoneNumber.slice(7, 9)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber);
  };

  return (
    <div className="container xl:mx-auto mb-20">
      <div className="w-full bg-apple rounded-xl p-10">
        <div className="flex items-center">
          <img
            className="mr-5 md:block hidden"
            src={qr}
            alt="QR code"
            width={90}
            height={90}
          />

          <div className="flex flex-col md:items-start items-center justify-start w-full text-green">
            <h2 className="md:text-xl text-base font-bold mb-5 md:mb-0">
              Используйте eyesberg.uz по полной
            </h2>
            <p className="text-lg md:block hidden">
              Укажите свой телефон и мы отправим вам ссылку на скачивание
            </p>

            <form className="w-full md:block hidden">
              <div className="flex items-center relative bg-romance rounded-lg ">
                <div className="flex-shrink-0 z-10 inline-flex   items-center py-2.5 px-4 text-sm font-medium text-center rounded-s-lg">
                  <FontAwesomeIcon icon={faPhone} />
                  +998
                </div>

                <div className="w-full bg-transparent ">
                  {/* <input className="!bg-romance w-full h-full block p-4 text-sm text-gray-900 rounded-e-lg focus:outline-none" 
                                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                                  placeholder="(**) 123-45-67" 
                                  required /> */}
                  <input
                    className="!bg-romance  w-full h-full block p-4 text-sm text-green rounded-e-lg focus:outline-none"
                    placeholder="93 000-00-00"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength={12}
                    required
                  />

                  <button
                    className={`text-clay  absolute top-1 flex items-center bottom-1 end-2.5  bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3`}
                  >
                    Получить ссылку
                  </button>
                </div>
              </div>
            </form>

            <ul className="flex md:hidden flex-col items-center w-full">
              {dwapp.map((item) => {
                return (
                  <li className="mb-2" key={item.id}>
                    <img className="flex" src={item.img} alt="" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
