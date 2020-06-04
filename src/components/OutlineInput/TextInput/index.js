import React from 'react';
import { View, Image, TextInput as ReactNativeTextInput } from 'react-native';

import style from './style';

function TextInput(props) {
  return (
    <View style={style.container}>
      {props.icon && <Image style={style.icon} source={props.icon} />}
      <ReactNativeTextInput
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        style={[
          style.input,
          !props.icon && style.inputPaddingHorizontalWithoutIcon, { height: props.height }
        ]}
      />
    </View>
  );
}

TextInput.defaultProps = {
  onChangeText: function () { },
  value: '',
};

module.exports = TextInput;
