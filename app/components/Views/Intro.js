import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import data from "../../../constants/introData";

const Intro = () => {
  const [number, setNumber] = useState(0);
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
          <View>
            <View style={styles.dotsContainer}>
              <FlatList
                data={data}
                renderItem={({ item, index }) => {
                  const isActive = index === number;
                  return (
                    <TouchableOpacity onPress={() => setNumber(index) } style={[styles.dot, isActive && styles.activeDot]} />
                  );
                }}
                horizontal={true}
                keyExtractor={(_, index) => index.toString()}
              />
            </View>
            <Image />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { position: "relative" },
  box: { position: "absolute", bottom: 16, left: 30, padding: 20 },
  title: { color: "white", fontSize: 35 },
  desc: { color: "white", fontSize: 20, paddingTop: 16 },
  dotsContainer: { paddingTop: 40},
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