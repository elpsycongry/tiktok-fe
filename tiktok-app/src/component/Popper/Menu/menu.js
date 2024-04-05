import Tippy from "@tippyjs/react";
import {Wrapper as WrapperPopper} from "../index";
import AccountItem from "../../AccountItem";
import classNames from "classnames/bind";
import styles from "./menu.module.scss"
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles)

function Menu({children, items = []}) {
    const renderItem = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item}/>
        })
    }

    return (
        <Tippy
            // fix lỗi tippy không tự động ẩn
            animation={false}
            placement="bottom-end"
            delay={[0, 700]}
            interactive
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <WrapperPopper>
                        {renderItem()}
                    </WrapperPopper>
                </div>
            )}>
            {children}
        </Tippy>

    )
}

export default Menu;