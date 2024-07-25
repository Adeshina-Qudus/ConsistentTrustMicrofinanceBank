import {SafeAreaView} from "react-native-safe-area-context";
import {
    Text,
    Clipboard,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
    Switch,
    Button,
    ScrollView
} from "react-native";
import image from "../../constants/image"
import {Link, router} from "expo-router";
import {useState} from "react";
import Icon from 'react-native-vector-icons/Ionicons';


const RegularDashboard = ()=>{

    const [balanceVisible, setBalanceVisible] = useState(true);

    const toggleBalanceVisibility = () => {
        setBalanceVisible(!balanceVisible);
    };

    const handleCopyAccountNumber = () => {
        Clipboard.setString('2040011238');
        Alert.alert('Copied!', 'Account number copied to clipboard.');
    };

    const handlePress= () =>{
        router.push("/more")
    }
    const handlePressTransact = () =>{
        router.push("/transactions")
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
                        <Image source={image.Notification} />
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
                            <Text style={Styles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={Styles.avaliableService}>
                    <View style={Styles.serviceContainer}>
                        <View style={Styles.serviceBoxSend} >
                            <Image source={image.SendMoney} />
                        </View>
                        <Text style={Styles.serviceBoxText}>Send Money</Text>
                    </View>
                    <View style={Styles.serviceContainer}>
                        <View style={Styles.serviceBoxRemita} >
                            <Image source={image.Remita} />
                        </View>
                        <Text style={Styles.serviceBoxText}>Remita</Text>
                    </View>
                    <View style={Styles.serviceContainer}>
                        <View style={Styles.serviceBoxPayBills} >
                            <Image source={image.PayBills} />
                        </View>
                        <Text style={Styles.serviceBoxText}>Pay Bills</Text>
                    </View>
                    <View style={Styles.serviceContainer}>
                        <View style={Styles.serviceBoxAirtime} >
                            <Image source={image.Phone} />
                        </View>
                        <Text style={Styles.serviceBoxText}>Airtime</Text>
                    </View>
                </View>

                <View style={Styles.avaliableService}>
                    <View style={Styles.serviceContainer}>
                        <View style={Styles.serviceBoxLoans} >
                            <Image source={image.Loans} />
                        </View>
                        <Text style={Styles.serviceBoxText}>Loans</Text>
                    </View>
                    <View style={Styles.serviceContainer}>
                        <View style={Styles.serviceBoxCable} >
                            <Image source={image.Tv} />
                        </View>
                        <Text style={Styles.serviceBoxText}>Cable TV</Text>
                    </View>
                    <View style={Styles.serviceContainer}>
                        <View style={Styles.serviceBoxInvest} >
                            <Image source={image.Invest} />
                        </View>
                        <Text style={Styles.serviceBoxText}>Invest</Text>
                    </View>
                    <View style={Styles.serviceContainer}>
                        <View style={Styles.serviceBoxElectricity} >
                            <Image source={image.Bell} />
                        </View>
                        <Text style={Styles.serviceBoxText}>Electricity</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={Styles.Services}>
                        <View style={Styles.service}>
                            <Text style={Styles.recentTrans}>Recent Transactions</Text>
                        </View>
                        <View style={Styles.viewAll} >
                            <TouchableOpacity onPress={handlePressTransact} style={Styles.viallButton}>
                                <Text style={Styles.viewAllText}>View All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={Styles.details}>
                        <View style={Styles.transactionOne}>
                                <Image source={image.Circle} />
                                <View style={Styles.innerText}>
                                    <Text style={Styles.name}>Grace Ameh</Text>
                                    <Text style={Styles.date}>15 Oct 2022, 10:00PM </Text>
                                </View>
                        </View>
                                <View style={Styles.amount}>
                                    <Text style={Styles.minus}>-10,000</Text>
                                    <Text style={Styles.balanceLeft}>NGN101,203.94 </Text>
                                </View>
                    </View>

                    <View style={Styles.details}>
                        <View style={Styles.transactionOne}>
                            <Image source={image.Circle} />
                            <View style={Styles.innerText}>
                                <Text style={Styles.name}>Mike Oshadami</Text>
                                <Text style={Styles.date}>15 Oct 2022, 10:00PM </Text>
                            </View>
                        </View>
                        <View style={Styles.amount}>
                            <Text style={Styles.plus}>-45,000</Text>
                            <Text style={Styles.balanceLeft}>NGN156,203.94 </Text>
                        </View>
                    </View>
                </ScrollView>
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
        width: 115,
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
        marginTop : 42
    },
    serviceText : {
        width: 80,
        height: 25,
        fontFamily: "Mulish",
        fontSize: 21,
        fontWeight: 700,
        lineHeight: 25.1,
        textAlign: "left",
    },
    viewAllText :{
        color: 'rgba(32, 130, 32, 1)',
        fontFamily: "Mulish",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 16,
    },
    viewAll : {
        backgroundColor : 'rgba(32, 130, 32, 0.1)',
        display : "flex",
        justifyContent : "center",
        alignItems : 'center',
        width : 75,
        borderRadius : 5
    },
    avaliableService : {
      display : "flex",
        flexDirection : "row",
        gap : 24,
        marginTop : 12
    },
    serviceBoxSend: {
        height : 60,
        width : 63,
        borderRadius : 10,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : 'rgba(214, 250, 209, 1)'
    },
    serviceContainer : {
        display : "flex",
        justifyContent : "center",
        gap : 5,
        alignItems : "center"
    },
    serviceBoxText : {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        fontFamily: "Mulish",
        fontSize: 13,
        fontWeight: 400,
        lineHeight: 16,
        color : 'rgba(51, 51, 51, 1)'
    },
    serviceBoxRemita : {
        height : 60,
        width : 63,
        borderRadius : 10,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : 'rgba(249, 231, 219, 1)'
    },
    serviceBoxPayBills : {
        height : 60,
        width : 63,
        borderRadius : 10,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor: 'rgba(239, 199, 182, 1)'
    },
    serviceBoxAirtime : {
        height: 60,
        width: 63,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(221, 237, 244, 1)',
    },
    serviceBoxLoans : {
        height: 60,
        width: 63,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(255, 242, 201, 1)'
    },serviceBoxInvest : {
        height: 60,
        width: 63,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(221, 237, 244, 1)'
    },
    serviceBoxElectricity : {
        height: 60,
        width: 63,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: ' rgba(191, 233, 213, 1)'
    },
    serviceBoxCable : {
        height: 60,
        width: 63,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(235, 235, 235, 1)'

    },
    recentTrans : {
        color: 'rgba(51, 51, 51, 1)',
        fontFamily: "Mulish",
        fontSize: 22,
        fontWeight: 700,
        lineHeight: 25.1,
    },
    transactionOne :{
        display : "flex",
        gap : 10,
        flexDirection : "row"
    },
    innerText : {
        display : "flex",
        flexDirection : "column",
        gap : 4
    },
    name : {
        fontFamily: "Mulish",
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 22,
    },
    date : {
        fontFamily: "Mulish",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: 12,
    },
    minus :{
        color : 'rgba(204, 0, 0, 1)',
        fontFamily: "SF Pro Text",
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 20,
        marginLeft : 40
    },
    balanceLeft : {
        color: 'rgba(102, 102, 102, 1)',
        fontFamily: "Mulish",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: 12,
        marginLeft : 20
    },
    details : {
        display : "flex",
        flexDirection : "row",
        justifyContent :"space-between",
        // marginBottom : 10,
        marginTop :  17,
    },
    plus : {
        color: 'rgba(32, 130, 32, 1)',
        fontFamily: "SF Pro Text",
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 20,
        marginLeft : 40
    }
});

export default RegularDashboard