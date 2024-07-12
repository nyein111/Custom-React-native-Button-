import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonCustom from './components/ButtonCustom';

const App = () => {
  const width: number = 90;
  const height: number = 40;
  const backgroundColor: string = 'rgb(190 242 100)';

  const onLongPress = () => Alert.alert('Long Press');

  //this button use you can reduce same code.

  return (
    <View style={styles.containter}>
      <ButtonCustom //it is custom button components call you can use
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        disable={false}
        // activeOpicity={0.3}
        onLongPress={onLongPress}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
