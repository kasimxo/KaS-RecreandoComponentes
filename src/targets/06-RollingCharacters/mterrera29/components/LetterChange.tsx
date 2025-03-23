import React, { useEffect, useState } from 'react';
import { Text, Animated } from 'react-native';
import { styles } from '../styles';

type LetterChangeProps = {
  letterFinal: string;
  speed: number;
  duration: number;
  restart: boolean;
};

export default function LetterChange({
  letterFinal,
  speed,
  duration,
  restart,
}: LetterChangeProps) {
  const colors = [
    '#ffad46',
    '#ff6d1b',
    '#f06292',
    '#ba68c8',
    '#4fc3f7',
    '#64b5f6',
    '#4db6ac',
    '#81c784',
    '#ffd54f',
  ];
  const getShuffledColors = () => [...colors].sort(() => Math.random() - 0.5);
  const color = getShuffledColors();

  const letters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
  const [currentLetter, setCurrentLetter] = useState('');
  const [isFinalLetter, setIsFinalLetter] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFinalLetter(false);
      setCurrentLetter(letters[Math.floor(Math.random() * letters.length)]);
    }, speed);

    setTimeout(() => {
      clearInterval(interval);
      setCurrentLetter(letterFinal);
      setIsFinalLetter(true);
    }, duration);

    return () => clearInterval(interval);
  }, [letterFinal, speed, duration, restart]);

  useEffect(() => {
    if (restart) {
      setCurrentLetter('');
    }
  }, [restart]);

  return (
    <Text style={[styles.text, { color: isFinalLetter ? 'white' : color[0] }]}>
      {currentLetter}
    </Text>
  );
}
