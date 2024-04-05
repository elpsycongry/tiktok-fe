import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from "../../../../assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical, faKeyboard,
    faMagnifyingGlass,
    faSpinner
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import {useEffect, useState} from "react";
import {Wrapper as WrapperPopper} from "../../../Popper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu/menu";
// import 'tippy.js/dist/tippy.css';

let cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    let menuItems = [
        {icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English'
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
            title: 'Feedback and help'
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard}/>,
            title: 'Keyboard shortcuts'
        }
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logoLink} alt='tiktok logo'/>
                </div>
                <Tippy
                    placement="bottom"
                    interactive
                    // visible={searchResult.length === 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <WrapperPopper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </WrapperPopper>
                        </div>
                    )}>
                    <div className={cx('search')}>
                        <input placeholder="Search account and videos" spellCheck='true'/>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                </Tippy>

                <div className="actions">
                    <Button text>Register</Button>
                    <Button primary>Log in</Button>
                    <Menu items={menuItems}>
                        <button className={cx('more-button')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </button>
                    </Menu>
                </div>

            </div>
        </header>
    )
}

export default Header;