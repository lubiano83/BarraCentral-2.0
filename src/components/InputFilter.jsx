/* InputFilter */
import { View, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { useGetProductsByCategoryQuery } from '../services/shopService';
import {useDarkMode} from "../hooks/useDarkMode"


const InputFilter = ({setProductsFiltered, category}) => {

    const {blackColor, whiteColor} = useDarkMode();
    const [keyword, setKeyword] = useState("");
    const {data: productsFetched, error, isLoading} = useGetProductsByCategoryQuery(category);

    useEffect(() => {
        if(!isLoading) {
            // Products filtered by category
            const productsPrefiltered = productsFetched.filter(product => product.category === category);
            // Products filtered by name
            const productsFilter = productsPrefiltered.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
            setProductsFiltered(productsFilter);
        }
    }, [keyword, category, productsFetched, isLoading]);

  return (
    <View style={{width: "100%"}}>
      <TextInput style={{marginTop: 15, width: "100%", height: 50, backgroundColor: whiteColor, borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10, fontSize: 20, marginBottom: 15, color: blackColor}} placeholderTextColor={blackColor} placeholder='Search...' value={keyword} onChangeText={setKeyword} />
    </View>
  )
}; export default InputFilter;

