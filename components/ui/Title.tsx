import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

import Colors from '../../constants/colors';

interface TitleProps {
  children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
  },
});
