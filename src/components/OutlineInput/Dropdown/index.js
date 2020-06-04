import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Collapsible from 'react-native-collapsible';

import style from './style';

function Dropdown(props) {
  const [isDropdown, setIsDropdown] = useState(false);

  function handlePress() {
    setIsDropdown(!isDropdown);
  }

  function handleListPress(item) {
    handlePress();
    props.onSelect(item);
  }

  function renderList(item) {
    return (
      <TouchableWithoutFeedback onPress={() => handleListPress(item)}>
        <View style={style.listContainer}>
          <Text style={style.list}>{item[props.keyToRender]}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <>
      <View style={style.container}>
        {props.icon && 
        <Image style={style.icon} source={props.icon} />}
        <TouchableWithoutFeedback onPress={handlePress}>
          <View
            secureTextEntry={props.secureTextEntry}
            style={[
              style.input,
              !props.icon && style.inputPaddingHorizontalWithoutIcon,
            ]}>
            <Text numberOfLines={1} style={style.text}>
              {props.value}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        {/* {props.icon && ( */}
          <Image
            style={style.dropdownIcon}
            source={require('../../../assets/icon/Dropdown.svg')}
          />
        {/* )} */}
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
        </View>
      </Collapsible>
    </>
  );
}

Dropdown.defaultProps = {
  value: '',
  data: [],
  keyToRender: 'value',
  onDateChange: function () {},
};

module.exports = Dropdown;
