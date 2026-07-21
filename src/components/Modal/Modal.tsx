import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import type { ReactNode } from "react";

interface Modal {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }) {
  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button type="button" onClick={onClose} className={css.modalButton}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
