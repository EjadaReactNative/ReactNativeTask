import { View, ActivityIndicator, StyleSheet} from 'react-native';
import { memo } from 'react';


const LoadingOverlay = ()=>{
   return (
   <View style = {styles.container}>
        <ActivityIndicator size="large" color="white" />
   </View>
   );
}

export default memo(LoadingOverlay);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: "#bdb76b"
    }
})