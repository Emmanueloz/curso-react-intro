import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";
import PropTypes from "prop-types";
import "./TodoIcon.css";

TodoIcon.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`Icon-container Icon-svg Icon-container-${type}`}
    >
      {iconTypes[type](color)}
    </button>
  );
}

export { TodoIcon };
