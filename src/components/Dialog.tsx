import { useCallback } from "react";
import { bindDialogControls, closeDialog } from "../store/dialogActions";

export default function Dialog() {
  const refCallback = useCallback((ref: HTMLDialogElement | null) => {
    bindDialogControls(ref?.showModal.bind(ref), ref?.close.bind(ref));
  }, []);

  return (
    <dialog
      onClose={(e) => {
        closeDialog();
      }}
      ref={refCallback}
      className="modal"
    >
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg pb-4">Hi!</h3>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
