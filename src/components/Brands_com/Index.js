import React from 'react';
import vw from '../../Units/vw';
import { View, StyleSheet, Image, Text } from 'react-native';
const Index = (props) => {
  return (
    <View style={styles.mainproductWrap}>
      <Image source={props.data.brandImg} style={styles.productImg} />
    </View>
  );
}
const styles = StyleSheet.create({
  mainproductWrap: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    minHeight: 17 * vh,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.78,
    elevation: 15,
    marginHorizontal: 2 * vw
  },
  productImg: {
    width: 20 * vw,
    height: 8 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
})

export default Index;