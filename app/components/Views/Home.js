import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import staticData from "./.././../../constants/staticData";
import arrow from "../../../assets/images/arrow.png";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <Text style={styles.title}>Sunday</Text>
        <View style={styles.suggestBanner}>
          <View style={{ width: "85%" }}>
            <Text style={styles.suggestTitle}>Suggest an exercise</Text>
            <Text style={styles.suggestDesc}>
              Based onn how you feel adn obstacles you face
            </Text>
          </View>
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: "stretch",
                backgroundColor: "#1A1F23",
                borderRadius: 100,
                padding: 17,
                justifyContent: "center",
                alignItems: "center",
              }}
              source={arrow}
              height={20}
              width={20}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.goalSeter}>
          <Text style={styles.goalTitle}>Heal & Grow</Text>
          <Text style={styles.goalDesc}>
            Set goal and create a fullfilling future
          </Text>
          <View style={styles.goals}>
            {staticData?.map((item, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Details", { itemName: item.title })}
                key={index}
                style={styles.goal}
              >
                <Image
                  style={styles.logo}
                  source={{
                    uri: item.imgURL,
                  }}
                />
                <Text style={styles.goalItemTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View>
          <Text style={styles.goalTitle}>Love yourself</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1F23",
  },
  wrapper: {
    padding: "5%",
  },
  title: {
    fontSize: 35,
    color: "#fff",
  },
  suggestBanner: {
    display: "flex",
    flexDirection: "row",
    marginTop: "5%",
    padding: "7%",
    borderRadius: "8%",
    backgroundColor: "#262C33",
  },
  suggestTitle: {
    color: "#D4D0CF",
    fontSize: 18,
    fontWeight: "600",
  },
  suggestDesc: {
    paddingTop: "3%",
    fontSize: 15,
    fontWeight: "400",
    color: "#6E7173",
  },
  // suggestArrow:{
  //   width: "20%",
  //   // height: "20"
  // },
  goalSeter: {
    paddingTop: "10%",
  },
  goalTitle: {
    fontSize: 25,
    color: "#C5C3BF",
  },
  goalDesc: {
    paddingTop: "5%",
    color: "#787C7E",
  },
  goals: {
    flex: 1,
    paddingTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  goal: {
    width: "48%",
    marginBottom: 20,
  },
  logo: {
    width: 175,
    height: 100,
    borderRadius: 8,
    margin: 1,
  },
  goalItemTitle: {
    color: "white",
    paddingTop: 16,
    paddingBottom: 24,
  },
});

export default HomeScreen;
