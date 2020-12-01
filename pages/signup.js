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
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import {Picker} from '@react-native-community/picker';
import Axios from "axios";

export default class signup extends Component {
  constructor(){
    super();
    this.state={
      name:"",
      email:"",
      password:"",
      re_password:"",
      type:"student"
    }
  }
  signup = async() =>{
    if(this.state.password===this.state.re_password){
      var dataToSend = {
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        type:this.state.type
      }
      try{
      const sign = await Axios.post("http://192.168.43.79:5000/signup",dataToSend);
      this.props.navigation.navigate("Dashboard");
      }catch(err){
         window.alert(err.response.data.msg);
         return;
      }
    }
    else{
    window.alert("Password does not match");
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
          <View style={styles.signUpColumn}>
            <Text style={styles.signUp}>SIGN UP</Text>
            <View style={styles.form}>
              <View style={styles.drop}>
                <SimpleLineIconsIcon
                  name="plus"
                  style={styles.icon9}
                ></SimpleLineIconsIcon>
                <Picker 
                style={styles.dropInput} 
                selectedValue={this.state.type}
                onValueChange={(itemValue1, itemIndex) =>
                this.setState({type: itemValue1})
                }>
                <Picker.Item label="Student" value="student"/>
                <Picker.Item label="Club Admin" value="club admin"/>
                </Picker>
              </View>
              <View style={styles.name}>
                <EvilIconsIcon name="user" style={styles.icon5}></EvilIconsIcon>
                <TextInput
                  placeholder="Name"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={false}
                  style={styles.nameInput}
                  onChangeText={(value) =>this.setState({name: value})}
                ></TextInput>
              </View>
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
              <View style={styles.password1}>
                <EvilIconsIcon name="lock" style={styles.icon8}></EvilIconsIcon>
                <TextInput
                  placeholder="Re-Type Password"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={true}
                  style={styles.passwordInput1}
                  onChangeText={(value) =>this.setState({re_password: value})}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.signUpColumnFiller}></View>
          <TouchableOpacity
            onPress={this.signup}
            style={styles.button}
          >
            <Text style={styles.text2}>Continue</Text>
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
  signUp: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center",
    fontWeight:"bold",
    marginLeft: 17
  },
  form: {
    height: 392,
    marginTop: 64
  },
  dropInput: {
    height: 50,
    color: "rgba(255,255,255,1)",
    fontSize: 7,
    flex: 1,
    marginRight: 17,
    marginLeft: 1,
    marginTop: 4
  },
 
  drop: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10
  },
  group: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: -16
  },
  icon9: {
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    width: 33,
    height: 33,
    marginLeft: 21,
    marginTop: 9,
    alignSelf: "center"
  },
  textInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  name: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 21
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  nameInput: {
    height: 35,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 12
  },
  email: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 26
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
  password: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    width: 278,
    flexDirection: "row",
    marginTop: 24,
    alignSelf: "center"
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
    marginTop: 12
  },
  password1: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    width: 278,
    flexDirection: "row",
    marginTop: 23
  },
  icon8: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 13
  },
  passwordInput1: {
    height: 35,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 16,
    marginLeft: 14,
    marginTop: 12
  },
  signUpColumn: {
    marginTop: 66,
    marginLeft: 41,
    marginRight: 41
  },
  signUpColumnFiller: {
    flex: 1
  },
  button: {
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 105,
    marginLeft: 41,
    marginRight: 41
  },
  text2: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontWeight:"bold",
    marginLeft: 17
  }
});