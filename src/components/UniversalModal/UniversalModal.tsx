import { ReactNode } from "react";
import './UniversalModal.css'

export default function UniversalModal({theme, closeModal, children}: {theme: string, closeModal: React.SetStateAction<any>, children?: ReactNode } ) {

  return (
    <div className={ `modal theme-${ theme }` }>
      <div className="modal-inner">
        <span className="close" onClick={ () => closeModal() }></span>
        { children }
      </div>
    </div>
  )
}