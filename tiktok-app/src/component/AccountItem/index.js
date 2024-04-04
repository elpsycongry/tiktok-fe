import classNames from "classnames/bind";
import styles from './accountItem.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g'/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                <span >Nguyen Van A</span>
                <FontAwesomeIcon  icon={faCheckCircle}/>
                </h4>
                <span className={cx('desc')}>description</span>
            </div>
        </div>
    )
}

export default AccountItem;