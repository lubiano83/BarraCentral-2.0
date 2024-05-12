/* useDarkMode */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../features/globalSlice";

export const useDarkMode = () => {
    const dispatch = useDispatch();
    const [isEnabled, setIsEnabled] = useState(false);
    const isDark = useSelector(state => state.globalReducer.value.darkMode);

    const handleTheme = () => {
        setIsEnabled(initialState =>!initialState);
        dispatch(setDarkMode(!isEnabled));
    };

    const whiteColor = isDark ? "#000" : "#fff";
    const blackColor = isDark ? "#fff" : "#000";

    return {handleTheme, isEnabled, whiteColor, blackColor};
};