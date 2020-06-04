import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');

export default {
  // BASE_URL: 'http://localhost:3000/api',192.168.0.5
  BASE_URL: 'https://arcane-waters-35831.herokuapp.com/api',
  // BASE_URL: 'https://3ce5a3d59657.ngrok.io/api',

  GENDERS: [
    { key: 'Male', value: 'male' },
    { key: 'Female', value: 'female' },
  ],
  DISEASE: [
    { key: "", value: "" },
    { key: "", value: "" },
    { key: "", value: "" },
    { key: "", value: "" },
    { key: "", value: "" },
  ],
  MARITAL_STATUS: [
    { key: 'Single', value: 'single' },
    { key: 'Married', value: 'married' },
  ],
  ALPHABETS: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ],
  WINDOW_WIDTH: width,
  WINDOW_HEIGHT: height,
  FONT_MICRO: RFPercentage(1.3),
  FONT_X_SMALL: RFPercentage(1.5),
  FONT_SMALL: RFPercentage(2),
  FONT_MEDIUM: RFPercentage(3),
  FONT_LARGE: RFPercentage(4),
  MARGIN_HORIZONTAL_SMALL: width * 0.02,
  MARGIN_VERTICAL_X_SMALL: height * 0.015,
  MARGIN_VERTICAL_SMALL: height * 0.03,
  MARGIN_VERTICAL_MEDIUM: height * 0.04,
  MARGIN_VERTICAL_LARGE: height * 0.07,
  PADDING_HORIZONTAL_LARGE: calculatePadding(width * 0.06),
  PADDING_HORIZONTAL_MEDIUM: calculatePadding(width * 0.04),
  PADDING_HORIZONTAL_SMALL: calculatePadding(width * 0.04),
  PADDING_HORIZONTAL_X_SMALL: calculatePadding(width * 0.02),
  PADDING_VERTICAL_X_SMALL: calculatePadding(height * 0.005),
  PADDING_VERTICAL_SMALL: calculatePadding(height * 0.01),
  PADDING_VERTICAL_MEDIUM: calculatePadding(height * 0.025),
  PADDING_VERTICAL_LARGE: calculatePadding(height * 0.032),
  BORDER_RADIUS_SMALL: width * 0.025,
};

function calculatePadding(size) {
  if (size < 10) {
    size = 10;
  }

  return size;
}
