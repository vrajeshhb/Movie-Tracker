import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";

const HeaderRight = () => {
  return (
    <TouchableOpacity onPress={() => console.log("Profile Pressed")}>
      <Icon source="account-circle" color="#C0C0C0" size={20} />
    </TouchableOpacity>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({});
