/* useMostrar */
import { useState } from "react";

export const useMostrar = () => {

    const [mostrar, setMostrar] = useState(false);

    const handleMostrar = () => {
        setMostrar(!mostrar);
    };

    return {handleMostrar, mostrar};
};