/* Titulo */

import { Text } from 'react-native';

const Titulo = ({title}) => {
  
  return (
    <Text style={{fontSize: 36, fontWeight: "bold", color: "#fff", textAlign: "center", paddingVertical: 10}}>
        {title}
    </Text>
  )
}; export default Titulo;