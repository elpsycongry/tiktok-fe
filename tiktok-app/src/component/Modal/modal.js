import "./modal.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

function Modal({title, subTitle, onClose, onSubmit, onCancel,children}) {

    return (
        <div className="modal-container" onClick={onClose}>
            <div onClick={(e) => {e.stopPropagation()}}>
                <div className="modal">
                    <div className="header">
                        <FontAwesomeIcon onClick={onClose} className="close-btn" icon={faClose}/>
                        <h2 className="title">{title}</h2>
                        <p className="subtitle">{subTitle}</p>
                    </div>
                    {children}
                    <div className="modal__footer">
                        <p className="c">Bạn không có tài khoản ? <span >Đăng ký</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;