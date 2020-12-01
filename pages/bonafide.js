import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class bonafide extends Component{
    render(){
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(241,188,206,0.7)" />
      <View style={styles.body}>
        <View style={styles.tabs}>
          <Text style={styles.bonafide}>BONAFIDE</Text>
        </View>
        <View style={styles.categories}>
          <View style={styles.name1}>
            <TextInput
              placeholder="Enter details for Bonafide.........."
              placeholderTextColor="rgba(0, 2, 3,0.4)"
              secureTextEntry={false}
              multiline={true}
              style={styles.nameInput1}
            ></TextInput>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Timeline")}
            style={styles.button4}
          >
            <Text style={styles.text4}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  body: {
    flex: 1
  },
  tabs: {
    height: 80,
    backgroundColor: "rgba(241,188,206,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 0,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 0
  },
  bonafide: {
    color: "rgba(255,255,255,1)",
    width: 98,
    height: 22,
    marginLeft: 18,
    marginBottom:11,
    fontWeight:"bold",
    fontSize:23
  },
  categories: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  name1: {
    height: 350,
    width:320,
    backgroundColor: "rgba(247, 249, 250,1)",
    borderRadius: 5,
    marginTop: 45,
    marginLeft: 21,
    marginRight: 18
  },
  nameInput1: {
    height: 350,
    color: "rgba(0, 2, 3,0.5)",
    fontSize: 14
  },
  button4: {
    height: 55,
    backgroundColor: "rgba(241,188,206,1)",
    borderRadius: 45,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    width: 278,
    justifyContent: "center",
    marginBottom: 263,
    marginLeft: 41,
    marginTop:40
  },
  text4: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontWeight:"bold",
    marginRight:11,
    marginLeft:46
  }
});
