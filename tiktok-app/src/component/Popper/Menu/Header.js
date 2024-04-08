import Tippy from "@tippyjs/react";
import {Wrapper as WrapperPopper} from "../index";
import AccountItem from "../../AccountItem";
import classNames from "classnames/bind";
import styles from "./menu.module.scss"
import MenuItem from "./MenuItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function Header({title, onBack}) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}/>
                <h3 className={cx('header-title')}>{title}</h3>
            </button>
        </header>
    )
}

export default Header;