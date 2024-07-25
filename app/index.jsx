import React, { useState, useEffect } from "react";
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const SignIn = () => {
    const [form, setForm] = useState({
        phoneNumber: '',
        password: '',
    });

    const [isFormFilled, setIsFormFilled] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        if (!form.password.trim()) {
            setPasswordError('Password is required');
        } else {
            setPasswordError('');
            router.push("regularDashboard");
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
                <Text style={styles.login}>Login to your account</Text>
                <Text style={styles.glad}>
                    We are glad to have you, kindly enter{'\n'}
                    your login details.
                </Text>

                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.label}>Phone Number*</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="+234 809 531 6411"
                            placeholderTextColor="rgba(153, 153, 153, 1)"
                            keyboardType="phone-pad"
                            value={form.phoneNumber}
                            onChangeText={(e) => setForm((prevForm) => ({ ...prevForm, phoneNumber: e }))}
                            autoCapitalize="none"
                        />
                    </View>
                    <View>
                        <Text style={styles.passwordLabel}>Your Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={[
                                    styles.input,
                                    passwordError ? styles.inputError : null,
                                ]}
                                placeholder="***********"
                                placeholderTextColor="rgba(153, 153, 153, 1)"
                                secureTextEntry={!isPasswordVisible}
                                value={form.password}
                                onChangeText={(e) => setForm((prevForm) => ({ ...prevForm, password: e }))}
                            />
                            <TouchableOpacity
                                style={styles.iconContainer}
                                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                            >
                                <Icon
                                    name={isPasswordVisible ? "eye-slash" : "eye"}
                                    size={20}
                                    color="gray"
                                />
                            </TouchableOpacity>
                        </View>
                        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                    </View>
                </View>

                <TouchableOpacity
                    style={[styles.loginButton, !isFormFilled && styles.disabledButton]}
                    onPress={handleLogin}
                >
                    <Text style={styles.log}>Login</Text>
                </TouchableOpacity>

                <View style={styles.noAccount}>
                    <Text style={styles.noAccountText}>Don’t have an account? Sign up</Text>
                </View>
                <View style={styles.forgot}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
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
    login: {
        fontFamily: 'Mulish',
        fontSize: 32,
        fontWeight: '600',
        lineHeight: 34.8,
        textAlign: 'left',
        color: 'rgba(72, 150, 72, 1)',
        marginBottom: 20,
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
        marginBottom: 30,
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
    passwordContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
        width : 345
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
        opacity: 0.6,
    },
    log: {
        color: 'white',
        fontFamily: 'Mulish',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 22,
        textAlign: 'left',
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        top: 15,
        padding: 5,
    },
    noAccountText: {
        color: 'rgba(72, 150, 72, 1)',
        fontFamily: 'Mulish',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        textAlign: 'left',
    },
    noAccount: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    forgot: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotText: {
        fontFamily: 'Mulish',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        textAlign: 'left',
    },
});

export default SignIn;