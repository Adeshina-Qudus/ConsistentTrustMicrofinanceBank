import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Link} from "expo-router";

const Home = ()=>{

    return(
        <SafeAreaView>
            <View>
                <Link href="(auth)/signIn" >SignIn</Link>
            </View>
        </SafeAreaView>
    )
}

export default Home