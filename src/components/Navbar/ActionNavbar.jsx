import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/svg/logoBig.svg";
import logoMobile from "../../assets/svg/logoBigMobile.svg";
import { faBars, faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import Rus from "/Russina.svg";
import { useEffect, useRef, useState } from "react";
import Uz from "../../assets/uzflag.svg";
import { Button } from "../Button/Button";
import { Link, useLocation } from "react-router-dom";
import LocationSpace from "../locationSection/section/LocationSpace";

const langs = [
  {
    id: "uz",
    lang: "O'zbek tili",
    abbr: "UZ",
    ico: Uz,
  },
  {
    id: "ru",
    lang: "Русский язык",
    abbr: "RU",
    ico: Rus,
  },
];

const ActionNavbar = () => {
  const [modal, setModal] = useState(false);
  const [lang, setLang] = useState(langs[0].abbr);
  const loc = useLocation();
  const menuRef = useRef();

  useEffect(() => {
    const closeModal = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", closeModal);
  });

  return (
    <div
      className={`flex flex-col font-nunito bg-wildsand pb-4 container pt-10 w-full ${
        loc.pathname == "/" ? "" : "max-w-[1990px]"
      }`}
    >
      {/* NAVBAR TOP */}
      <div className={`flex items-center justify-between md:relative`} ref={menuRef}>
        {/* LOGO & LOC */}
        <div className="flex items-center mm:gap-4 shrink-0">
          {/* LOGO */}
          <Link to={`/`}>
            {/* DEKTOP */}
            <img className="mm:flex hidden" src={logo} alt="logo" width={188} height={64} />
            {/* MOBILE */}
            <img className="flex mm:hidden object-cover" src={logoMobile} alt="logo" width={67} height={67} />
          </Link>

          {/* LOCATION */}
          <LocationSpace />
        </div>

        {/* LANGUAGE */}
        <div className="flex">
          <Button
            className="hidden md:inline-flex hover:bg-lupa rounded-xl border-2 border-alto md:mr-6"
            spanClasses={`text-scarpe text-[14px] font-semibold leading-normal`}
            onClick={() => setModal(!modal)}
            px={`px-5`}
            py={`py-4`}
          >
            <FontAwesomeIcon className="mr-2.5 text-scarpe self-center" icon={faChevronDown} fontSize={15} />
            {lang}
          </Button>

          {/* MODAL */}
          {modal && <></>}

          {/* CREATE */}
          <Button
            className="md:inline-flex hover:bg-blue/80 rounded-xl hidden bg-blue"
            href=""
            px={`px-6`}
            py={`py-2.5`}
            spanClasses={`text-base ml-2 font-inter font-bold items-center`}
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Kirish
          </Button>

          {/* MENU */}
          <Button
            className="flex md:hidden items-center border-2 border-gray rounded-md"
            onClick={() => setModal(!modal)}
            px={`px-5`}
            py={`py-4`}
          >
            <FontAwesomeIcon className="mr-2 text-scarpe" icon={faBars} />
            <p className="text-scarpe text-base font-inter leading-none">Menu</p>
          </Button>
        </div>

        {/* MODAL */}
        {modal && <></>}
      </div>
    </div>
  );
};

export default ActionNavbar;
