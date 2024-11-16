import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";
const HeaderLeft = () => {
  return (
    <TouchableOpacity onPress={() => console.log("Menu Pressed")}>
      <Icon source="menu" color="#C0C0C0" size={20} />
    </TouchableOpacity>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({});
