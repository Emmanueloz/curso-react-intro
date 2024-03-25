import { TodoIcon } from ".";
import PropTypes from "prop-types";

DeleteIcon.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

function DeleteIcon({ onDelete }) {
  return <TodoIcon type="delete" color="grey" onClick={onDelete} />;
}

export { DeleteIcon };
