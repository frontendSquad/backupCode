import React from 'react';
import { Text } from 'react-native';
import {
  View, TextInput
} from 'react-native';
import styles from './styles';

const PrimInput = (props) => {
  return (
    <View style={styles.inpWrap} >
      <Text style={styles.inpIcon}>{props.icon}</Text>
      <TextInput
        style={styles.primInp}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
      />
    </View >
  )
}
export default PrimInput