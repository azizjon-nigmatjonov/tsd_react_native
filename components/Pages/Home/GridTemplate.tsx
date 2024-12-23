import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
interface Props {
  list: any;
  hanldeClick: (val: any) => void;
}

export const GridTemplate = ({ list, hanldeClick }: Props) => {
  return (
    <View style={styles.gridContainer}>
      {list.map((item: any, index: number) => (
        <Pressable
          key={index}
          style={styles.itemContainer}
          onPress={() => {
            if (item?.link) {
              // Adapt router.push for React Native navigation
              hanldeClick(item.link);
            }
          }}
        >
          {item?.image && (
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
          )}
          <Text style={styles.title}>{item.title}</Text>
        </Pressable>
      ))}
    </View>
  );
};

// React Native Stylesheet
const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
    justifyContent: "space-between",
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e0e0e0", // Replace with your variable or constant color
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    height: 110,
    width: "30%", // Set width to handle 3 columns
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 10, // Adjust this for vertical spacing between rows
  },
  imageContainer: {
    alignItems: "center",
    // marginBottom: 8,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  title: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 14,
  },
});
