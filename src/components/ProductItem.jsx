/* ProductItem */

import { View, StyleSheet, Image, Text} from 'react-native';
import Card from './Card';

const ProductItem = ({ products }) => {

  return (
      <View style={styles.ProductItem}>
        <Card>
          <View style={styles.ProductItem__View}>
            <Image style={styles.View__Image} source={{uri: products.image}} />
            <View style={styles.View__Text}>
              <Text style={styles.Text__Title}>{products.title}</Text>
              <Text style={styles.Text__Price}>{products.price}</Text>
            </View>
          </View>
        </Card>
      </View>
  )
}; export default ProductItem;

const styles = StyleSheet.create({
  ProductItem: {
    backgroundColor: "#000",
  },
  ProductItem__View: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
    height: "auto"
  },
  View__Image: {
    width: "30%",
    aspectRatio: 1,
  },
  View__Text: {
    width: "70%",
    paddingLeft: 10,
  },
  Text__Title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
    width: "100%",
  },
  Text__Price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
  },
});
