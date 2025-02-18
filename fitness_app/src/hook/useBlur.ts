import { useState } from "react"

const useBlur = () => {
    const [isBlurHeart, setIsBluirHeart] = useState<boolean>(false);
    const [isBluirMaps, setIsBluirMaps] = useState<boolean>(false);
    const [isBluirHome, setIsBluirHome] = useState<boolean>(false);
 
    const handleBluirHeart = () =>{
        setIsBluirHeart(true);
        setIsBluirMaps(false);
        setIsBluirHome(false);
    };

    const handleBluirMaps = () =>{
        setIsBluirHeart(false);
        setIsBluirMaps(true);
        setIsBluirHome(false);
    };

    const handleBluirHome = () =>{
        setIsBluirHeart(false);
        setIsBluirMaps(false);
        setIsBluirHome(true);
    };

    return [
        isBlurHeart,
        isBluirMaps,
        isBluirHome,
        handleBluirHeart,
        handleBluirMaps,
        handleBluirHome
    ] as const;
}

export default useBlur;