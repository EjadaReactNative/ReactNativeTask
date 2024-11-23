import React, { useContext, memo  } from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { PostContext } from '../context/PostContext';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

const DeletePostScreen = ({route}) => {
    const { deletePost } = useContext(PostContext);
    const navigate = useNavigation();
    const { post } = route.params;
    
    const removePost = ()=>{
        deletePost(Number(post.id)); 
        navigate.goBack();
    }
    

    return (
        <View style = {styles.container}>
         <Text style = {{fontSize : 15, fontWeight : 'bold'}}>Are you sure you want to delete the following Post ?</Text>
          <View style = {styles.card}>
            <Text style = {styles.Text}>Title: {post.title}</Text>
            <Text style = {styles.Text}>Body: {post.body}</Text>
            <Text style = {styles.Text}>Reactions: {JSON.stringify(post.reactions)}</Text>
            <Text style = {styles.Text}>Views: {post.views}</Text>
            </View>
            <Button pressHandler={removePost} buttonText="Delete" bgcolor="#b8860b"/>
        </View>
    );
};

export default memo(DeletePostScreen);

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: '#bdb76b',
    justifyContent : 'center',
    alignItems : 'center'
    },

  Text : {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
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
    height: 500,
    flexDirection : 'column',

}

});
