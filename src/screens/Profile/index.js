import React from 'react';
import { View, Image, Text, ImageBackground, ScrollView, TouchableOpacity, ListView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Mainproducts from '../../components/products/Mainproducts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Index = ({ navigation }) => {
  const ListContent = [
    {
      content: "Facilisis mauris sit amet massa vitae"
    },
    {
      content: "Tortor con dimentum lacinia sociis "
    },
    {
      content: "Natoque penatibus et magnis disaucibus"
    },
  ]
  return (
    <View style={{ marginBottom: 8 * vh }}>
      {/* Fixed Header */}
      <View style={[styles.header, { flexDirection: 'row', alignItems: 'center' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackBtn}>
          <Ionicons name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>ABOUT US</Text>
      </View>
      {/* Product scrollable content */}
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          {/* Banner */}
          {/* <ImageBackground style={styles.banners} source={require('../../../assets/images/banner.png')} >
            <View style={styles.bannersContent}>
              <Text style={styles.bannerHeading}>Popular</Text>
              <Text style={styles.bannerHeading}>Collections</Text>
            </View>
          </ImageBackground> */}
          {/* categories Component */}
          <View style={styles.container}>
            <Text style={styles.primHeading}>All You Need To Know About
              Fashion Love Market</Text>
            <Text style={styles.primText}>
              Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Quisque egestas diam in arcu cursus euismod quis.
            </Text>
            <Text style={styles.primText}>
              Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Quisque egestas diam in arcu cursus euismod quis.
              Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Quisque egestas diam in arcu cursus euismod quis.
            </Text>
            <Text style={[styles.primText, { marginBottom: 2 * vh }]}>
              Rare suspendisse sed nisi lacus sed viverra. Elementum nisi quis elei fend quam adipiscing vitae. At erat pellen tes que adipiscing commodo elit at imperdiet dui accumsan.
            </Text>
            {
              ListContent.map((item, index) => {
                return (
                  <Text style={styles.list} key={index}>{item.content}</Text>
                )
              })
            }
            <Text style={[styles.primText, { marginTop: 2 * vh }]}>
              Rare suspendisse sed nisi lacus sed viverra. Elementum nisi quis elei fend quam adipiscing vitae. At erat pellen tes que adipiscing commodo elit at imperdiet dui accumsan
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Index; 
