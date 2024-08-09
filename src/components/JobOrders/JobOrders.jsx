import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VacansyCard } from "../../constants/vacansiy";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function JobOrders() {
  return (
    <section className="container mb-12">
      <div className="w-full flex items-end gap-8">
        <div className="flex flex-col ">
          <div className="mb-[40px]">
            <h3 className="font-extrabold text-blue  max-md:leading-5 max-sm:text-[16px] max-sm:leading-5 text-left mb-[12px] max-md:text-[18px] leading-[28px] text-[20px]">
              Начни зарабатывать в eyesberg.uz
            </h3>
            <h2 className="font-extrabold text-clay max-sm:text-[21px] max-sm:leading-[28px] max-md:text-[24px] max-md:leading-5  text-left leading-[40px] text-[32px]">
              Сотни заказов и вакансий
            </h2>
          </div>

          <div className="flex flex-wrap justify-between items-start gap-1 ">
            {VacansyCard.map((item) => {
              return (
                <div
                  className=" w-[48%] max-md:w-full max-mm:w-full"
                  key={item.id}
                >
                  <FontAwesomeIcon className="text-blue" icon={faCircleCheck} />
                  <h3 className="font-extrabold max-sm:text-[16px] max-md:text-[18px] max-sm:leading-5 text-[#252742] text-left my-[12px] leading-[28px] text-[20px]">
                    {item.title}
                  </h3>
                  <p className="font-light text-waterloo max-sm:text-[14px] max-md:text-[15px] max-sm:leading-4 text-left mb-[12px] leading-[20px] text-[16px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <button className="w-full flex  justify-center items-center gap-2 text-center rounded-lg text-white text-[16px] leading-[20px] font-semibold bg-[#0A84FF] py-3 ease-in duration-300 hover:bg-[#186abd]">
              <img src="./src/assets/camera.svg" alt="" /> Стать специалистом
            </button>
          </div>
        </div>

        <img
          className="sm:hidden max-sm:hidden lg:block"
          src="./src/assets/vacansy.svg"
          alt="vacansy"
        />
      </div>
    </section>
  );
}
