import React, { useContext, memo  } from 'react';
import { View, Text , StyleSheet} from 'react-native';
import IconButton from '../components/IconButton';
import { PostContext } from '../context/PostContext';
import { useNavigation } from '@react-navigation/native';

const PostDetails = ({ route }) => {
    const { post } = route.params;
    const navigate = useNavigation();
    const { deletePost } = useContext(PostContext);

    const deletePostHandler = ()=>{
      deletePost(Number(post.id)); 
      navigate.goBack();
    };

    return (
        <View style = {styles.container}>
           <View style = {styles.card}>
             <Text style = {styles.Text}>Title: {post.title}</Text>
             <Text style = {styles.Text}>Body: {post.body}</Text>
             <View>
                <Text style = {styles.Text}>Reactions: {JSON.stringify(post.reactions)}</Text>
             </View>
             <View>
                <Text style = {styles.Text}>Views: {post.views}</Text>
             </View>
             <View style = {styles.deleteContainer}> 
                <IconButton
                 icon="trash" 
                 color = {'red'} 
                 size = {36} 
                 onPress={deletePostHandler}
                />
             </View>
           </View>
        </View>
    );
};

export default memo(PostDetails);

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#bdb76b',
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 800,
    flexDirection : 'column',
    justifyContent : 'space-between',
    alignItems: 'center',
},
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: 'red',
    alignItems: 'center'
}
})

