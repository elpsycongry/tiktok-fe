import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from "../../../../assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu/menu";
import {UploadIcon} from "../../../icons";
import 'tippy.js/dist/tippy.css';
import Image from "../../../image/image";
import Search from "../../../Search/search";
import Modal from "../../../Modal/modal";
import {useState} from "react";
import LoginForm from "../../../Form/loginForm";

let cx = classNames.bind(styles)

function Header() {

    let currentUser = false;
    const data = window.localStorage.getItem('currentUser');
    if ( data !== null ) currentUser = JSON.parse(data);

    const doLogout = () => {
        window.localStorage.removeItem('currentUser');
    }

    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            separate: true,
            click: doLogout,
        },
    ];
    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logoLink} alt='tiktok logo'/>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary onClick={() => {setLoginModal(true)}} >Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://ltsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                                errorImage="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
            { loginModal &&
                <Modal title={'Login'} onClose={(e) => { setLoginModal(false)}}>
                    <LoginForm></LoginForm>
                </Modal>
            }
            { registerModal &&
                <Modal title={'Login'} onClose={(e) => { setLoginModal(false)}}>
                    <LoginForm></LoginForm>
                </Modal>
            }
        </header>
    )
}

export default Header;