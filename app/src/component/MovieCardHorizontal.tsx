import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

const MovieCardHorizontal = ({ number, IN }) => {
  function calculateDaysAgo(dateString) {
    // Parse the input date string and the current date
    const givenDate = new Date(dateString);
    const currentDate = new Date();

    // Calculate the difference in time in milliseconds
    const timeDifference = currentDate - givenDate;

    // Convert time difference from milliseconds to days
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Handle cases where the date is in the future or today
    if (daysAgo === 0) return "Today";
    if (daysAgo < 0) return `${Math.abs(daysAgo)} days in the future`;

    return `${daysAgo} days ago`;
  }
  return (
    <>
      <Card style={styles.card}>
        <Card.Cover
          source={{ uri: `${number.poster_url}` }}
          style={{
            width: 150,
            height: 90,
            borderRadius: 8,
            paddingBottom: 5,
          }}
        />
        <Card.Content>
          {/* <Text variant="bodyMedium">{IN}</Text> */}
          <Text variant="bodyMedium">{number.title}</Text>
          <Text variant="bodySmall">{calculateDaysAgo(number.updatedAt)}</Text>
        </Card.Content>
      </Card>
    </>
  );
};

export default MovieCardHorizontal;

const styles = StyleSheet.create({
  card: {
    //flex: 1,
    //height: 40,
    width: 150,
    //flexDirection: "row",
    backgroundColor: "#F8F4FF",
    //padding: 5,
    margin: 5,
    borderRadius: 8,
    alignItems: "center",
  },
});
