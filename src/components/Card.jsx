/* Card */
import { View } from 'react-native';
import { useDarkMode } from '../hooks/useDarkMode';

const Card = ({children}) => {

  const {whiteColor, blackColor} = useDarkMode();

  return (
    <View style={{borderWidth: 2, borderColor: whiteColor, width: "100%", height: "auto", marginBottom: 15, borderRadius: 10, backgroundColor: whiteColor, overflow: "hidden", paddingRight: 10}}>
      {children}
    </View>
  )
}; export default Card;
