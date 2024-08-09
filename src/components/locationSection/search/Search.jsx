import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { data as items } from "../../../constants/data";

const Search = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  //   const [changeData, setChangeData] = useState("");

  const handleFocus = () => {
    setShowInfo(true);
  };
  // const navigate = useNavigate();
  const handleBlur = () => {
    setTimeout(() => setShowInfo(false), 100);
  };
  const handleSelect = (item) => {
    console.log(item);
    // navigate("");
    // fetchData(item.id)
  };
  useEffect(() => {
    setData(items.content);
    // fetchData()
  }, []);

  const filterData = (data, value, name) =>
    data.content[name].filter((i) => i.name.toLowerCase().includes(value.toLowerCase()));

  const handleChangeSearch = (e) => {
    const { value } = e.target;

    setSearch(value);
    setData((prev) => ({
      ...prev,
      regions: filterData(items, value, "regions"),
    }));
  };

  return (
    <div className="input-container relative w-full">
      <div className="flex-grow h-[40px] flex items-center rounded-lg   bg-[#F7F7F9] flex-1 ">
        <FontAwesomeIcon className="ml-5 text-[#d6d6e1]" icon={faMagnifyingGlass} />
        <input
          type="search"
          id="search"
          className="h-[40px] outline-none active:border-none rounded-lg border-none pl-3 bg-transparent w-full placeholder:text-[#757575]    "
          placeholder="Услуга, вакансия или ключевое слово"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={search}
          onChange={handleChangeSearch}
        />
      </div>
      {showInfo && (
        <div className="fixed md:absolute left-0-important md:top-[45px] justifiy-start top-[10rem] md:w-[100%] p-4 w-[100vw] md:h-[286px]   h-[100vh] bg-white md:rounded-[1.2rem] md:border md:border-[#eaeaef] md:shadow-md">
          <div className="p-0 mb-3   leading-6 flex justify-start ">
            <p className="  text-[#adadc2] pl-2.5 uppercase text-xs ">ПОПУЛЯРНЫЕ УСЛУГИ</p>
          </div>
          <div className="mm:h-[200px] h-[100vh] overflow-y-auto">
            {data &&
              data.regions &&
              data.regions.map((item) => (
                <div
                  onClick={() => handleSelect(item)}
                  key={item.id}
                  className="hover:bg-[#f7f7f9] w-full flex justify-between items-center font-medium mb-1 cursor-pointer p-2.5 px-3 rounded-xl text-[#575761]"
                >
                  <div>{item.name}</div>
                  <div>
                    <FontAwesomeIcon className="pr-1 opacity-40 " icon={faChevronRight} />
                  </div>
                </div>
              ))}

            {!data.regions?.length && (
              <div className="text-[#575761] p-3 flex justify-center content-center flex-col items-center ">
                <span className="flex justify-between flex-col items-center">
                  <FontAwesomeIcon
                    className="w-[50px] h-[50px] mb-5 text-[#d6d6e1] dark:text-gray-400"
                    icon={faMagnifyingGlass}
                  />
                </span>
                <div className="flex justify-center flex-col items-center">
                  <span className="text-[#252742] mb- font-extrabold">Ничего не найдено</span>
                  <span className="text-[#adadc2]">Попробуйте иначе сформулировать запрос</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
