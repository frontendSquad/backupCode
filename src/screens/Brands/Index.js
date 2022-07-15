import React from 'react';
import { View, Image, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import b1 from '../../../assets/images/brand1.png';
import b2 from '../../../assets/images/brand2.png';
import b3 from '../../../assets/images/brand3.png';
import b4 from '../../../assets/images/brand4.png';
import b5 from '../../../assets/images/brand5.png';
import b6 from '../../../assets/images/brand6.png';
import b7 from '../../../assets/images/brand7.png';
import b8 from '../../../assets/images/brand8.png';
import b9 from '../../../assets/images/brand9.png';
import b10 from '../../../assets/images/brand10.png';
import b11 from '../../../assets/images/brand11.png';
import b12 from '../../../assets/images/brand12.png';
import b13 from '../../../assets/images/brand13.png';
import b14 from '../../../assets/images/brand14.png';
import b15 from '../../../assets/images/brand15.png';
import Brands_com from '../../components/Brands_com/Index';
import StepForm from '../../screens/StepForm/index'
const Index = ({ navigation }) => {
  const mainBrandData = [
    {
      key: '1',
      brandImg: b1,
    },
    {
      key: '2',
      brandImg: b2,
    },
    {
      key: '3',
      brandImg: b3,
    },
    {
      key: '4',
      brandImg: b4,
    },
    {
      key: '5',
      brandImg: b5,
    },
    {
      key: '6',
      brandImg: b6,
    },
    {
      key: '7',
      brandImg: b7,
    },
    {
      key: '8',
      brandImg: b8,
    },
    {
      key: '9',
      brandImg: b9,
    },
    {
      key: '10',
      brandImg: b10,
    },
    {
      key: '11',
      brandImg: b11,
    },
    {
      key: '12',
      brandImg: b12,
    },
    {
      key: '13',
      brandImg: b13,
    },
    {
      key: '14',
      brandImg: b14,
    },
    {
      key: '15',
      brandImg: b15,
    },
    {
      key: '16',
      brandImg: b1,
    },
    {
      key: '17',
      brandImg: b2,
    },
    {
      key: '18',
      brandImg: b3,
    },

  ];
  return (
    <View style={{ marginBottom: 20 * vh }}>
      {/* Fixed Header */}
      <View style={[styles.header, { flexDirection: 'row', alignItems: 'center' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackBtn}>
          <Ionicons name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Brands</Text>
      </View>
      {/* Product scrollable content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <View style={styles.container}>
            <Text style={styles.pageTitle}>BRANDS</Text>
            <View style={[styles.row, { flexWrap: 'wrap', marginBottom: 10 }]} >
              {
                mainBrandData.map((item, index) => {
                  return (
                    <View style={[styles.col, { marginVertical: 10 }]} key={index}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("StepForm", { screen: "StepForm" })}
                      >
                        <Brands_com data={item} />
                      </TouchableOpacity>
                    </View>
                  );
                })
              }
            </View>
          </View>
        </View>
      </ScrollView >
    </View>
  );
}

export default Index;
