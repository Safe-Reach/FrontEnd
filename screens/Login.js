//Login.js
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function Login({}) {
    // images 
    const LogoImage = require('../assets/Safe-Reach Logo.png');

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <Image source={LogoImage} style={styles.logo} />
        </KeyboardAwareScrollView>
    );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 20
    }
})