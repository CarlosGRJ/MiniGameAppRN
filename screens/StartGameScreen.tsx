import React from 'react';
import { TextInput, View } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen: React.FC = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;
