import {
    Text,
    TouchableOpacity,
    StyleSheet, View, Button
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


const SignIn = () =>{


    return (
        <SafeAreaView>
            <View style={styles.innerContainer}>
                <Text style={styles.can}>Cancel</Text>
                <Text style={styles.login}>Login to your account</Text>
                <Text style={styles.glad}>We are glad to have you, kindly enter{"\n"}
                    your login details.</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    innerContainer: {
        padding: 16,

    },

    can: {
        borderWidth: 1,
        borderColor: "rgba(72, 150, 72, 1)",
        borderRadius: 5,
        padding: 8,
        textAlign: 'center',
        color : "rgba(72, 150, 72, 1)",
        width : 90,
        height : 35,
        marginBottom : 50
    },
    login : {
        fontFamily: "Mulish",
        fontSize: 32,
        fontWeight: 600,
        lineHeight: 34.8,
        textAlign: "left",
        color : "rgba(72, 150, 72, 1)",
        marginBottom : 20
    },
    glad : {
        fontFamily: "Mulish",
        fontSize: 17,
        fontWeight: 500,
        lineHeight: 24,
        marginVertical: 16,
        letterSpacing: 0.002,
        textAlign: "left",
        color : "rgba(102, 102, 102, 1)"
    }
});
export default SignIn