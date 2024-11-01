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
import staticData from "./.././../..//constants/staticData";


const InfoScreen = ({navigation, route }) => {
  let dynamicData

if(route.params && route.params.itemName){
   dynamicData = staticData?.filter(item => item.title == route.params.itemName)[0]
}else{
  dynamicData = staticData[0]
}
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.topSection}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{display: 'flex', alignItems: 'center', justifyContent: 'center' , backgroundColor: '#fff', borderRadius: 100, height:30, width:30, marginBottom: 16}}>
            <Image style={{ width: 20, height: 20, transform: [{rotate: '180deg'}]}} source={arrow} />
          </TouchableOpacity>
          <Text style={styles.title}>Heal & Grow</Text>
        </View>
        <View style={styles.containerBox}>
          <Image
            style={styles.logo}
            source={{
              uri: dynamicData?.imgURL
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
  title: { color: "white", fontSize: 23, fontWeight: "700" },
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
