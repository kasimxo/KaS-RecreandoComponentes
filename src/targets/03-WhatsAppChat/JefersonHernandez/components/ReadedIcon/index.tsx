import { Image, ImageProps, StyleSheet } from "react-native";
import { styles } from "./styles";

export function ReadedIcon({
  resizeMode = "contain",
  tintColor = "#9ba6af",
  ...props
}: ImageProps) {
  return (
    <Image
      {...props}
      tintColor={tintColor}
      resizeMode={resizeMode}
      style={StyleSheet.flatten([styles.cancel, props.style])}
      source={require("@assets/controlar.png")}
    />
  );
}
