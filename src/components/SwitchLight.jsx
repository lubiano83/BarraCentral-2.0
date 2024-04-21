/* SwitchLight */

import { View, Switch, StyleSheet } from 'react-native';

const SwitchLight = ({ isEnabled = true, setIsEnabled = () => {} }) => {
    
    const toggleSwitch = () => setIsEnabled(previusState => !previusState);

    return (
        <View style={styles.SwitchLight}>
            <Switch 
                trackcolor={{false: "#fff", true: "#fff"}}
                thumbColor={isEnabled ? "#fff" : "#fff"}
                ios_backgorundColor={"#fff"}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}; export default SwitchLight;

const styles = StyleSheet.create({});
