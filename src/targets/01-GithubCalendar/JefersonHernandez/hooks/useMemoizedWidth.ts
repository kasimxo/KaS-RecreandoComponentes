import { useMemo } from "react";
import { useWindowDimensions } from "react-native";

const useMemoizedWidth = () => {
  const { width } = useWindowDimensions();

  return useMemo(() => {
    if (!width) return 0;
    const parts = width / 70;
    return parts - parts * 0.1;
  }, [width]);
};

export default useMemoizedWidth;
