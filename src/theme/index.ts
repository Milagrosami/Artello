const { width, height } = Dimensions.get("window");
import { Dimensions } from "react-native";
import { fonts } from "./fonts";
const colors = {
  brand: "#c2f057",
  secondary: "#705bf7",
  dark: "#151517",
  grey: "#4a4e59",
  white: "#FFFFFF",
  red: "#b54e4f",
  ghost: "#7d7d8e",
  yellow: "#f6f057",
};
const spacing = {
  xs: 8,
  s: 16,
  m: 24,
  l: 32,
  xl: 40,
};

const radius = {
  xs: 8,
  s: 10,
  m: 15,
  l: 25,
  xl: 50,
};

const iconSize = {
  s: 14,
  m: 20,
  l: 24,
  xl: 28,
};

export { colors, fonts, height, iconSize, radius, spacing, width };
