import Tippy from "@tippyjs/react";
import {Wrapper as WrapperPopper} from "../index";
import AccountItem from "../../AccountItem";
import classNames from "classnames/bind";
import styles from "./menu.module.scss"
import MenuItem from "./MenuItem";
import Header from "./Header";
import {useState} from "react";


const cx = classNames.bind(styles)

function Menu({children, items = []}) {

    const [history, setHistory] = useState([{data: items, title: ""}]);
    const currentMenu = history[history.length - 1]
    console.log(currentMenu)
    const renderItem = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.children

            return <MenuItem
                key={index}
                data={item}
                onClick={() => {
                    if (isParent) {
                        setHistory((prev) => [...prev, item.children]);
                    }
                }}
            />
        })
    }

    return (
        <Tippy
            // fix lỗi tippy không tự động ẩn
            animation={false}

            placement="bottom-end"
            delay={[0, 700]}
            offset={[12, 8]}
            interactive
            render={attrs => {

              return  (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <WrapperPopper className={cx('menu-popper')}>
                            {
                                history.length > 1
                                &&
                                <Header onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1))
                                }}/>
                            }
                            {renderItem()}
                        </WrapperPopper>
                    </div>
                )}}
            // Trả về trang đàu tiên khi mouth out
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1))
            }}
        >
            {children}
        </Tippy>

    )
}

export default Menu;