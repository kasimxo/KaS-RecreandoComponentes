import React, { useState } from 'react';
import GenerateData from '../data';
import LetterChange from './components/LetterChange';
import { View, Pressable, Text } from 'react-native';
import { styles } from './styles';

export default function target() {
  const startDuration = 400;
  const text = GenerateData();
  const arrayLetters = Object.values(text);
  const [restart, setRestart] = useState(false);

  const handleRestart = () => {
    setRestart((prev) => !prev);
  };
  return (
    <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleRestart} style={styles.button}>
          <Text style={styles.buttonText}>Hoy me siento... </Text>
          <View style={styles.textContainer}>
            {arrayLetters.map((letter, index) => {
              const speed = 80;
              const duration = startDuration + index * 100;
              return (
                <LetterChange
                  key={index}
                  letterFinal={letter}
                  speed={speed}
                  duration={duration}
                  restart={restart}
                />
              );
            })}
          </View>
        </Pressable>
      </View>
    </View>
  );
}
