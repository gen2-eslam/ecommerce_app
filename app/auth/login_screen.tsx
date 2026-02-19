import Icon from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from "../utils/styles";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Ecommerce App</Text>
      <EmailInput />
      <PasswordInput />
      <Link href="/home/home_screen" asChild>
        <Button title="Login" />
      </Link>
    </View>
  );
};

const EmailInput = () => {
  return (
    <View style={styles.input}>
      <Icon name="envelope" size={20} style={{width: "10%"}} color="blue"/>
      <TextInput
        placeholder="Email"
        style = {{width: "80%"}}
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
};

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View style={styles.input}>
      <Icon name="lock" size={20} style={{width: "10%"}} color="blue" />
      <TextInput
        placeholder="Password"
        style = {{width: "80%"}}
        secureTextEntry={showPassword}
        onChangeText={(text) => console.log(text)}
      />
      <Icon
        name={showPassword ? "eye-slash" : "eye"}
        size={20}
        color="red"
        style={{ marginLeft: "auto" }}
        onPress={() => setShowPassword(!showPassword)}
      />
    </View>
  );
};

export default SignIn;
