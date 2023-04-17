import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import data from "../../../constants/introData";
import arrowTail from "../../../assets/images/arrowWithTailRight.png";

const Intro = ({ navigation }) => {
  const [number, setNumber] = useState(0);

  const nextScreen = (index) => {
    setNumber(index);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={{
            uri: data[number]?.imgURL,
          }}
          style={{ height: "100%" }}
        />
        <View
          style={styles.box}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        >
          <Text style={styles.title}>{data[number]?.title}</Text>
          <Text style={styles.desc}>{data[number]?.desc}</Text>
          <View
            style={{ display: "flex", flexDirection: "row", paddingTop: 40 }}
          >
            <View style={styles.dotsContainer}>
              <FlatList
                data={data}
                renderItem={({ item, index }) => {
                  const isActive = index === number;
                  return (
                    <TouchableOpacity
                      onPress={() => nextScreen(index)}
                      style={[styles.dot, isActive && styles.activeDot]}
                    />
                  );
                }}
                horizontal={true}
                keyExtractor={(_, index) => index.toString()}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{
                backgroundColor: "white",
                padding: 15,
                marginLeft: "auto",
                borderRadius: 100,
                marginRight: 10
              }}
            >
              <Image source={arrowTail} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
            <Image />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { position: "relative" },
  box: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    padding: 20,
    backgroundColor: "black",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    opacity: 4,
  },
  title: { color: "white", fontSize: 35 },
  desc: { color: "white", fontSize: 20, paddingTop: 16 },
  dotsContainer: { marginTop: 20 },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#5E6165",
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: "white",
    width: 9,
    height: 9,
  },
});

export default Intro;
