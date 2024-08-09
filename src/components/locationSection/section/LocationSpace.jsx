import { useState, useEffect } from "react";
import { data as items } from "../../../constants/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
export default function LocationSpace() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setData(items.content);
    // fetchData()
  }, []);

  const filterData = (data, value, name) =>
    data.content[name].filter((i) =>
      i.name.toLowerCase().includes(value.toLowerCase())
    );

  const handleChangeSearch = (e) => {
    const { value } = e.target;

    setSearch(value);
    setData((prev) => ({
      ...prev,
      city: filterData(items, value, "city"),
    }));
  };

  return (
    <>
      <div className="flex items-flex ml-[24px] text-[#0A84FF] w-40 h-16 pt-[20px] pr-[14px] pb-[20px] pl-[14px] text-blue-500 text-lg ">
        <div className="flex items-center ">
          <FontAwesomeIcon className="pr-2 " icon={faLocationDot} />
        </div>

        <div onClick={() => setShowModal(true)}>
          <a className="cursor-pointer  font-semibold  md td-n mgl-1">
            Tashkent
          </a>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="fixed  flex justify-center  items-center bg-[rgba(37,39,66,0.6)]  overflow-y-hidden  top-0 right-0 left-0 bottom-0 z-22222222 outline-none focus:outline-none">
            <div
              style={{
                flex: "0 0 75%",
              }}
              className=" max-h-[472px]  max-w-[776px] flex flex-col border-0 p-[24px] xl:p-[40px] lg:p-[40px] rounded-lg shadow-lg relative   bg-white outline-none focus:outline-none"
            >
              <button
                className=" ml-auto opacity-25 float-right "
                onClick={() => setShowModal(false)}
              >
                <span className="text-black h-6 w-6 pb-10 text-2xl block">
                  <FontAwesomeIcon icon={faXmark} />
                </span>
              </button>
              <div className="mb-[24px]">
                {/* className="hover:border-none w-[100%]  flex justify-between mb-[24px] rounded-lg bg-gray-100" */}
                <form className="flex relative items-center">
                  <FontAwesomeIcon
                    className="absolute z-10 ml-[24px] text-[#a1a1a1]"
                    icon={faMagnifyingGlass}
                  />
                  <input
                    type="search"
                    id="search"
                    className=" w-[100%] h-[64px] focus:border-blue-500 pt-[20px] pr-[24px] pb-[20px] pl-[64px] relative border-[2px] rounded-lg border-[#d7d7d7] outline-none "
                    placeholder="Начните поиск"
                    value={search}
                    onChange={handleChangeSearch}
                    required
                  />
                </form>
              </div>
              {/*body*/}
              <div className="overflow-y-scroll">
                <ul className="grid grid-cols-1 md:grid-cols-3 mm:grid-cols-2 list-none p-0 m-0">
                  {data &&
                    data.city &&
                    data.city.map((item) => (
                      <li
                        key={item.id}
                        className=" flex flex-col text-start break-inside-avoid pb-[16px] pt-0 pr-0 pl-0"
                      >
                        <p className="no-underline text-[16px] cursor-pointer  text-[#a1a1a1] hover:text-[#0A84FF] ">
                          {item.name}
                        </p>
                      </li>
                    ))}
                </ul>
                {!data.city?.length && (
                  <div className="antialiased">
                    <div className="text-start">
                      <span className="tex-[16px] text-[#a1a1a1]">
                        EyesBerg.uz в этом городе еще не открылись
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

// git fetch origin
// git checkout 4-location-section
