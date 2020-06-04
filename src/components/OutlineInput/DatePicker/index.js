import React, {useRef} from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import DatePickerLib from 'react-native-datepicker';

import style from './style';

function DatePicker(props) {
  const datePickerEl = useRef(null);

  function handleInputPress() {
    datePickerEl.current.onPressDate();
  }

  function handleDateChange(date) {
    props.onDateChange(date);
  }

  return (
    <View style={style.container}>
      {props.icon && <Image style={style.icon} source={props.icon} />}
      <TouchableWithoutFeedback onPress={handleInputPress}>
        <View
          secureTextEntry={props.secureTextEntry}
          style={[
            style.input,
            !props.icon && style.inputPaddingHorizontalWithoutIcon,
          ]}>
          <Text style={style.text}>{props.value}</Text>
        </View>
      </TouchableWithoutFeedback>
      {/* {props.icon && ( */}
        <Image
          style={style.dropdownIcon}
          source={require('../../../assets/icon/Dropdown.svg')}
        />
      {/* )} */}
      <DatePickerLib
        ref={datePickerEl}
        style={{width: 0, height: 0}}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 0,
            marginLeft: 0,
            width: 0,
            height: 0,
          },
          dateInput: {
            marginLeft: 0,
            width: 0,
            height: 0,
          },
        }}
        onDateChange={handleDateChange}
      />
    </View>
  );
}

DatePicker.defaultProps = {
  value: '',
  onDateChange: function () {},
};

module.exports = DatePicker;
