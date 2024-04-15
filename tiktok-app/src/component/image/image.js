import {forwardRef, useState} from "react";
import images from "../../assets/images";

let Image = forwardRef(({errorImage = images.noImage ,  src, alt, ...props}, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
            setFallBack(errorImage)
    }

    return (
            <img ref={ref} src={fallBack || src} alt={alt}  {...props} onError={handleError}/>
        )
    }
)
export default Image;