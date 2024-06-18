import {Dimensions, PixelRatio} from 'react-native';

// Font normalization (with optional base font size)
export const normalizeFont = (size: number, baseFontSize = 16) => {
  const fontScale = PixelRatio.getFontScale();
  const adjustedSize = Math.round(
    PixelRatio.roundToNearestPixel(size * fontScale),
  );
  return adjustedSize > baseFontSize ? adjustedSize : baseFontSize;
};

// Width normalization with optional base design width
export const normalizeWidth = (size: number, baseDesignWidth = 375) => {
  const {width} = Dimensions.get('window');
  const scale = width / baseDesignWidth;
  const adjustedSize = Math.round(PixelRatio.roundToNearestPixel(size * scale));
  return adjustedSize;
};

// Height normalization with optional base design height
export const normalizeHeight = (size: number, baseDesignHeight = 812) => {
  const {height} = Dimensions.get('window');
  const scale = height / baseDesignHeight;
  const adjustedSize = Math.round(PixelRatio.roundToNearestPixel(size * scale));
  return adjustedSize;
};
