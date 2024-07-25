import {Image, ScrollView, Text, TouchableOpacity, View ,StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import image from "../../constants/image";


const Transactions = () =>{


    return(
        <ScrollView>
            <SafeAreaView>
                <View style={Styles.mainContainer}>
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
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const Styles =  StyleSheet.create({
    recentTrans : {
        color: 'rgba(51, 51, 51, 1)',
        fontFamily: "Mulish",
        fontSize: 22,
        fontWeight: 700,
        lineHeight: 25.1,
    },
    transactionOne :{
        display : "flex",
        gap : 15,
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
        gap : 120,
        marginLeft : 10
    },
    plus : {
        color: 'rgba(32, 130, 32, 1)',
        fontFamily: "SF Pro Text",
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 20,
        marginLeft : 40
    },
    mainContainer : {
        display : "flex",
        flexDirection : "column",
        gap : 15,
        justifyContent : "center",
        marginTop : 20
    }
})
export default Transactions