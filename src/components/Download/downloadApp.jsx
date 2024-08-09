import { faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import qr from "../../assets/qr_black.svg";
import { dwapp } from "../../constants/dwapp";
import { useState, useEffect } from "react";

export default function DownloadApp() {
  const [show, setShow] = useState(true);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const closeModal = (e) => {
      if (e.key === "Escape") setShow(false);
    };
    document.addEventListener("keydown", closeModal);
    return () => document.removeEventListener("keydown", closeModal);
  }, []);

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
    <>
      {show && (
        <div
          className="fixed z-50 top-0 left-0 flex items-center justify-center w-full h-full bg-[#42425f9b]"
          onClick={() => setShow(false)}
        >
          <div
            className="bg-white w-[750px] max-mm:w-full mx-auto p-5 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center">
              <img
                className="mr-5 md:block hidden w-[110px] h-[110px]"
                src={qr}
                alt="QR code"
                width={90}
                height={90}
              />
              <div className="flex flex-col md:items-start items-center justify-start w-full">
                <div className="w-full flex items-center justify-between mb-5 md:mb-0">
                  <h2 className="text-2xl max-mm:text-base font-extrabold text-clay">
                    Используйте eyesberg.uz по полной
                  </h2>
                  <button
                    className="text-cadet text-[18px]"
                    onClick={() => setShow(false)}
                  >
                    <FontAwesomeIcon icon={faX} />
                  </button>
                </div>

                <p className="text-waterloo font-normal mt-1 mb-3 text-md md:block hidden">
                  Укажите свой телефон и мы отправим вам ссылку на скачивание
                </p>

                <form className="w-full mm:block hidden text-waterloo">
                  <div className="flex items-center relative bg-lupa rounded-lg">
                    <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center rounded-s-lg">
                      <FontAwesomeIcon icon={faPhone} />
                      +998
                    </div>
                    <div className="w-full bg-transparent">
                      <input
                        className="!bg-lupa w-full h-full block p-4 text-sm text-gray-900 rounded-e-lg focus:outline-none"
                        placeholder="93 000-00-00"
                        value={phone}
                        onChange={handlePhoneChange}
                        maxLength={12}
                        required
                      />
                      <button className="text-clay absolute top-1 flex items-center bottom-1 end-2.5 bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3">
                        Получить ссылку
                      </button>
                    </div>
                  </div>
                </form>

                <ul className="flex mm:hidden flex-col items-center w-full">
                  {dwapp.map((item) => (
                    <li className="mb-2" key={item.id}>
                      <img className="flex" src={item.img} alt="" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
