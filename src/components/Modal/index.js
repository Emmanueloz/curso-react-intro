import "./Modal.css";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { TodoIcon } from "../TodoIcon";

function Modal({ title = "Modal", children }) {
  //el uso de createPortal no es necesario en este contexto
  const { openModal, setOpenModal } = useContext(TodoContext);

  return (
    <dialog className="modal-background" open={openModal}>
      <div className="modal">
        <header>
          <h1>{title}</h1>
          <TodoIcon
            type="delete"
            color="grey"
            onClick={() => setOpenModal((state) => !state)}
          />
        </header>
        <main>{children}</main>
      </div>
    </dialog>
  );
}

export { Modal };
