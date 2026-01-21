import { StyleSheet, TextInput, View ,Pressable} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput maxLength={2} keyboardType="number-pad" style={styles.textInput} placeholder="guess" />
        <View style={styles.buttonsContainer}>
        <PrimaryButton>Confirm</PrimaryButton>
        <PrimaryButton>Reset</PrimaryButton>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    inputContainer:{
        // flex:1,
        padding:18,
        marginTop:100,
        backgroundColor:"rgba(3, 113, 223, 0.93)",
        marginHorizontal:25,
        borderRadius:10,
        elevation:10

    },
    textInput:{
        fontSize:28,
        padding:12,
        textAlign:'center',
        letterSpacing:2,
        color:"#f2ff22",
        borderBottomColor:"#fff",
        borderBottomWidth:1,
        marginBottom:5
    },
    buttonsContainer:{
        // flex:1,
        flexDirection:"row",
        justifyContent:"center",
        paddingHorizontal:10,
    }
});

export default StartGameScreen;
