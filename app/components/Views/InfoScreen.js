import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
} from "react-native";
import arrow from "../../../assets/images/arrow.png";
import bookmark from "../../../assets/images/bookmark.webp";

const InfoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.topSection}>
          <TouchableOpacity>
            <Image style={{ width: 20, height: 20 }} source={arrow} />
          </TouchableOpacity>
          <Text style={styles.title}>Heal & Grow</Text>
        </View>
        <View style={styles.containerBox}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://64.media.tumblr.com/6f0a3cc72c4f5d64c201270a5d09647d/tumblr_pfxdeySS8j1wo2a1ao1_500.gifv",
            }}
          />

          <View style={styles.box}>
            <Text style={styles.boxTitle}>Letting Go</Text>
            <Text style={styles.boxDesc}>Forgive to move Forward</Text>
            <TouchableOpacity style={styles.buttonBox}>
              <Text style={styles.buttonText}>Start Jouney</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.moduleTitle}>Resources</Text>
          <View style={styles.story}>
            <Image source={bookmark} style={{ width: 30, height: 30, justifyContent: "center"  }} />
            <View>
              <Text style={styles.storyTitle}>Story</Text>
              <Text style={styles.storyDesc}>Introduction to Let go list</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1A1F23" },
  wrapper: { padding: 10 },
  topSection: {},
  title: { color: "white", fontSize: 23 },
  containerBox: { position: "relative" },
  logo: {
    marginTop: 20,
    height: 500,
    borderRadius: 8,
  },
  box: {
    width: 330,
    position: "absolute",
    bottom: 16,
    left: 16,
    padding: 16,
    backgroundColor: "#262C33",
    borderRadius: 8,
  },
  boxTitle: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    alignItems: "center",
  },
  boxDesc: {
    color: "#868788",
    marginTop: 15,
    textAlign: "center",
    alignItems: "center",
  },
  buttonBox: {
    backgroundColor: "#E5E0DC",
    background: "#E5E0DC",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    textAlign: "center",
    marginTop: 30,
  },
  buttonText: { fontSize: 18, fontWeight: 500, color: "#262C33" },
  moduleTitle: {
    marginTop: 40,
    color: "white",
    fontSize: 25,
  },
  story: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    gap: 10
  },
  storyTitle: {
    color: "#424449",
    fontSize: 16,
    fontWeight: 600,
    paddingBottom: 10
  },
  storyDesc: {
    color: "white",
    fontSize: 20,
    fontWeight: 500
  },
});

export default InfoScreen;
