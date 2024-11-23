import React, { useState, useContext, memo  } from 'react';
import { View, TextInput,StyleSheet,Alert} from 'react-native';
import { PostContext } from '../context/PostContext';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const AddPostScreen = () => {
    const { addPost } = useContext(PostContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigation = useNavigation();

    const handleAddPost = () => {

        if (!title || !body) {
            Alert.alert('Error', 'Please fill in both the title and body.');
            return;
          }

          
        addPost({ id: Date.now(), title, body, reactions: 0, views: 0 });
        Alert.alert(
            'Success',
            'Post added successfully!',
            [
              { text: 'OK' } 
            ]
          );
    };

   
    return (
        <View style={styles.container}>
           <View style={styles.card}>
            <TextInput style={styles.input} placeholder="Title" onChangeText={setTitle} />
            <TextInput style={styles.input} placeholder="Body" onChangeText={setBody} />
            <Button pressHandler={handleAddPost} buttonText="Add Post" bgcolor="#bdb76b" />
            </View>
        </View>
    );
};

export default memo(AddPostScreen);

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection: 'column',
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor: '#bdb76b'
    },
    card :{
        backgroundColor: '#b8860b',
        borderRadius: 15,
        padding: 16,
        marginVertical: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        width: 350,
        height: 200,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: "#FFFFFF", 
        borderColor: "#bdb76b",    
        borderWidth: 1,            
        borderRadius: 5,          
        padding: 10,               
        fontSize: 16,              
        width: 300,
        margin: 10
  }
})

