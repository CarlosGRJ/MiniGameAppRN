import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

interface NumberContainerProps {
  children?: React.ReactNode;
}

const deviceWidth = Dimensions.get("window").width;

const NumberContainer: React.FC<NumberContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 450 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36, 
    // fontWeight: 'bold',
    fontFamily: 'open-sans-bold'
  },
});
