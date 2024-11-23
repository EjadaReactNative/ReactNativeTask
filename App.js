import React from 'react';
import { Button,StyleSheet,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PostProvider } from './context/PostContext';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import PostDetails from './screens/PostDetails';
import AddPostScreen from './screens/AddPostScreen';
import DeletePostScreen from './screens/DeletePostScreen';



const Stack = createStackNavigator();
export default function App({navigation}) {

    const logoutHandler = ({navigation}) =>{
      
        navigation.replace("Login");
   }

    return (
        <PostProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="SignUp" component={SignupScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
                        title: "Home",
                        headerRight: () => ( <View style={styles.headerButtons}>
                               <Button
                                title="LogOut"
                                onPress={() => {
                                navigation.replace("Login");
                                    }}
                               color="#bdb76b"
                                  />
                                  <View style={styles.spacer} />
                                  <Button
                                title="AddPost"
                                onPress={() => {
                                navigation.navigate("AddPost");
                                    }}
                               color="#bdb76b"
                                  /></View>),
                    })}/>
                    <Stack.Screen name="PostDetails" component={PostDetails} />
                    <Stack.Screen name="AddPost" component={AddPostScreen} />
                    <Stack.Screen name="DeletePost" component={DeletePostScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </PostProvider>
    );

}


const styles = StyleSheet.create({
    headerButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 5, 
      },
    spacer: {
        width: 10, 
      }
});

