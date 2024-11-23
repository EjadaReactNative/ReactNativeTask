import React, { useContext, useEffect, memo,useState  } from 'react';
//import { View, Text, FlatList, Button } from 'react-native';
import axios from 'axios';
import { PostContext } from '../context/PostContext';
import PostList from '../components/PostList';
import LoadingOverlay from '../components/LoadingOverlay';


const HomeScreen = ({ navigation }) => {
    const { posts, setPosts } = useContext(PostContext);
    const [isLoading, setIsLoading] = useState(true); 
    

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://dummyjson.com/posts')
            .then(
                (res) => {
                setPosts(res.data.posts);
                setIsLoading(false);
            })
            .catch(    
                (err) => {
                console.error(err);
                setIsLoading(false);
           });
    }, []);


    return (
       <>
        {isLoading ? (
            <LoadingOverlay />
          ) : (
        <PostList posts = {posts} />
          )}
        </>
    );
};

export default memo(HomeScreen);

