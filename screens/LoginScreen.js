
import React, { useState, memo } from "react";
import { View, TextInput,Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { login } from "../util/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
        setError("Email and Password are required.");
        return;
      }
    if (!validateEmail(email)) {
        setError("Invalid email format.");
        return;
      }
    try {
      await login(email, password);
      navigation.replace("Home");
    } catch (err) {
      setError(err.message);
    }
  };

  const navigateSignUp = () =>{
    navigation.navigate("SignUp");
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address"/>
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
         <Button buttonText="Login" pressHandler={handleLogin} bgcolor="#b8860b"/>
         <Button buttonText="Sign Up" pressHandler={navigateSignUp} bgcolor="#b8860b" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 , backgroundColor: "#bdb76b"},
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 10, backgroundColor: "#fff" },
  error: { color: "red", marginBottom: 10 },
});

export default memo(LoginScreen);
