import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { getList } from '../utils/news';



const Home = ({ navigation }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList('https://apps-tests.s3-eu-west-1.amazonaws.com/react-native/articles.json')
      .then(items => {
        if (mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  const checkDetails = (index) => {
    const indexOffset = index + 1 // images are from 1 not 0
    navigation.navigate('NewsArticle', { id: indexOffset })
  }

  console.log(list)
  return (
    <ScrollView>
      {list.map((item, index) =>
        <TouchableOpacity key={index} onPress={() => checkDetails(index)}>
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  subtitle: {
    fontSize: 14
  }
})