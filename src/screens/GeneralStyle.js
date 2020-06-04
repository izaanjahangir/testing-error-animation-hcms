import { StyleSheet } from 'react-native';

import constants from '../config/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: constants.PADDING_HORIZONTAL_LARGE,
  },
  containerWithoutFlex: {
    paddingHorizontal: constants.PADDING_HORIZONTAL_LARGE,
  },
  pX0: {
    paddingHorizontal: 0,
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  flexGrow1: {
    flexGrow: 1,
  },
  w100: {
    width: '100%',
  },
  borderTop: {
    borderTopWidth: 1
  },
  borderBottom: {
    borderBottomWidth: 1
  }
});
