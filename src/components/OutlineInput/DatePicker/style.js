import {StyleSheet} from 'react-native';

import constants from '../../../config/constants';
import colors from '../../../config/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  icon: {
    width: constants.WINDOW_HEIGHT * 0.037,
    height: constants.WINDOW_HEIGHT * 0.037,
    position: 'absolute',
    left: constants.PADDING_HORIZONTAL_SMALL,
  },
  dropdownIcon: {
    width: constants.WINDOW_HEIGHT * 0.02,
    height: constants.WINDOW_HEIGHT * 0.02,
    position: 'absolute',
    right: constants.PADDING_HORIZONTAL_SMALL,
  },
  input: {
    borderColor: colors.LIGHTEST_BLACK,
    borderWidth: 1,
    borderRadius: constants.BORDER_RADIUS_SMALL,
    paddingHorizontal: constants.PADDING_HORIZONTAL_SMALL * 3,
    paddingVertical: constants.PADDING_VERTICAL_SMALL * 1.2,
    padding: 0,
    width: '100%',
    fontSize: constants.FONT_SMALL * 1.2,
    color: colors.BLACK,
  },
  text: {
    fontSize: constants.FONT_SMALL,
    color: colors.BLACK,
  },
  inputPaddingHorizontalWithoutIcon: {
    paddingHorizontal: constants.PADDING_HORIZONTAL_SMALL,
  },
});
