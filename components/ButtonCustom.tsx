import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

interface ButtonCustomProps extends TouchableOpacityProps {
  disable?: boolean;
  onLongPress?: () => void;
  width?: number | any;
  height?: number | any;
  backgroundColor?: string;
}

const ButtonCustom: React.FC<ButtonCustomProps> = props => {
  return (
    <TouchableOpacity
      disabled={props.disable}
      activeOpacity={props.activeOpacity}
      onLongPress={props.onLongPress} // you can use function props
      style={[
        {
          width: props.width,
          height: props.height,
          backgroundColor: props.backgroundColor,
        }, //you can use custom css props
        styles.btn,
      ]}>
      <Text>Submit</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
