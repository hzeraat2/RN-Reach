import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';


import { WebView } from 'react-native-webview';

import { getList } from '../utils/news';
const NewsArticle = (route) => {
  const [newsItem, setSewsItem] = useState(null);

  const indexId = route.navigation.state.params.id

  useEffect(() => {
    let mounted = true;
    getList(`https://apps-tests.s3-eu-west-1.amazonaws.com/react-native/article/${indexId}.json`)
      .then(items => {
        if (mounted) {
          setSewsItem(items)
        }
      })
    return () => mounted = false;
  }, [])

  const imageUrl = `https://apps-tests.s3-eu-west-1.amazonaws.com/react-native/images/${indexId}.jpg`;

  return (
    <ScrollView>
      {newsItem ?
        <View style={styles.container}>
          <Text style={styles.title}>{newsItem.title}</Text>
          <Text style={styles.subtitle}>{newsItem.subtitle}</Text>
          <Image source={{ uri: imageUrl }}
            style={styles.image} />

          <WebView
            style={styles.htmlContainer}
            javaScriptEnabled={false}
            domStorageEnabled={true}
            source={{ html: newsItem.content }}
          />
        </View>
        : null}

    </ScrollView>
  );
}

export default NewsArticle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  htmlContainer: {
    width: 350,
    height: 350,
    margin: 10,
    fontWeight: 'bold'
  },
  image: {
    width: 350,
    height: 350,
    padding: 5
  },
  title: {
    fontSize: 18,
    width: 350,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  subtitle: {
    fontSize: 12,
    width: 350,
    paddingBottom: 10
  },
  content: {
    fontSize: 14,
    padding: 5
  }
})