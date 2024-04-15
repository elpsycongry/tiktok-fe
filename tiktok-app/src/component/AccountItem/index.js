import classNames from "classnames/bind";
import styles from './accountItem.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import Image from "../image/image";

const cx = classNames.bind(styles)

function AccountItem({data: user }) {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={user.avatar}
                alt={user.full_name}
            />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{user.full_name}</span>
                    {user.tick && <FontAwesomeIcon icon={faCheckCircle}/>}
                </h4>
                <span className={cx('desc')}>description</span>
            </div>
        </div>
    )
}

export default AccountItem;