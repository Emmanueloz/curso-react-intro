import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";
import PropTypes from "prop-types";

TodoIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

const iconTypes = {
  check: <CheckSVG />,
  delete: <DeleteSVG />,
};

function TodoIcon({ type }) {
  return (
    <button className={`Icon Icon-svg Icon-${type}`}>{iconTypes[type]}</button>
  );
}

export { TodoIcon };
