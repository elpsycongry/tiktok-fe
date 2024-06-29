import {LevelHeading} from "./levelHeading";
import {useContext} from "react";

export default function Section({children}) {
    const level = useContext(LevelHeading);
    return (
        <LevelHeading.Provider value={level + 1}>
            <div className={"pl-3"}>
                {children}
            </div>
        </LevelHeading.Provider>
    )
}