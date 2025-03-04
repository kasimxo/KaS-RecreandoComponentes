import { useState } from "react";
import { Text, Pressable, Image } from "react-native";

import { styles } from "../styles";

const LinkComponent = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Pressable
      style={styles.link}
      onHoverIn={() => setIsHovering(true)}
      onHoverOut={() => setIsHovering(false)}
      onPress={onClick}
    >
      <Image
        source={require("@assets/mensaje.png")}
        style={styles.icon}
        tintColor={"white"}
      />
      <Text
        style={[
          { color: "#5e97f2", fontSize: 16 },
          isHovering && { textDecorationLine: "underline" },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default LinkComponent;
