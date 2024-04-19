/* ProductItem */

import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { setIdselected } from '../features/shopSlice';

const ProductItem = ({ product, navigation }) => {

  const dispatch = useDispatch();

  const handleNavigate = () => {
    dispatch(setIdselected(product.title));
    navigation.navigate('ItemDetail', {productId: product.id})
  }

  return (
      <View style={styles.ProductItem}>
        <Card>
          <Pressable style={styles.ProductItem__Pressable} onPress={handleNavigate}>
            <Image style={styles.Pressable__Image} source={{uri: product.image}} />
            <View style={styles.Pressable__Text}>
              <Text style={styles.Text__Title}>{product.title}</Text>
              <Text style={styles.Text__Price}>${product.price}</Text>
            </View>
          </Pressable>
        </Card>
      </View>
  )
}; export default ProductItem;

const styles = StyleSheet.create({
  ProductItem: {
    backgroundColor: "#000",
  },
  ProductItem__Pressable: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
    height: "auto"
  },
  Pressable__Image: {
    width: "30%",
    aspectRatio: 1,
  },
  Pressable__Text: {
    width: "70%",
    paddingLeft: 10,
    paddingRight: 10,
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
