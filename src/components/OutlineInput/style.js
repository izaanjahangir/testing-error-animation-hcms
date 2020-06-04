import {StyleSheet} from 'react-native';

import constants from '../../config/constants';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: constants.MARGIN_VERTICAL_SMALL * 1.2,
    position: 'relative',
  },
  // input: {
  //   borderColor: colors.LIGHTEST_BLACK,
  //   borderWidth: 1,
  //   borderRadius: constants.BORDER_RADIUS_SMALL,
  //   paddingHorizontal: constants.PADDING_HORIZONTAL_SMALL * 3,
  //   paddingVertical: constants.PADDING_VERTICAL_SMALL * 0.8,
  //   padding: 0,
  //   width: '100%',
  //   fontSize: constants.FONT_SMALL * 1.2,
  //   color: colors.BLACK,
  // },
  // inputPaddingHorizontalWithoutIcon: {
  //   paddingHorizontal: constants.PADDING_HORIZONTAL_SMALL,
  // },
  // icon: {
  //   width: constants.WINDOW_HEIGHT * 0.037,
  //   height: constants.WINDOW_HEIGHT * 0.037,
  //   position: 'absolute',
  //   left: constants.PADDING_HORIZONTAL_SMALL,
  //   top: constants.WINDOW_HEIGHT * 0.016,
  // },
  labelContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    zIndex: 10,
  },
  label: {
    top: -constants.FONT_SMALL / 1.5,
    left: 0,
    backgroundColor: 'white',
    paddingHorizontal: constants.PADDING_HORIZONTAL_X_SMALL,
    fontSize: constants.FONT_SMALL,
    color: colors.BLACK,
  },
  belowButtonContainer: {
    alignSelf: 'flex-end',
    paddingHorizontal: constants.PADDING_HORIZONTAL_SMALL * 0.8,
    paddingVertical: constants.PADDING_VERTICAL_X_SMALL,
    marginRight: constants.MARGIN_VERTICAL_X_SMALL,
    borderColor: colors.LIGHTEST_BLACK,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRadius: constants.BORDER_RADIUS_SMALL * 0.8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  belowButtonText: {
    fontSize: constants.FONT_SMALL,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  errorMainContainer: {
    position: 'absolute',
    width: '100%',
    // bottom: -constants.WINDOW_HEIGHT * 0.013,
    // bottom: -constants.WINDOW_HEIGHT * 0.012,
    // alignItems: 'flex-end',
    width: '90%',
  },
  errorContainer: {
    backgroundColor: 'red',
    height: constants.WINDOW_HEIGHT * 0.04,
    // transform: [{rotateZ: '4deg'}],
    // marginTop: -20,
    zIndex: -1,
    borderRadius: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  error: {
    color: colors.WHITE,
    fontSize: constants.FONT_SMALL * 0.8,
    position: 'absolute',
    bottom: -constants.WINDOW_HEIGHT * 0.008,
    right: 8,
    alignSelf: 'flex-end',
    transform: [{rotateZ: '0deg'}],
  },
});
