import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View, StyleSheet, Image} from "react-native";
import image from "../../constants/image"

const RegularDashboard = ()=>{

    return(
        <SafeAreaView>
            <View style={Styles.mainContainer}>
                <View style={Styles.top}>
                    <View style={Styles.profile}>
                        <Image source={image.RegularLevel} style={Styles.level}/>
                        <Image source={image.Regular} />
                    </View>
                    <View style={Styles.greetings}>
                        <Text style={Styles.temi}>Hi, Temitope</Text>
                        <Text style={Styles.how}>how you doing today </Text>
                    </View>

                    <View style={Styles.rightEdge}>
                        <Image source={image.MoonFill} />
                        <Image source={image.Bell} />
                    </View>
                </View>

                <View style={Styles.BalanceBoard}>
                    <Text style={Styles.savings}>
                        Savings Account Balance</Text>

                </View>

            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    mainContainer : {
        padding: 16,

    },
    level : {
        marginLeft : 20,
        left : 2,
        top : 10,
        zIndex : 1
    },
    profile : {
        // marginBottom : 50
    },
    top : {
        display : "flex",
        flexDirection : "row",
        gap : 10
    },
    greetings : {
        marginTop : 20,
        marginRight : 120
    },
    temi : {
        fontFamily: "Mulish",
        fontSize: 17,
        fontWeight: 700,
        lineHeight: 22,
        textAlign: "left"
    },
    how : {
        fontFamily: "Mulish",
        fontSize: 13,
        fontWeight: 400,
        lineHeight: 20,
        textAlign: "left",
        color : 'rgba(102, 102, 102, 1)'
    },
    rightEdge  : {
        display : "flex",
        flexDirection : "row",
        gap : 8,
        marginTop : 20
    },
    BalanceBoard : {
        width: 325,
        height: 155,
        gap: 0,
        borderRadius: 5,
        opacity: 0,
        backgroundColor : 'rgba(32, 130, 32, 1)'
    },
    savings : {
        fontFamily: "Mulish",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 16,
        textAlign: "left",
        display
    }


})
export default RegularDashboard