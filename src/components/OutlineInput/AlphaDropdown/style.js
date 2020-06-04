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
    zIndex: 10,
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
    backgroundColor: 'white',
  },
  text: {
    fontSize: constants.FONT_SMALL,
    color: colors.BLACK,
  },
  inputPaddingHorizontalWithoutIcon: {
    paddingHorizontal: constants.PADDING_HORIZONTAL_SMALL,
  },
  dropdownContainer: {
    paddingTop: constants.PADDING_VERTICAL_SMALL * 0.6,
    paddingBottom: constants.PADDING_VERTICAL_X_SMALL * 0.6,
    borderColor: colors.LIGHTEST_BLACK,
    borderWidth: 1,
    width: '97%',
    top: -constants.WINDOW_HEIGHT * 0.01,
    zIndex: -1,
    maxHeight: constants.WINDOW_HEIGHT * 0.5,
    overflow: 'hidden',
    flexDirection: 'row',
    borderBottomStartRadius: constants.BORDER_RADIUS_SMALL,
    borderBottomEndRadius: constants.BORDER_RADIUS_SMALL,
  },
  dropdownInnerContainer: {
    flexDirection: 'row',
  },
  dropdownLeftSection: {
    flex: 1,
  },
  dropdownRightSection: {
    paddingHorizontal: constants.PADDING_HORIZONTAL_X_SMALL,
    justifyContent: 'center',
  },
  listContainer: {
    paddingHorizontal: constants.PADDING_HORIZONTAL_SMALL,
    borderBottomColor: colors.LIGHTEST_BLACK,
    borderBottomWidth: 1,
    paddingVertical: constants.PADDING_VERTICAL_X_SMALL,
  },
  listHeadingContainer: {
    paddingHorizontal: constants.PADDING_HORIZONTAL_SMALL,
    borderBottomColor: colors.LIGHTEST_BLACK,
    borderBottomWidth: 1,
    paddingVertical: constants.PADDING_VERTICAL_X_SMALL,
    backgroundColor: colors.PRIMARY_DARK_TURQUOISE,
  },
  listHeading: {
    fontSize: constants.FONT_MEDIUM * 0.8,
    color: colors.WHITE,
  },
  list: {
    color: colors.BLACK,
    fontSize: constants.FONT_SMALL,
  },
  alpha: {
    fontWeight: 'bold',
    fontSize: constants.FONT_MICRO,
  },
});
