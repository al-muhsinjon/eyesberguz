import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "/logo.svg";
import {
  faChevronDown,
  faBars,
  faPlus,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import Rus from "/Russina.svg";
import { useEffect, useRef, useState } from "react";
import Uz from "../../assets/uzflag.svg";
import { navItems } from "../../constants/navItems";
import { Button } from "../Button/Button";
import { Link, useLocation } from "react-router-dom";
import Search from "../locationSection/search/Search";
import Location from "../locationSection/location/Location";
import SignInModal from "../EnterSayt/SignInModal";
import DownloadApp from "../Download/downloadApp";
import { Catalog } from "../Catalog/index";

const langs = [
  {
    id: "uz",
    lang: "O'zbek tili",
    ico: Uz,
  },
  {
    id: "ru",
    lang: "Русский язык",
    ico: Rus,
  },
];

const MainNavbar = () => {
  const [modal, setModal] = useState(false);
  const [modalSignInModal, setModalSignInModal] = useState(false);
  const [modalDownloadApp, setModalDownloadApp] = useState(false);
  const [lang, setLang] = useState(langs[0].lang);
  const loc = useLocation();
  const [catalog, setCatalog] = useState(false);
  const menuRef = useRef();

  //HANDLE CATALOG EVENT
  const handleMenu = () => {
    setCatalog(!catalog);
    document.body.style.overflow = "hidden";
  };

  const handleInputModal = () => {
    setModalDownloadApp((prev) => !prev);
  };

  const handleSignIn = () => {
    setModalSignInModal((prev) => !prev);
  };

  useEffect(() => {
    const closeModal = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", closeModal);
  });

  return (
    <>
      <Catalog setCatalog={setCatalog} display={catalog} />
      <div
        className={`flex flex-col font-nunito bg-white pb-4 container w-full ${
          loc.pathname == "/" ? "mx-auto" : "max-w-[1990px]"
        }`}
      >
        {/* NAVBAR TOP */}
        <div
          className={`flex items-center justify-between py-2 md:relative`}
          ref={menuRef}
        >
          {/* LANG & LOC */}
          <div className="flex items-center mm:gap-4">
            {/* LANGUAGE */}
            <Button
              className="bg-transparent text-scarpe flex hover:bg-lupa rounded-md"
              onClick={() => setModal(!modal)}
              px={`px-4`}
              py={`py-2`}
            >
              <FontAwesomeIcon
                className="mr-2 text-scarpe self-center"
                icon={faChevronDown}
              />
              <p className="truncate w-10 text-scarpe text-[14px] leading-normal font-semibold">
                {lang}
              </p>
            </Button>

            {/* MODAL */}
            {modal && (
              <div
                className={`absolute md:translate-y-[70%] h-screen scro bg-white border border-athens top-0 left-0 w-full md:w-auto  md:h-auto pt-11 md:p-2 z-50 px-4 pb-5 text-black flex flex-col rounded-xl`}
              >
                <FontAwesomeIcon
                  className="absolute md:hidden top-4 right-7 cursor-pointer text-[25px]"
                  color="lightGray"
                  icon={faClose}
                  onClick={() => setModal(false)}
                />
                <h3 className="text-xl text-clay mb-2 mx-2 font-bold md:hidden">
                  {lang}
                </h3>
                {langs.map((item) => (
                  <div
                    key={item.id}
                    className="cursor-pointer flex px-2 md:p-2 w-full rounded-lg hover:bg-gray-100 items-center justify-between"
                    onClick={() => {
                      setLang(item.lang);
                      setModal(false);
                    }}
                  >
                    <div className="flex gap-1 items-center ">
                      <img src={item.ico} alt="" width={20} height={20} />
                      <span
                        className={`${
                          lang === item.lang ? "text-black" : "text-gray/90"
                        } mr-3`}
                      >
                        {item.lang}
                      </span>
                    </div>

                    <p
                      className={`w-5 h-5 flex items-center justify-center rounded-full border ${
                        lang === item.lang ? "border-blue" : "border-gray/80"
                      } `}
                    >
                      <span
                        className={`w-3 h-3 flex self-center justify-center rounded-full ${
                          lang === item.lang ? "bg-blue" : ""
                        }`}
                      ></span>
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* LOCATION */}
            <Location />
          </div>

          {/* ACTIONS */}
          <ul className="flex text-[#575761] items-center text-[14px] space-x-4">
            {navItems.map((item, i) => (
              <li
                key={i}
                className={`flex font-semibold items-center transition-all duration-300 gap-1 ml-0 
                                ${
                                  i !== 2
                                    ? `hidden ${
                                        i === 1 ? "md:flex" : ""
                                      } lg:flex`
                                    : ""
                                }`}
              >
                {/* ACTION BUTTONS */}
                <Button
                  className="hover:bg-lupa rounded-md"
                  href={i === 1 ? "https://google.com/" : undefined}
                  spanClasses={`text-gray flex items-center leading-normal hover:bg-lupa`}
                  px={`px-4`}
                  py={`py-2`}
                  onClick={
                    item.name == "Скачать приложение"
                      ? handleInputModal
                      : item.name == "Вход"
                      ? handleSignIn
                      : ""
                  }
                >
                  <FontAwesomeIcon
                    className="mr-2"
                    color="gray"
                    icon={item.img}
                  />
                  {item.name}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* NAVBAR BOTTOM */}
        <div className="flex w-full items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <Link to={`/`}>
              <img src={Logo} alt="" />
            </Link>

            {/* OPEN CATALOG */}
            <Button
              className="lg:flex hidden border border-athens rounded-md gap-1 text-sm font-bold hover:bg-lupa"
              px={"px-6"}
              py={"py-2"}
              onClick={handleMenu}
              spanClasses={`text-scarpe`}
            >
              <FontAwesomeIcon
                className="mr-2 self-center"
                icon={faBars}
                color="#575761"
              />
              Katalog
            </Button>
          </div>

          {/* SEARCH INPUT  */}
          <Search />

          <Button
            className="hidden lg:inline-flex hover:text-white/80 rounded-md bg-blue"
            href=""
            px={`px-6`}
            py={`py-2.5`}
          >
            <FontAwesomeIcon icon={faPlus} />
            <span className="text-sm ml-2 font-nunito">Создать</span>
          </Button>
        </div>
        {modalDownloadApp && <DownloadApp />}
        {modalSignInModal && <SignInModal />}
      </div>
    </>
  );
};

export default MainNavbar;
