import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import Button from './Button';
import { memo } from "react";

const PostCard = ({itemData}) =>{
    const navigation = useNavigation();
 
    const navigationPostHandler = ()=>{
        navigation.navigate('PostDetails', { post: itemData })
    };
 
    const navigationDeleteHandler = ()=>{
        navigation.navigate('DeletePost', { post: itemData })
    };
 
    return (
   <View style={styles.container}>
    <View style = {styles.card}>
      <Text style = {styles.Text}>ID:{itemData.id}</Text>
      <Text style = {styles.Text}>Title:{itemData.title}</Text>
      <View >
      <Button pressHandler={navigationPostHandler} buttonText="View" bgcolor="#bdb76b"/>
      <Button pressHandler={navigationDeleteHandler} buttonText="Delete" bgcolor="#bdb76b" />
      </View>
    </View>
   </View>
   );
}

export default memo(PostCard);

const styles = StyleSheet.create({
    container : {
        flexDirection: 'column',
        justifyContent : 'space-between',
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
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems: 'center',
    },
    Text:{
        flex: 1, 
        flexWrap: 'wrap',
        color: 'white'
    },
    button: {
        backgroundColor: '#bdb76b',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginBottom: 16,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
})