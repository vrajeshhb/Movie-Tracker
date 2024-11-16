// import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
// import React from "react";

// const FavScreen = () => {
//   const [data, setData] = React.useState(null);
//   const [dataw, setDataw] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);
//   //url needs to go in .env file
//   const fetchData = async () => {
//     try {
//       console.log("i was called");
//       const response = await fetch(
//         "https://api.rapidmock.com/api/vikuman/v1/mylist",
//         {
//           method: "GET",
//         }
//       );
//       const jsonData = await response.json();
//       setData(jsonData["Watched"]);
//       setDataw(jsonData["To Watch"]);
//       setLoading(false);
//       //console.log(jsonData["Watched"]);
//       //console.log(jsonData["To Watch"]);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setLoading(false);
//     }
//   };

//   React.useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <ActivityIndicator size="large" color="#9683EC" style={styles.loader} />
//     );
//   }
//   if (!data) {
//     return <Text>No data available</Text>;
//   } else {
//     data.map((item, index) => {
//       if (index % 2 === 0) {
//         console.log(index);
//       }
//     });
//     //const row1 = data.filter((_, index) => index % 2 === 0); even
//     //index % 2 !== 0  odd
//     //dataw.map((item, index) => console.log(index));
//   }
//   return (
//     <View>
//       <Text>FavScreen</Text>
//     </View>
//   );
// };

// export default FavScreen;

// const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { Card, Text, Button, ActivityIndicator } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

import MovieCardHorizontal from "../component/MovieCardHorizontal";
const FavScreen = () => {
  const [data, setData] = React.useState(null);
  const [dataw, setDataw] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  //url needs to go in .env file
  const fetchData = async () => {
    try {
      //console.log("i was called");
      const response = await fetch(`${process.env.API_URL}`, {
        method: "GET",
      });
      const jsonData = await response.json();
      setData(jsonData["To Watch"]);
      setDataw(jsonData["Watched"]);
      setLoading(false);
      //console.log(jsonData["Watched"]);
      //console.log(jsonData["To Watch"]);
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
  if (!dataw) {
    return <Text>No data available</Text>;
  }
  return (
    <>
      <View style={{ marginRight: "50%" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginRight: "50%",
            backgroundColor: "#F8F4FF",
            padding: 10,
            borderWidth: 1,
            borderBottomEndRadius: 30,
            borderTopEndRadius: 30,
          }}
        >
          <Icon name="check" size={16} color="#6D5A8D" />
          <Text> To Watch</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={{ height: "50%", marginBottom: 0 }}>
        <View style={styles.column}>
          <View style={styles.row}>
            {data.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <MovieCardHorizontal
                    key={item.movieId}
                    IN={index}
                    number={item}
                  />
                );
              }
            })}
          </View>

          <View style={styles.row}>
            {data.map((item, index) => {
              if (index % 2 !== 0) {
                return (
                  <MovieCardHorizontal
                    key={item.movieId}
                    IN={index}
                    number={item}
                  />
                );
              }
            })}
          </View>
        </View>
      </ScrollView>

      {/* <Text>hi</Text> */}

      <View style={{ marginRight: "50%" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginRight: "50%",
            backgroundColor: "#F8F4FF",
            padding: 10,
            borderWidth: 1,
            borderBottomEndRadius: 30,
            borderTopEndRadius: 30,
          }}
        >
          <Icon name="check" size={16} color="#6D5A8D" />
          <Text>Watched</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <View style={styles.column}>
          <View style={styles.row}>
            {dataw.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <MovieCardHorizontal
                    key={item.movieId}
                    IN={index}
                    number={item}
                  />
                );
              }
            })}
          </View>

          <View style={styles.row}>
            {dataw.map((item, index) => {
              if (index % 2 !== 0) {
                return (
                  <MovieCardHorizontal
                    key={item.movieId}
                    IN={index}
                    number={item}
                  />
                );
              }
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default FavScreen;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  scrollContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    height: "25%",
  },
  row: {
    flexDirection: "row",
    //justifyContent: "space-between",
    marginBottom: 10,
  },
  column: {
    flexDirection: "column",
    marginBottom: 10,
  },
  card: {
    width: 150,
    backgroundColor: "#F8F4FF",
    marginHorizontal: 5,
    borderRadius: 8,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
