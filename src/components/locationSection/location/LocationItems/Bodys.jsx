import { useEffect, useState } from "react";
import { data as items, data1 } from "../../../../constants/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// import axios from "axios";
const BodyLocation = ({ setShowModal }) => {
  const [search, setSearch] = useState("");
  //   const [isActive, setIsActive] = useState(false);

  // const [selectedOption, setSelectedOption] = useState("");
  // const nagigate = useNavigte()
  //   const params = useParams();

  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [changeData, setChangeData] = useState("");
  // const [filter,setFilter] = useState({
  //   slug:'',
  //   search: ''
  // })

  // const fetchData = (id = '')=>{
  //   axios.get('/list', {params: {
  //     region_id: id
  //   }}).then(res=>{
  //     setData(res.data.content)
  //   })
  //}

  //   const fetchData = (id = "") => {
  //     axios
  //       .get("http://localhost:3001/list", {
  //         params: {
  //           region_id: id,
  //           search: text,
  //           slug:slug
  //         },
  //       })
  //       .then((res) => {
  //         setData(res.data.content);
  //         setData(res.data.contentc)
  //       });
  //   };

  const handleSelect = (item) => {
    setChangeData(item);
    setData(data1.content);

    // fetchData(item.id)
  };

  const handleBack = () => {
    // fetchData()
    setData(items.content);
    setChangeData("");
  };

  const handleLink = (item) => {
    console.log(item);
    setActiveIndex(item.id);
    // navigate(item.slug)
  };
  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  useEffect(() => {
    setData(items.content);
  }, []);

  const filterData = (data, value, name) =>
    data.content[name].filter((i) => i.name.toLowerCase().includes(value.toLowerCase()));

  const handleChangeSearch = (e) => {
    const { value } = e.target;

    setSearch(value);
    if (changeData)
      setData((prev) => ({
        ...prev,
        cities: filterData(data1, value, "cities"),
      }));
    else
      setData((prev) => ({
        ...prev,
        regions: filterData(items, value, "regions"),
        cities: filterData(items, value, "cities"),
      }));
    // fetchData(search)
  };

  //  const handleActiveCities = () => {
  //     setIsActive(!isActive);
  //   };
  return (
    <div className="w-[100%] h-[100%] bg-opacity-35  text-[14px] bg-[rgba(37,39,66,0.6)] fixed top-0 left-0  flex justify-center z-[9999] items-center ">
      <div className="border-0 mm:h-[500px] mm:w-[400px]  w-[100vw] h-[100vh] p-4 mm:rounded-[1.2rem]  shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
        <div className="flex items-center justify-between rounded-t">
          <h3 className="text-2xl text-[#252742] font-extrabold">Выберите город</h3>
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black   opacity-35 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={setShowModal}
          >
            <span className="text-black h-6 w-6 pl-10 pr-5 text-2xl block">
              <FontAwesomeIcon icon={faXmark} />
            </span>
          </button>
        </div>
        <div className="input__wrapper mb-2 mt-5 hover:border-none w-[100%]  flex justify-between rounded-lg bg-gray-100">
          <div className="relative w-[100%] border-none  ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FontAwesomeIcon className="w-4 h-4 text-[#d6d6e1]" icon={faMagnifyingGlass} />
            </div>
            <input
              type="search"
              id="search"
              className="block w-[100%] bg-[#f7f7f9] pt-[10px] pb-[10px] pr-[16px] ps-10 text-[1.1rem]  text-gray-900 hover:border-none rounded-lg   dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white  dark:focus:ring-blue-700 "
              placeholder="Поиск"
              value={search}
              onChange={handleChangeSearch}
              required
            />
          </div>
        </div>
        {changeData && (
          <div className="flex justify-start items-center cursor-pointer" onClick={handleBack}>
            <i className="fa-solid fa-chevron-left  pr-1 opacity-40 "></i>{" "}
            <span className="ml-3 text-[#252742] text-base font-bold leading-[2.4rem]">{changeData.name}</span>
            <span className="text-[#575761] ml-[4px]"> ({data.cities?.length})</span>
          </div>
        )}
        <div className="mm:h-[400px] h-[90vh] overflow-y-auto">
          {data &&
            data.cities &&
            data.cities.map((item) => (
              <div
                key={item.id}
                onClick={() => handleLink(item)}
                className="hover:bg-[#f7f7f9] w-full flex justify-between items-center mb-1 cursor-pointer p-2.5 text-[#575761] font-normal rounded-xl"
              >
                <div>{item.name}</div>
                <label>
                  <div
                    className={` flex items-center justify-center  w-5 h-5 rounded-[40%] border-2 ${
                      activeIndex === item.id ? "border-[#4b4be5] opacity-100" : "border-[#575761] opacity-40"
                    }`}
                    // params.dsfa ==== item.slug ? "active" :""
                  >
                    <div
                      className={` w-2 h-2 rounded-[40%] ${activeIndex === item.id ? "bg-[#4b4be5]  " : "bg-white"} `}
                    ></div>
                  </div>
                </label>
              </div>
            ))}
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

          {!data.regions?.length && !data.cities?.length && (
            <div className="text-[#575761] p-3 flex justify-center mt-[30%]  ">
              <div className="flex justify-c11enter content-center flex-col items-center">
                <span className="flex justify-center flex-col items-center">
                  <FontAwesomeIcon
                    className="w-[50px] h-[50px] mb-5 text-[#d6d6e1] dark:text-gray-400"
                    icon={faMagnifyingGlass}
                  />
                </span>
                <div className="flex justify-center contents-center flex-col items-center">
                  <span className="text-[#252742] mb- font-extrabold">Ничего не найдено</span>
                  <span className="text-[#adadc2]">Попробуйте иначе сформулировать запрос</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyLocation;

BodyLocation.propTypes = {
  setShowModal: Function,
};
