import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
export default function CategoryProducts({route, navigation}) {
  const item = route.params;
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    //GET request
    try {
      const response = await fetch(
        'https://dummyjson.com/products/category/' + item?.item,
      );
      const json = await response.json();
      setProducts(json?.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderProducts = ({item}) => {
    const addToCart = selectedItem => {
      const updatedCartItems = [...cartItems, selectedItem];
      setCartItems(updatedCartItems);
    };
    return (
      <View style={styles.itemView2}>
        <Image
          style={styles.itemImageView}
          source={{
            uri: item?.thumbnail,
          }}
          resizeMode="cover"
        />
        <Text style={styles.itemText} numberOfLines={1}>
          {item?.title}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.itemText}>Price: {item?.price}</Text>
          <TouchableOpacity
            onPress={() => {
              addToCart(item),
                ToastAndroid.show('Added to Cart', ToastAndroid.SHORT);
            }}>
            <Fontisto name="shopping-basket-add" size={20} color={'#000000'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <>
          <View style={styles.header}>
            <TouchableOpacity  onPress={()=>navigation.goBack()}>
            <FontAwesome6 name="arrow-left" size={20} color={'#000000'} />
            </TouchableOpacity>
            <View style={styles.headerText}>
            <Text style={styles.heading}>{item?.item}</Text>
            </View>
          </View>
          <FlatList
            style={styles.flatlist}
            showsVerticalScrollIndicator={false}
            data={products}
            showsHorizontalScrollIndicator={false}
            renderItem={renderProducts}
            keyExtractor={item => item?.id}
            numColumns={2}
          />
        </>
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate('CartScreen', {cartItems})}
        style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}
