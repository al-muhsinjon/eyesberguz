import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const SpecLink = ({ text, btnText }) => {
  return (
    <>
      <Link
        className="text-gray font-inter rounded-3xl border border-gray-400 py-2 px-4 mr-6 font-semibold"
        to={"/"}
      >
        {text}
      </Link>

      <Link
        className="text-black-400 font-inter bg-yellow rounded-3xl py-2 px-4 font-semibold"
        to={"/spec"}
      >
        {btnText}
      </Link>
    </>
  );
};

SpecLink.propTypes = {
  text: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};
