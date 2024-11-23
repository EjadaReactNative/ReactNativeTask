import React, { useState, memo } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { createUser} from "../util/auth";
import Button from "../components/Button";


const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
  };

  const handleSignUp = async () => {

    if (!email || !password) {
        setError("Email and Password are required.");
        return;
      }
  
      if (!validateEmail(email)) {
        setError("Invalid email format.");
        return;
      }

    try {
      await createUser( email, password);
      navigation.replace("Login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input}  />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button buttonText="Sign Up" pressHandler={handleSignUp} bgcolor="#b8860b" />
    </View>
  );
};


export default memo(SignUpScreen);

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: "center", 
        padding: 20,
        backgroundColor: "#bdb76b" },
    input: { 
        borderBottomWidth: 1, 
        marginBottom: 15, 
        padding: 10, 
        backgroundColor: "#fff"},
    error: { 
        color: "red", 
        marginBottom: 10 },
  });
