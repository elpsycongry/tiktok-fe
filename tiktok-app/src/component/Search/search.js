import {Wrapper as WrapperPopper} from "../Popper";
import AccountItem from "../AccountItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faMagnifyingGlass, faSpinner} from "@fortawesome/free-solid-svg-icons";
import TippyHeadless from "@tippyjs/react/headless";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames/bind";
import styles from "./search.module.scss"
function Search() {

    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true)
    const inputRef = useRef();
    const [loading, setLoading] = useState(false)
    const cx = classNames.bind(styles)


    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if (!searchValue.trim()) {
                setSearchResult([])
                return
            }
            setLoading(true)

            // Ở đây dùng encodeURI để phòng trường hợp người dùng nhập ký tự query
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
                .then(res => res.json())
                .then(res => {
                    setSearchResult(res.data)
                    setLoading(false)
                })
                .catch(() => {
                    setLoading(false)
                })
        }, 500)
        return () => clearTimeout(timeOutId)
    }, [searchValue]);

    return (
        <TippyHeadless
            onHide={(instance) => {
                requestAnimationFrame(instance.unmount)
            }}

            placement="bottom"
            interactive
            visible={
                showResult && searchResult.length > 0
            }
            onClickOutside={() => {
                setShowResult(false)
            }}

            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <WrapperPopper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result}/>
                        ))}
                    </WrapperPopper>
                </div>
            )}>
            <div className={cx('search')}>
                <input
                    onFocus={() => {
                        setShowResult(true)
                    }}
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search account and videos"
                    spellCheck='true'
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={() => {
                        setSearchValue('');
                        inputRef.current.focus()
                    }}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </div>
        </TippyHeadless>
    )
}

export default Search;