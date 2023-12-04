import { ReactNode } from "react";

// Styles
import './Modal.css';

type Props = {
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ onClose, children }: Props) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-500 bg-opacity-50">
      <div className="p-8 w-full max-w-2xl max-h-full">
        <div className="relative border-8 border-primary bg-white rounded-3xl shadow-lg p-8 text-center modal">
          { children }
          <button data-testid="modal-close" className="p-4 text-xl bg-tertiary rounded-full absolute -top-10 -right-10" onClick={onClose}>
            ❌
          </button>
        </div>
      </div>
    </div>
  );
};