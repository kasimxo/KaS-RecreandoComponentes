import { View, Text, Pressable } from 'react-native';
import { styles } from '../styles';
import { useState, useRef, useEffect } from 'react';
import { TextCard } from '../types';

type ContentProps = {
  text: TextCard;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Content({ text, setIsOpenModal }: ContentProps) {
  const [isOverflow, setIsOverflow] = useState(false);
  const textRef = useRef<Text>(null);
  const containerHeight = styles.container.height;

  useEffect(() => {
    if (textRef.current) {
      textRef.current.measure((x, y, width, height) => {
        if (height > containerHeight) {
          setIsOverflow(true);
        }
      });
    }
  }, []);

  const gradients = [];
  for (let x = 50, y = 0.1; y <= 1; x -= 3, y += 0.05) {
    gradients.push({ height: x, opacity: y });
  }

  return (
    <>
      {isOverflow && (
        <>
          <View style={styles.viewMore}>
            <Pressable onPress={() => setIsOpenModal(true)}>
              <Text style={styles.readMore}>Leer más</Text>
            </Pressable>
          </View>
          {gradients.map((comp, index) => (
            <View
              key={index}
              style={[
                styles.gradient,
                { height: comp.height, opacity: comp.opacity },
              ]}
            />
          ))}
        </>
      )}
      <View>
        <Text ref={textRef} style={styles.content}>
          {text.content}
        </Text>
      </View>
    </>
  );
}
