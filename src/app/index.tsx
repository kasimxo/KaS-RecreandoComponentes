import { View, Text, StyleSheet, Linking, ScrollView } from "react-native";
import TargetsComponent from "./../components/targetsComponent";
import { styles } from "./../styles/styles";
import TextCardComponent from "../components/textCardComponent";
import GithubCalendar from "@targets/01-GithubCalendar/Zuhaitz/target";

export default function Index() {
  return (
    <ScrollView
      style={{ paddingHorizontal: 25 }}
      contentContainerStyle={styles.componentlist}
    >
      <TextCardComponent
        title={"Bienvenido/a!"}
        content={`Recreando Componentes es el lugar en el que podrás aprender y mejorar como Frontend developer con ReactNative! Da igual si eres Junior, Senior o estás empezando, el objetivo es superarse recreando algunos de los componentes más icónicos de Internet.`}
      />
      <TargetsComponent />
    </ScrollView>

    // <GithubCalendar />
  );
}
