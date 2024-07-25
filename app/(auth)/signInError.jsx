
import {
    Text,
    TouchableOpacity,
    StyleSheet, View, Button, TextInput, Image
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useEffect, useState} from "react";
import {router} from "expo-router";
import image from "../../constants/image"

const SignIn = () => {
    const [form, setForm] = useState({
        phoneNumber: '',
        password: '',
    });

    const [isFormFilled, setIsFormFilled] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        if (!form.password.trim()) {
            setPasswordError('Password is required');
        } else {
            setPasswordError('');
            router.push("newDashboard")
        }
    };

    useEffect(() => {
        const { phoneNumber, password } = form;
        if (phoneNumber && password) {
            setIsFormFilled(true);
        } else {
            setIsFormFilled(false);
        }
    }, [form]);

    return (
        <SafeAreaView>
            <View style={styles.innerContainer}>
                <Text style={styles.can}>Cancel</Text>
                <Image source={image.Damilare} style={styles.dami}/>
                <Text style={styles.name}>Damilare,</Text>
                <Text style={styles.glad}>
                    kindly enter your login details.
                </Text>
                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.passwordLabel}>Your Password</Text>
                        <TextInput
                            style={[
                                styles.input,
                                passwordError ? styles.inputError : null,
                            ]}
                            placeholder="***********"
                            placeholderTextColor="rgba(153, 153, 153, 1)"
                            secureTextEntry={true}
                            value={form.password.trim()}
                            onChangeText={(e) => setForm({ ...form, password: e })}
                        />
                        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                    </View>
                </View>

                <TouchableOpacity
                    style={[styles.loginButton, !isFormFilled && styles.disabledButton]}
                    onPress={handleLogin}
                    disabled={!isFormFilled}
                >
                    <Text style={styles.log}>Login</Text>
                </TouchableOpacity>

                <View style={styles.noAccount}>
                    <Text style={styles.noAccount}>Enable biometric Login</Text>
                </View>
                <View style={styles.forgot}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </View>
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
        borderColor: 'rgba(72, 150, 72, 1)',
        borderRadius: 5,
        padding: 8,
        textAlign: 'center',
        color: 'rgba(72, 150, 72, 1)',
        width: 90,
        height: 35,
        marginBottom: 50,
    },
    name: {
        fontFamily: 'Mulish',
        fontSize: 32,
        fontWeight: 600,
        lineHeight: 34.8,
        textAlign: 'left',
        color: 'rgba(72, 150, 72, 1)',
        marginTop: 20
    },
    glad: {
        fontFamily: 'Mulish',
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 24,
        marginVertical: 16,
        letterSpacing: 0.002,
        textAlign: 'left',
        color: 'rgba(102, 102, 102, 1)',
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
    },
    label: {
        fontFamily: 'Mulish',
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
        position: 'absolute',
        top: 0,
        left: 10,
        backgroundColor: 'white',
        paddingHorizontal: 4,
        zIndex: 1,
    },
    passwordLabel: {
        fontFamily: 'Mulish',
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
        position: 'absolute',
        top: 0,
        left: 10,
        backgroundColor: 'white',
        paddingHorizontal: 4,
        zIndex: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(204, 204, 204, 1)',
        borderRadius: 5,
        padding: 8,
        fontSize: 16,
        color: 'rgba(51, 51, 51, 1)',
        height: 50,
        marginTop: 7,
        backgroundColor: 'white',
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
        fontFamily: 'Mulish',
    },
    loginButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(72, 150, 72, 1)',
        borderColor: 'rgba(72, 150, 72, 1)',
        width: 335,
        height: 50,
        borderRadius: 15,
        marginBottom: 30,
    },
    disabledButton: {
        opacity: 0.6, // Disabled button styling
    },
    log: {
        color: 'white',
        fontFamily: 'Mulish',
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 22,
        textAlign: 'left',
    },
    noAccount: {
        color: 'rgba(72, 150, 72, 1)',
        fontFamily: 'Mulish',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 22,
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    forgot: {
        fontFamily: 'Mulish',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 22,
        textAlign: 'left',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dami : {
        display : "flex",
        marginLeft : 110
    }
});

export default SignIn;