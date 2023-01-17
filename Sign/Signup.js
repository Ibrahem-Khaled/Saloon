import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import PhoneInput from 'react-native-phone-input'


export default function Signup() {
    const navigation = useNavigation();
    return (
        <LinearGradient
            style={styles.container}
            colors={['#8E8880', '#8D877E', '#FFFBDA']}
        >
            <StatusBar style="dark" />
            <View style={styles.ViewLogo}>
                <Image
                    style={styles.imagelogo}
                    source={require("../PlanR/Target-Logo-1968-present.png")} />
                <Text style={styles.Textmain}>Logo</Text>
            </View>
            <Text style={{ fontSize: 22, color: "white", fontWeight: "400", top: 40 }}>Login/Register</Text>
            <View style={styles.ViewMain}>
                <View style={{ alignItems: "center", alignSelf: "center", flexDirection: "row", margin: 5 }}>
                    <Text style={styles.Or}>----------</Text>
                    <Text style={styles.Or}>Phone Number</Text>
                    <Text style={styles.Or}>----------</Text>
                </View>
                <PhoneInput
                    initialCountry={'eg'}
                    initialValue=""
                    textProps={{
                        placeholder: 'Enter a phone number...'
                    }}
                    style={styles.Input}
                />
                <Pressable
                    style={{
                        backgroundColor: "#1487FF",
                        padding: 12, borderRadius: 20, width: "70%", alignSelf: "center"
                    }}
                    onPress={() => navigation.navigate("Signinfo")}
                >
                    <Text style={{
                        textAlign: "center",
                        fontWeight: "bold", fontSize: 18,
                        color: "#fff"
                        , alignSelf: "center"
                    }}>
                        Continue</Text>
                </Pressable>
                <View style={{ alignItems: "center", alignSelf: "center", flexDirection: "row", margin: 5 }}>
                    <Text style={styles.Or}>----------</Text>
                    <Text style={styles.Or}>OR</Text>
                    <Text style={styles.Or}>----------</Text>
                </View>
                <Text style={{ textAlign: "center", bottom: 30, fontSize: 20, color: "blue" }}>Sign in using</Text>
                <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
                    <Pressable style={styles.Other}>
                        <Image
                            style={styles.Iconther}
                            source={require("../PlanR/icon/facebook.png")} /></Pressable>
                    <Pressable style={styles.Other}>
                        <Image
                            style={styles.Iconther}
                            source={require("../PlanR/icon/google.png")} /></Pressable>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "space-around",
        width: "100%"
    },
    imagelogo: {
        width: 70,
        height: 70,
    },
    ViewLogo: {
        flexDirection: "row"
        , alignItems: "center"
        , top: 30

    },
    Textmain: {
        fontWeight: "bold",
        fontSize: 24,
        padding: 15,
        top: 10
    },
    ViewMain: {
        backgroundColor: "rgba(255,255,255,.2)"
        , width: "85%"
        , height: "65%"
        , borderRadius: 10,
        justifyContent: "space-around"
    },
    Input: {
        width: "90%",
        height: 60,
        backgroundColor: "#fff",
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 10,
        fontSize: 18,
        color: "white",
    },
    Or: {
        fontSize: 18,
        margin: 5,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    },
    Iconther: {
        width: 50,
        height: 50,
    }
    , Other: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 15
    }
});
