import Button from "../../Button";
import classNames from "classnames/bind";
import styles from "./menu.module.scss"

const cx = classNames.bind(styles)
function MenuItem({data, onClick, action}){
    console.log(!!action)
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    if (!!action){
        return (
            <Button className={classes} leftIcon={data.icon} to={data.to} onClick={action}>
                {data.title}
            </Button>
        )
    }

    return(
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    )
}

export default MenuItem;