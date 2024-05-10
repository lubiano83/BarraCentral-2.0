/* useColors */
import { useSelector } from 'react-redux';

export const useColors = () => {
    const isDark = useSelector(state => state.globalReducer.value.darkMode);
    const whiteColor = isDark ? "#000" : "#fff";
    const blackColor = isDark ? "#fff" : "#000";

    return {blackColor, whiteColor};
};