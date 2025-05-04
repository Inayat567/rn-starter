import {Dimensions, PixelRatio} from 'react-native';

// Reference design dimensions (e.g., iPhone X)
const REFERENCE_WIDTH = 375;
const REFERENCE_HEIGHT = 812;

// Get current window dimensions
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// Calculate scaling factor based on the smaller dimension to maintain proportionality
const scale = Math.min(
  SCREEN_WIDTH / REFERENCE_WIDTH,
  SCREEN_HEIGHT / REFERENCE_HEIGHT,
);

/**
 * Normalizes font size, respecting device font scaling settings.
 * @param size - Font size in pixels from the design.
 * @param baseFontSize - Minimum font size to ensure readability (default: 16).
 * @returns Adjusted font size for the current device.
 */
export const f = (size: number, baseFontSize = 16): number => {
  const fontScale = PixelRatio.getFontScale();
  const scaledSize = size * scale * fontScale; // Apply design scale and font scale
  const adjustedSize = Math.round(PixelRatio.roundToNearestPixel(scaledSize));
  return Math.max(adjustedSize, baseFontSize); // Ensure font size doesn't go below baseFontSize
};

/**
 * Normalizes width based on the reference design.
 * @param size - Width in pixels from the design.
 * @param baseDesignWidth - Reference design width (default: 375).
 * @returns Adjusted width for the current device's screen.
 */
export const w = (size: number, baseDesignWidth = 375): number => {
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

/**
 * Normalizes height based on the reference design.
 * @param size - Height in pixels from the design.
 * @param baseDesignHeight - Reference design height (default: 812).
 * @returns Adjusted height for the current device's screen.
 */
export const h = (size: number, baseDesignHeight = 812): number => {
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};
