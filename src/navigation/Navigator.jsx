/* Navigator */

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from "../navigation/BottomTab";
import AuthStack from "../navigation/AuthStack";
import { useSelector } from 'react-redux';

const Navigator = () => {

    const { user } = useSelector(state => state.authReducer.value);

  return (
    <NavigationContainer>
        {/* { user ? <BottomTab /> : <AuthStack /> } */}
        <BottomTab />
    </NavigationContainer>
  )
}; export default Navigator;

const styles = StyleSheet.create({});