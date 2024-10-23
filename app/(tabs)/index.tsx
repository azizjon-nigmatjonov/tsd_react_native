import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { globalStyles } from "@/components/UI/GlobalStyles";
import HeaderUI from "@/components/UI/Header";

export default function HomeScreen() {
  return (
    <ThemedView>
      <HeaderUI />
    </ThemedView>
  );
}

const styles = StyleSheet.create({});
