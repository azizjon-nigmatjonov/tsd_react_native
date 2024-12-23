import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CTable from "../../CElements/CTable";
import { BackButton } from "../../UI/BackButton";
import { useDocsStore } from "../../../store/docs";
import { globalStyles } from "@/components/UI/GlobalStyles";
import HeaderUI from "@/components/UI/Header";
import { ThemedView } from "@/components/ThemedView";

const DocumentList = () => {
  const { docs } = useDocsStore();

  return (
    <ThemedView>
      <HeaderUI place="Список документов" extra={<BackButton link="home" />} />

      <View style={[globalStyles.container, styles.wrapper]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {docs.map((item: any, index: number) => (
            <View
              key={index}
              style={[
                styles.documentItem,
                { paddingBottom: index === docs.length - 1 ? 300 : 16 },
              ]}
            >
              <CTable element={item} list={item.rolls} />
            </View>
          ))}
        </ScrollView>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 16, // Adjust padding as necessary
  },
  documentItem: {
    paddingBottom: 16, // Space between document items
  },
});

export default DocumentList;
