import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Collapsible from 'react-native-collapsible';

import constants from '../../../config/constants';
import style from './style';

let alphabets = [...constants.ALPHABETS];

function AlphaDropdown(props) {
  const [isDropdown, setIsDropdown] = useState(false);

  function handlePress() {
    if (!isDropdown) {
      alphabets = [...constants.ALPHABETS];
    }

    setIsDropdown(!isDropdown);
  }

  function handleListPress(item) {
    handlePress();
    props.onSelect(item);
  }

  function renderList(item, index) {
    const elem = [];

    if (index === 0) {
      const alphabet = alphabets.shift();

      elem.push(
        <View style={style.listHeadingContainer}>
          <Text style={style.listHeading}>{alphabet}</Text>
        </View>,
      );
    }

    if (index > 0) {
      const previousLetter = props.data[index - 1][
        props.keyToRender
      ][0].toLowerCase();
      const currentLetter = item[props.keyToRender][0].toLowerCase();

      if (previousLetter !== currentLetter) {
        const alphabet = alphabets.shift();

        elem.push(
          <View style={style.listHeadingContainer}>
            <Text style={style.listHeading}>{alphabet}</Text>
          </View>,
        );
      }
    }

    elem.push(
      <TouchableWithoutFeedback onPress={() => handleListPress(item)}>
        <View style={style.listContainer}>
          <Text style={style.list}>{item[props.keyToRender]}</Text>
        </View>
      </TouchableWithoutFeedback>,
    );
    return elem;
  }

  return (
    <>
      <View style={style.container}>
        {props.icon && <Image style={style.icon} source={props.icon} />}
        <TouchableWithoutFeedback onPress={handlePress}>
          <View
            secureTextEntry={props.secureTextEntry}
            style={[
              style.input,
              !props.icon && style.inputPaddingHorizontalWithoutIcon,
            ]}>
            <Text style={style.text}>{props.value}</Text>
          </View>
        </TouchableWithoutFeedback>
        {props.icon && (
          <Image
            style={style.dropdownIcon}
            source={require('../../../assets/icon/Dropdown.svg')}
          />
        )}
      </View>
      <Collapsible style={{width: '100%'}} collapsed={!isDropdown}>
        <View style={[style.dropdownContainer]}>
          <View style={style.dropdownLeftSection}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{width: '100%'}}
              nestedScrollEnabled={true}>
              {props.data.map(renderList)}
            </ScrollView>
          </View>
          <View style={style.dropdownRightSection}>
            {constants.ALPHABETS.map((item) => (
              <Text style={style.alpha}>{item}</Text>
            ))}
          </View>
        </View>
      </Collapsible>
    </>
  );
}

AlphaDropdown.defaultProps = {
  value: '',
  onSelect: function () {},
  keyToRender: 'key',
};

module.exports = AlphaDropdown;
