import { Text, StyleSheet, View, ScrollView } from "react-native";
import MovieCard from "../component/MovieCard";
import MovieCardHorizontal from "../component/MovieCardHorizontal";
import React from "react";
import { Card, ActivityIndicator, Searchbar, Button } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [isExtended, setIsExtended] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isGrid, setIsGrid] = React.useState(false);

  const GetDetailsScreen = ({ id, title, poster_url, Description, type }) => {
    navigation.navigate("DetailScreen", {
      id,
      title,
      poster_url,
      Description,
      type,
    });
  };

  const onScroll = ({ nativeEvent }) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };
  function List() {
    const listItems = data.map((person, index) => (
      <MovieCard
        key={person.id}
        SetVariable={person}
        ClickDetails={GetDetailsScreen}
      />
    ));
    return <>{listItems}</>;
  }

  function GridList() {
    const listItems = data.map((person, index) => (
      <MovieCardHorizontal
        key={person.id}
        number={person}
        ClickDetails={GetDetailsScreen}
      />
    ));
    return <>{listItems}</>;
  }

  //url needs to go in .env file
  const fetchData = async () => {
    try {
      //console.log("i was called");
      const response = await fetch(`${process.env.API_URL}`, {
        method: "GET",
      });
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <ActivityIndicator size="large" color="#9683EC" style={styles.loader} />
    );
  }
  if (!data) {
    return <Text>No data available</Text>;
  }

  return (
    <View style={styles.main}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.search}
      />
      <View style={{ flexDirection: "row", marginLeft: 10 }}>
        <Button
          icon="sort-alphabetical-ascending"
          mode="text"
          onPress={() => console.log("Sort")}
        >
          Sort
        </Button>
        <Button icon="filter" mode="text" onPress={() => console.log("Filter")}>
          Filter
        </Button>
        <Button
          icon="view-grid"
          mode="text"
          onPress={() => setIsGrid((pre) => !pre)}
        >
          Grid
        </Button>
      </View>
      {isGrid ? (
        <ScrollView style={styles.container} onScroll={onScroll}>
          <List />
        </ScrollView>
      ) : (
        <ScrollView
          style={{
            flexGrow: 1,
            paddingBottom: 20,
            padding: 10,
            width: "100%",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
          onScroll={onScroll}
        >
          <GridList />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  search: { margin: 10 },
  main: { backgroundColor: "#fff" },
  container: {
    flexGrow: 1,
    padding: 10,
    //backgroundColor: "#fff",
    //marginTop: 50,
    paddingBottom: 20,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
