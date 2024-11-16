import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text,
  SegmentedButtons,
  Dialog,
  Portal,
  PaperProvider,
} from "react-native-paper";
import React from "react";
export default function DetailScreen({ navigation, route }) {
  const [value, setValue] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => {
    setVisible((pre) => !pre);
  };

  //api need to be sent in .env
  const AddtoWatchList = async () => {
    try {
      //console.log("i was called");
      const response = await fetch(`${process.env.API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movieId: route.params.id,
          status: "To Watch",
        }),
      });

      // Check if the response is successful
      if (response.ok) {
        const data = await response.json();
        //console.log("Movie added to watch list:", data);
        showDialog();
      } else {
        console.error("Failed to add movie:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //api need to be sent in .env
  const AddWatchedList = async () => {
    try {
      //console.log("i was called");
      const response = await fetch(`${process.env.API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movieId: route.params.id,
          status: "Watched",
        }),
      });

      // Check if the response is successful
      if (response.ok) {
        const data = await response.json();
        //console.log("Movie added to watch list:", data);
        showDialog();
      } else {
        console.error("Failed to add movie:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //checking were to add movies
  const handleValueChange = (newValue) => {
    //console.log("Selected Value:", newValue); // Logs the new value when a button is pressed

    setValue(newValue);
    if (newValue === "watch") {
      AddtoWatchList();
    } else {
      //console.log(`make a new function for ${newValue}`);
      AddWatchedList();
    }
  };
  return (
    <>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: `${route.params.poster_url}` }} />
        <Card.Content style={styles.content}>
          <Text variant="titleLarge">{route.params.title}</Text>
          <Text variant="bodyMedium">{route.params.type}</Text>
          <Text variant="bodySmall" style={styles.smalltxt}>
            {route.params.Description}. React Native Paper is a high-quality,
            standard-compliant Material Design library that has you covered in
            all major use-cases.
          </Text>
        </Card.Content>
      </Card>
      <SegmentedButtons
        value={value}
        onValueChange={handleValueChange}
        buttons={[
          {
            value: "watch",
            label: "To Watch",
            icon: "check",
          },
          {
            value: "watched",
            label: "Watched",
            icon: "check",
          },
        ]}
        style={styles.segmentbtn}
      />
      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={showDialog}>
            <Dialog.Title>{route.params.title}</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">
                {route.params.type} is added to {value} list.
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={showDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </>
  );
}
DetailScreen.options = {
  title: "Title",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: { margin: 10 },
  content: { marginTop: 20 },
  smalltxt: { marginTop: 10 },
  segmentbtn: { margin: 10 },
});
