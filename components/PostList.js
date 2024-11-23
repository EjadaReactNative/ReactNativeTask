import { FlatList } from "react-native";
import { useCallback } from "react";
import PostCard from '../components/PostCard';
import { memo } from "react";


const PostList = ({posts})=>{

    const renderItem = useCallback(({ item }) => (
        /* <View>
             <Text>{item.title}</Text>
             <Button title="View" onPress={() => navigation.navigate('PostDetails', { post: item })} />
         </View>*/
         <PostCard itemData = {item} />
     ));
    const ExtractKey = (item) => item.id.toString()

    return (
    <FlatList 
    data = {posts} 
    renderItem={renderItem} 
    keyExtractor={ExtractKey}
    />
    );
}

export default memo(PostList);