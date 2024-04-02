import Header from "../LayoutComponents/Header/header";

function HeaderOnly({children}) {
    return (
        <div>
            <Header/>

            <div className="Content">
                {children}
            </div>
        </div>
    )
}

export default HeaderOnly;