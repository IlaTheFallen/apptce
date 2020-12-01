import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";

export default class dashboard extends Component {

    bonafide=()=>{
        this.props.navigation.navigate("Bonafide");
    }

    render(){
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(241,188,206,0.7)" />
      <View style={styles.body}>
        <View style={styles.tabs}>
          <Text style={styles.dashboard}>DASHBOARD</Text>
        </View>
        <View style={styles.categories}>
          <TouchableOpacity
            onPress={this.bonafide}
            style={styles.button3}
          >
            <Text style={styles.text3}>Bonafide</Text>
          </TouchableOpacity>
            <TouchableOpacity
              onPress={this.club}
              style={styles.button1}
            >
              <Text style={styles.text1}>Club Activities</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.food}
              style={styles.button2}
            >
              <Text style={styles.text2}>Order Food</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.logout}
              style={styles.button4}
            >
              <Text style={styles.text4}>Logout</Text>
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
  dashboard: {
    color: "rgba(255,255,255,1)",
    width: 123,
    height: 65,
    fontSize:23,
    marginLeft: 18,
    marginTop: 32,
    fontWeight:"bold"
  },
  categories: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  button3: {
    height: 105,
    backgroundColor: "rgba(250, 40, 40,1)",
    borderRadius: 45,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    width: 278,
    justifyContent: "center",
    marginTop: 43,
    marginLeft: 38
  },
  text3: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontWeight:"bold",
    marginLeft: 18
  },
  button3Filler: {
    flex: 1
  },
  button1: {
    height: 105,
    backgroundColor: "rgba(250, 236, 40,1)",
    borderRadius: 45,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    width: 278,
    justifyContent: "center",
    marginTop: 43,
    marginLeft: 38
  },
  text1: {
    width: 88,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontWeight:"bold",
    marginLeft: 18
  },
  button2: {
    height: 105,
    backgroundColor: "rgba(68, 250, 40,1)",
    borderRadius: 45,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    width: 278,
    justifyContent: "center",
    marginTop: 43,
    marginLeft: 38
  },
  text2: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontWeight:"bold",
    marginLeft: 18
  },
  button4: {
    height: 105,
    backgroundColor: "rgba(189,16,224,1)",
    borderRadius: 45,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    width: 278,
    justifyContent: "center",
    marginTop: 43,
    marginLeft: 38
  },
  text4: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontWeight:"bold",
    marginLeft: 25
  },
  button1Column: {
    width: 278,
    marginBottom: 263,
    marginLeft: 41
  }
});
