import {Image, View,Text} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {Tabs} from "expo-router";
import image from "../../constants/image"
import CustomImageButton from "./imageButton";



const  TabIcon = ({icon, color, name, focused}) =>{

    const getIcon = () =>{
        if (icon) {
            return (
                <Image
                    source={icon}
                    resizeMode={"contain"}
                    style={{ width: 28, height: 28, tintColor: color }}
                />
            );
        }

        const iconName = name === "Post" ? "plus" : "bell";
        return <FontAwesome name={iconName} size={28} color={color}/>
    };

    return (
        <View className={"items-center justify-center gap-2"}>
            {getIcon()}
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
                {name}
            </Text>
        </View>
    );
}

const TabsLayout = () =>{
    return(
        <>
            <Tabs
                screenOptions={{
                   tabBarShowLabel : false,
                   tabBarActiveTintColor : "rgba(32, 130, 32, 1)",
                   tabBarStyle:{
                       backgroundColor : "#fff",
                       borderTopWidth : 1,
                       borderTopColor : "rgba(183, 183, 183, 1)",
                       height : 90,
                   }
                }}
                >
                <Tabs.Screen
                    name="regularDashboard"
                    options={{
                        title:"Home",
                        headerShown : false,
                        tabBarIcon :
                            ({color, focused}) =>(
                                <TabIcon
                                    icon={image.Home}
                                    color={color}
                                    name={"Home"}
                                    focused={focused}
                                />
                            )
                    }}
                 />
                <Tabs.Screen
                    name="transactions"
                    options={{
                        title : "transactions",
                        headerShown:false,
                        tabBarIcon : ({color , focused}) =>
                            <TabIcon
                                icon={image.Transaction}
                                color={color}
                                name={"Transaction"}
                                focused={focused}
                            />
                    }}
                 />
                <Tabs.Screen
                    name="imageButton"
                    options={{
                        tabBarButton: (props) => <CustomImageButton {...props} />,
                    }}
                />
                <Tabs.Screen
                    name="cards"
                    options={{
                        title : "cards",
                        headerShown:false,
                        tabBarIcon : ({color , focused}) =>
                            <TabIcon
                                icon={image.Credit}
                                color={color}
                                name={"Cards"}
                                focused={focused}
                            />
                    }}
                />
                <Tabs.Screen
                    name="more"
                    options ={{
                        title : "more",
                        headerShown : false,
                        tabBarIcon : ({color, focused }) =>
                            <TabIcon
                                icon={image.More}
                                color={color}
                                name={"More"}
                                focused={focused}
                            />
                    }}
                />
            </Tabs>
        </>
    )
}
export default TabsLayout