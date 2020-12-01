import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import Axios from "axios";

export default class login extends Component {

  constructor(){
    super();
    this.state={
      email:"",
      password:""
    }
  }

  login=async()=>{
    var dataToSend={
      email:this.state.email,
      password:this.state.password
    }
    console.log(dataToSend);
    try{
      const sign=Axios.post("http://192.168.43.79:5000/login",dataToSend);
      this.props.navigation.navigate("Dashboard");
    }catch(err){
      window.alert(err.response.data.msg);
      return;
    }
  }

    render(){
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(241,188,206,0.7)" />
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect2}
          imageStyle={styles.rect2_imageStyle}
          source={require("../assests/wp4465113.jpg")}
        >
          <View style={styles.loginColumn}>
            <Text style={styles.login}>LOGIN</Text>
            <View style={styles.form}>
              <View style={styles.email}>
                <EvilIconsIcon
                  name="envelope"
                  style={styles.icon6}
                ></EvilIconsIcon>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={false}
                  style={styles.emailInput}
                  onChangeText={(value) =>this.setState({email: value})}
                ></TextInput>
              </View>
              <View style={styles.emailFiller}></View>
              <View style={styles.password}>
                <EvilIconsIcon name="lock" style={styles.icon7}></EvilIconsIcon>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={true}
                  style={styles.passwordInput}
                  onChangeText={(value) =>this.setState({password: value})}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.loginColumnFiller}></View>
          <TouchableOpacity
            onPress={this.login}
            style={styles.button}
          >
            <Text style={styles.login2}>Continue</Text>
          </TouchableOpacity>
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
  rect2: {
    flex: 1
  },
  rect2_imageStyle: {},
  login: {
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    textAlign: "center",
    marginLeft: 10,
    fontWeight:"bold"
  },
  form: {
    height: 176,
    marginTop: 38
  },
  email: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 29
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  emailInput: {
    height: 35,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  emailFiller: {
    flex: 1
  },
  password: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 13
  },
  passwordInput: {
    height: 35,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 13
  },
  loginColumn: {
    marginTop: 60,
    marginLeft: 41,
    marginRight: 41
  },
  loginColumnFiller: {
    flex: 1
  },
  button: {
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 315,
    marginLeft: 41,
    marginRight: 41
  },
  login2: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontWeight:"bold",
    marginLeft: 11
  }
});
