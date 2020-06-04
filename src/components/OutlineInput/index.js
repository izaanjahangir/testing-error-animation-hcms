import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';

import constants from '../../config/constants';
import TextInput from './TextInput';
import GeneralStyle from '../../screens/GeneralStyle';
import style from './style';

function OutlineInput(props) {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;

  useEffect(function () {
    setTimeout(function () {
      fadeIn();
    }, 2000);
  }, []);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim2, {
      toValue: constants.WINDOW_HEIGHT * 0.038,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const r = fadeAnim.interpolate({
    inputRange: [0, 3],
    outputRange: ['0deg', '3deg'],
  });

  console.log('r =>', r);
  return (
    <View style={[style.container, props.containerStyle]}>
      <Animated.View
        style={[
          style.errorMainContainer,
          {transform: [{translateY: fadeAnim2}]},
        ]}>
        <Animated.View
          style={[
            style.errorContainer,
            {transform: [{rotateZ: r}]},
          ]}></Animated.View>
        <Text style={style.error}>Required</Text>
      </Animated.View>
      {props.type === 'text' && <TextInput {...props} />}
      <View style={style.labelContainer}>
        <Text style={style.label}>{props.label}</Text>
      </View>
      {!!props.belowButton && (
        <TouchableOpacity style={GeneralStyle.alignSelfEnd}>
          <View style={style.belowButtonContainer}>
            <Text style={style.belowButtonText}>{props.belowButton}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

OutlineInput.defaultProps = {
  containerStyle: {},
  secureTextEntry: false,
  type: 'text',
};

module.exports = OutlineInput;
