import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function Modal({ children }) {
  //el uso de createPortal no es necesario en este contexto
  const { openModal } = useContext(TodoContext);

  return (
    <dialog open={openModal} className="Modal">
      {children}
    </dialog>
  );
}

export { Modal };
