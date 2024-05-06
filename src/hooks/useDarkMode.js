import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../features/globalSlice";

export const useDarkMode = () => {
    const dispatch = useDispatch();
    const [isEnabled, setIsEnabled] = useState(false);

    const handleTheme = () => {
        setIsEnabled(initialState =>!initialState);
        dispatch(setDarkMode(!isEnabled));
    };

    return {handleTheme, isEnabled};
};