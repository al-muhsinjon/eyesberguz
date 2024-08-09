import { Link, useLocation } from "react-router-dom";
import LogoImg from "/logo.svg";
import {
  company,
  download,
  footerList,
  privacy,
  product,
  resource,
  socials,
} from "../../constants/footerItems";
import { FooterControl } from "../FooterContorl/FooterControl";

const Footer = () => {
  const loc = useLocation();
  return (
    <>
      <div
        className={`w-full font-nunito flex flex-col container ${
          loc.pathname == "/" ? "mx-auto" : "max-w-[1990px]"
        }`}
      >
        {/* FOOTER LINKS */}
        <div className="flex md:flex-row flex-col md:gap-0 gap-7 justify-between">
          {footerList.map((list) => {
            return (
              <ul className="" key={list.id}>
                <h3 className="text-clay font-extrabold mb-2.5 text-base md:text-lg xlg:text-xl mm:text-[17px] md:text-[19px] lg:text-xl">
                  {list.name}
                </h3>
                {list.name == "Компания"
                  ? company.map((item) => {
                      return (
                        <li
                          className="text-scarpe text-base lg:text-lg mb-3 last:mb-0"
                          key={item.id}
                        >
                          <Link className="hover:text-blue" to={item.path}>
                            {item.name}
                          </Link>
                        </li>
                      );
                    })
                  : list.name == "Продукт"
                  ? product.map((item) => {
                      return (
                        <li
                          className="text-scarpe text-base lg:text-lg mb-3 last:mb-0"
                          key={item.id}
                        >
                          <Link className="hover:text-blue" to={item.path}>
                            {item.name}
                          </Link>
                        </li>
                      );
                    })
                  : resource.map((item) => {
                      return (
                        <li
                          className="text-scarpe text-base lg:text-lg mb-3 last:mb-0"
                          key={item.id}
                        >
                          <Link className="hover:text-blue" to={item.path}>
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
              </ul>
            );
          })}

          {/* FOOTER INFO */}
          <div className="flex flex-col items-start gap-4">
            <img src={LogoImg} alt="" />
            <p className="text-scarpe text-start text-sm font-normal">
              При использовании любых материалов <br />
              ссылка на сайт eyesberg.uz обязательна
            </p>

            {/* SOCIALS */}
            <ul className="flex items-center gap-4">
              {socials.map((social) => {
                return (
                  <li key={social.id}>
                    <Link to={social.path}>
                      <img src={social.icon} alt={social.name} />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* DOWNLOAD APP */}
            <div className="flex flex-col gap-4 w-full">
              <ul className="flex flex-col">
                {download.map((item) => {
                  return (
                    <li
                      className={`${
                        item.name !== "playmarket" ? "hidden" : "mb-16"
                      }`}
                      key={item.id}
                    >
                      <Link to={item.path}>
                        <img src={item.icon} alt={item.name} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* PRIVACY */}
      <div className=" items-start bg-lupa flex md:items-center justify-center text-center w-full pb-16 md:pb-0">
        <ul className="flex flex-col w-full md:flex-row items-start md:items-center md:gap-6 md:justify-center">
          {privacy.map((item) => {
            return (
              <li
                className="text-[10px] font-normal text-clay mb-2 last:mb-0 md:mb-0"
                key={item.id}
              >
                {item.path ? (
                  <Link className="text-clay">{item.name}</Link>
                ) : (
                  <span>{item.name}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* FOOTER CONTROL PANEL */}
      <FooterControl />
    </>
  );
};

export default Footer;
