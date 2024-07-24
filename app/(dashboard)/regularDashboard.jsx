import {SafeAreaView} from "react-native-safe-area-context";
import {Text, Clipboard, View, StyleSheet, Image, TouchableOpacity, Alert, Switch, Button} from "react-native";
import image from "../../constants/image"
import {Link, router} from "expo-router";
import {useState} from "react";
import Icon from 'react-native-vector-icons/Ionicons';


const RegularDashboard = ()=>{


    // State to manage the visibility of the balance
    const [balanceVisible, setBalanceVisible] = useState(true);

    // Function to toggle the visibility of the balance
    const toggleBalanceVisibility = () => {
        setBalanceVisible(!balanceVisible);
    };

    // Function to handle copying the account number
    const handleCopyAccountNumber = () => {
        Clipboard.setString('2040011238');
        Alert.alert('Copied!', 'Account number copied to clipboard.');
    };

    const handlePress= () =>{
        router.push("/more")
    }
    return (
        <SafeAreaView>
            <View style={Styles.mainContainer}>
                <View style={Styles.top}>
                    <View style={Styles.profile}>
                        <Image source={image.RegularLevel} style={Styles.level} />
                        <Image source={image.Regular} />
                    </View>
                    <View style={Styles.greetings}>
                        <Text style={Styles.temi}>Hi, Temitope</Text>
                        <Text style={Styles.how}>How you doing today</Text>
                    </View>

                    <View style={Styles.rightEdge}>
                        <Image source={image.MoonFill} />
                        <Image source={image.Bell} />
                    </View>
                </View>

                <View style={Styles.BalanceBoard}>
                    <View style={Styles.allDetail}>
                        <View style={Styles.details1}>
                            <Text style={Styles.savings}>Savings Account Balance</Text>
                            <Text style={Styles.balance}>
                                {balanceVisible ? 'NGN102,238.71' : '****'}
                            </Text>
                            <Text style={Styles.userName}>Adewole Temitope</Text>
                        </View>

                        <Image source={image.Union} style={Styles.unionTri} />
                    </View>
                    <View style={Styles.copyHide}>
                        <View style={Styles.acctNumberContainer}>
                            <Text style={Styles.acctNumber}>2040011238</Text>
                            <TouchableOpacity onPress={handleCopyAccountNumber}>
                                <Icon
                                    name="copy-outline"
                                    size={20}
                                    color="white"
                                    style={Styles.copyIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.hideBalanceContainer}>
                            <Text style={Styles.hideBalance}>Hide balance</Text>
                            <Switch
                                value={balanceVisible}
                                onValueChange={toggleBalanceVisibility}
                                trackColor={{ false: '#ffffff', true: '#171515' }}
                                thumbColor={balanceVisible ? '#bbaeae' : '#f4f3f4'}
                                style={Styles.toggleSwitch}
                            />
                        </View>
                    </View>
                </View>

                <View style={Styles.Services}>
                    <View style={Styles.service}>
                        <Text style={Styles.serviceText}>Services</Text>
                    </View>
                    <View style={Styles.viewAll} >
                        <TouchableOpacity onPress={handlePress} style={Styles.viallButton}>
                            <Text>View All</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    mainContainer: {
        padding: 16,
    },
    level: {
        marginLeft: 20,
        left: 2,
        top: 10,
        zIndex: 1,
    },
    profile: {
        // marginBottom : 50
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20,
    },
    greetings: {
        marginTop: 20,
        marginRight: 120,
    },
    temi: {
        fontFamily: 'Mulish',
        fontSize: 17,
        fontWeight: '700',
        lineHeight: 22,
        textAlign: 'left',
    },
    how: {
        fontFamily: 'Mulish',
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 20,
        textAlign: 'left',
        color: 'rgba(102, 102, 102, 1)',
    },
    rightEdge: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        marginTop: 20,
    },
    BalanceBoard: {
        width: 325,
        height: 155,
        borderRadius: 5,
        backgroundColor: 'rgba(32, 130, 32, 1)',
    },
    savings: {
        fontFamily: 'Mulish',
        fontSize: 13,
        fontWeight: '380',
        lineHeight: 16,
        textAlign: 'left',
        color: 'rgba(255, 255, 255, 1)',
        marginTop: 20,
        marginLeft: 20,
    },
    balance: {
        fontFamily: 'Mulish',
        fontSize: 29,
        fontWeight: '700',
        lineHeight: 30.12,
        textAlign: 'left',
        color: 'rgba(255, 255, 255, 1)',
        marginLeft: 20,
        marginTop: 7,
    },
    userName: {
        fontFamily: 'Mulish',
        color: 'rgba(255, 255, 255, 1)',
        marginTop: 20,
        marginLeft: 20,
    },
    acctNumberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    acctNumber: {
        fontFamily: 'Mulish',
        color: 'rgba(255, 255, 255, 1)',
        marginRight: 5,
    },
    copyIcon: {
        marginLeft: 5,
    },
    hideBalanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    hideBalance: {
        fontFamily: 'Mulish',
        color: 'rgba(255, 255, 255, 1)',
        marginRight: 5,
    },
    copyHide: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    unionTri: {
        width: 130,
        height: 100,
    },
    allDetail: {
        display: 'flex',
        flexDirection: 'row',
    },
    toggleSwitch: {
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    },
    Services : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        marginTop : 60
    },
    serviceText : {
        width: 80,
        height: 25,
        top: 337,
        left: 20,
    }
});

export default RegularDashboard