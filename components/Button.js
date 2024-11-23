import { Pressable,Text,StyleSheet } from "react-native";
import { memo } from "react";

const Button = ({pressHandler,buttonText,bgcolor,navigation}) =>{

return (
<Pressable onPress={pressHandler} style={[styles.button,{backgroundColor :  bgcolor}]}>
<Text style={styles.buttonText}>
   {buttonText}
</Text>
</Pressable>
);
}

export default memo(Button);

const styles = StyleSheet.create({

button: {
    backgroundColor: '#b8860b',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 5,
    width : 130,
    justifyContent: 'center',
    alignItems:'center'
},
buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
}

})