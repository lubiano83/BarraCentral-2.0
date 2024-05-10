/* Navigator */
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from "../navigation/BottomTab";
import AuthStack from "../navigation/AuthStack";
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from "../features/userSlice";
import { getSession } from "../persistence/index";
import { useEffect } from'react';

const Navigator = () => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer.value);

  useEffect(() => {
    (async() => {
      try {
        const response = await getSession();
        if(response.rows._array.length){
          const user = response.rows._array[0];
          dispatch(setUser({
            email: user.email,
            localId: user.localId,
            idToken: user.token
          }))
        }
      } catch (error) {
        alert("There was an error.")
      }
    })()
  }, []);

  return (
    <NavigationContainer>
        { user ? <BottomTab /> : <AuthStack /> }
    </NavigationContainer>
  )
}; export default Navigator;