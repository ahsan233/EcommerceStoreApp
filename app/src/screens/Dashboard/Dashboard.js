import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';

export default function Dashboard({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    //GET request
    try {
      const response = await fetch('https://dummyjson.com/products/categories');
      const json = await response.json();
      //console.log('All Categories=' + JSON.stringify(json));
      setCategories(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const renderCategories = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation?.navigate('CategoryProducts', {item})}
        style={styles.itemView2}>
        <Text style={styles.itemText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.AlignContainer}>
        <Text style={styles.heading}>Ecommerce Store</Text>
      </View>
      <Text style={styles.subHeading}>All Categories</Text>
      <View style={styles.AlignContainer}>
        {isLoading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <FlatList
            style={styles.flatlist}
            showsVerticalScrollIndicator={false}
            data={categories}
            showsHorizontalScrollIndicator={false}
            renderItem={renderCategories}
            keyExtractor={item => item}
            numColumns={2}
          />
        )}
      </View>
    </View>
  );
}
