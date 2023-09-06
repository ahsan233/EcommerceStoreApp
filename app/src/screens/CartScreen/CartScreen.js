import {View, Text, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function CartScreen({route, navigation}) {
  const {cartItems: initialCartItems} = route.params;
  const [cartItems, setCartItems] = useState(initialCartItems);

  const removeItemFromCart = itemId => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const renderCartItems = ({item}) => {
    return (
      <View style={[styles.itemView2, {flexDirection: 'row'}]}>
        <Image
          style={styles.itemImageView}
          source={{
            uri: item?.thumbnail,
          }}
          resizeMode="cover"
        />
        <View style={{justifyContent: 'center'}}>
          <Text>{item?.brand}</Text>
          <Text>Price: {item?.price}</Text>
        </View>
        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => removeItemFromCart(item.id)}>
          <FontAwesome6 name="xmark" size={20} color={'#000000'} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome6 name="arrow-left" size={20} color={'#000000'} />
        </TouchableOpacity>
        <Text style={styles.heading}>Cart</Text>
      </View>
      <FlatList
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        data={cartItems}
        renderItem={renderCartItems}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => {
          return (
            <View style={styles.dummyTextView}>
              <Text style={styles.dummyText}>No Items in Cart</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
