import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";

export default class home extends Component {

  login=()=>{
    this.props.navigation.navigate("Login");
  }

  signUp=()=>{
    this.props.navigation.navigate("Signup");
  }

    render(){
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(241,188,206,0.7)" />
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={require("../assests/wp4465113.jpg")}
        >
          <View style={styles.endWrapperFiller}></View>
          <View style={styles.button1Column}>
            <TouchableOpacity
              onPress={this.login}
              style={styles.button1}
            >
              <Text style={styles.login}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.signUp}
              style={styles.button2}
            >
              <Text style={styles.signUp}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
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
  background: {
    flex: 1
  },
  rect: {
    flex: 1
  },
  rect_imageStyle: {},
  endWrapperFiller: {
    flex: 1
  },
  button1: {
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginBottom: 55
  },
  login: {
    width: 66,
    color: "rgba(255,255,255,1)",
    marginTop: 19,
    marginLeft: 115,
    fontWeight:"bold"
  },
  button2: {
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1
  },
  signUp: {
    width: 66,
    color: "rgba(255,255,255,1)",
    marginTop: 19,
    marginLeft: 115,
    fontWeight:"bold"
  },
  button1Column: {
    marginBottom: 315,
    marginLeft: 41,
    marginRight: 41
  }
});
