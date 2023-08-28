import PropTypes from "prop-types";
const BtnPrincipal = (props) => {
  return (
    <>
      <button
        className={`block w-full rounded-lg border-none px-5 py-4 text-sm font-semibold text-white mb-2 ${props.color} ${props.hover}`}
      >
        {props.btntext}
      </button>
    </>
  );
};

BtnPrincipal.propTypes = {
  btntext: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  hover: PropTypes.string.isRequired,
};

export default BtnPrincipal;
