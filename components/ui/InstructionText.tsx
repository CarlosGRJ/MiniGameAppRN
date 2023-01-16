import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

import Colors from '../../constants/colors';

interface InstructionTextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const InstructionText: React.FC<InstructionTextProps> = ({
  children,
  style,
}) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
