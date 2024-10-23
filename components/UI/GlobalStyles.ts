import { StyleSheet } from "react-native";

const FONT_SIZES = {
  small: 12,
  medium: 16,
  large: 20,
  extraLarge: 24,
};

const SPACING = {
  tiny: 4,
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: SPACING.medium,
    paddingLeft: SPACING.medium,
  },
});

export { globalStyles, FONT_SIZES, SPACING };