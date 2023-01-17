import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, SafeAreaView, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import PhoneInput from 'react-native-phone-input'



export default function Signinfo() {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const navigation = useNavigation();
    const pickerRef = useRef();
    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());

    function showDatePicker() {
        setDatePicker(true);
    };

    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
    };

    return (
        <LinearGradient
            style={styles.container}
            colors={['#fff', '#fff', '#fff']}
        >
            <StatusBar style="light" />
            <SafeAreaView style={{ flex: 1, borderTopWidth: 1, borderColor: "white", justifyContent: "space-around" }}>
                <View style={styles.ViewMain}>
                    <Pressable>
                        <Image
                            style={styles.imagelogo}
                            source={require("../PlanR/icon/users.png")} /></Pressable>
                    <View style={styles.nicname}>
                        <Text style={styles.Textmain}>Enter your name</Text>
                        <TextInput
                            style={styles.Input}
                        ></TextInput></View>
                </View>
                <View >
                    <Text style={styles.Textmain}>Gender</Text>
                    <TextInput
                        placeholder='Male & Female '
                        style={styles.Input}></TextInput>
                </View>
                <View>
                    {datePicker && (
                        <DateTimePicker
                            value={date}
                            mode={'date'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={onDateSelected}
                            style={styles.Input}
                        />
                    )}
                    {!datePicker && (
                        <View>
                            <Text style={styles.Textmain}>Date of birth</Text>
                            <TouchableOpacity
                                style={styles.Input}
                                onPress={showDatePicker}
                            >
                                <Text style={{textAlign:"center",top:"25%",fontSize:16,fontWeight:"bold"}}>{date.toDateString()}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </SafeAreaView>
            <View style={{ flex: .6, borderTopWidth: 1, borderColor: "#545453", width: "100%", }}>
                <Text style={{ fontSize: 23, color: "#545453", fontWeight: 'bold',padding:10 }}
                >Contact information </Text>
                <View style={{ width: "100%" }}>
                    <Text style={styles.Textmain}
                    >Phone Number</Text>
                    <PhoneInput
                        initialCountry={'eg'}
                        initialValue=""
                        textProps={{
                            placeholder: 'Enter a phone number...'
                        }}
                        style={styles.Input}
                    />
                </View>
                <View >
                    <Text style={styles.Textmain}
                    >Email Adress</Text>
                    <TextInput
                        placeholder='Enter your email '
                        style={styles.Input}></TextInput>
                </View>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: "#1487FF",height:50,
                    borderRadius: 30, width: "50%", alignSelf: "center",bottom:10
                }}
                onPress={() => navigation.navigate("Taps")}
            >
                <Text style={{ textAlign: "center",fontSize:18,color:"white", fontWeight: "bold" ,top:"25%"}}>
                    Continue</Text>
            </TouchableOpacity>
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
        width: 100,
        height: 100,
        margin:10
    },
    Textmain: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#8E8880",
        padding: 5,
        left: 15
    },
    ViewMain: {
        width: "100%"
        , justifyContent: "space-around",
        flexDirection: "row", top: 40
    },
    Input: {
        width: "85%",
        height: 50,
        alignSelf: "center",
        borderRadius: 10,
        textAlign: "center"
        , fontWeight: "bold",
        fontSize: 18,
        borderWidth: 2,
        borderColor: "#039BE5",
        alignItems: "center",
    },
    nicname: {
        flex: 1,
    }
});
