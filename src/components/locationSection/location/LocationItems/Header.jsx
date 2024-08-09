import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../Button/Button";

const Header = ({ setShowModal }) => {
  return (
    <Button
      className={`flex font-semibold rounded-md hover:bg-lupa cursor-pointer transition-all duration-300 items-center gap-2`} spanClasses={`text-[14px] text-scarpe leading-normal`} px={`px-4`} py={`py-2`}
      onClick={setShowModal}>
      <FontAwesomeIcon className="mr-2 text-scarpe/60 self-center" icon={faLocationDot} />
      <a className="dropdown-menu mgl-1 ">Tashkent</a>
    </Button>
  );
};

export default Header;

Header.propTypes = {
  setShowModal: Function,
};
