import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

export default function MovieCard({ SetVariable, ClickDetails }) {
  const setThisVar = () => {
    ClickDetails(SetVariable);
  };
  return (
    <TouchableOpacity onPress={setThisVar}>
      <Card style={styles.card}>
        <View style={styles.cardContainer}>
          <View style={styles.iconContainer}>
            {/* Placeholder for the icon image */}
            <Image
              source={{ uri: `${SetVariable.poster_url}` }}
              style={styles.icon}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{SetVariable.title}</Text>
            <Text style={styles.description}>{SetVariable.Description}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{SetVariable.type}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 5,
    borderRadius: 8,
  },
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#F8F4FF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  iconContainer: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  icon: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  buttonText: {
    fontSize: 12,
    color: "#333",
  },
});
