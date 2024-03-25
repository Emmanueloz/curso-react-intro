import { TodoIcon } from "./TodoIcon";
import PropTypes from "prop-types";

CompleteIcon.propTypes = {
  completed: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
};

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "green" : "grey"}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
