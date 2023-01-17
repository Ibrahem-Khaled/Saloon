import * as React from 'react';
import { Text, View, SafeAreaView, TextInput, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Icons } from '../../assets/Icons';

const PostsContent = () => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.Buttons}>
                <Image
                    style={styles.Iconsa}
                    source={item.Image} />
                    <Text
                    style={{fontSize:17,fontWeight:"bold",color:"white",alignSelf:"center"}}
                    >{item.name}</Text>
                    <Ionicons 
                    name='chevron-forward'
                    size={35}
                    color={"white"}
                    style={{alignSelf:"center"}}
                    />
            </TouchableOpacity>
        );
    }
    return (
        <FlatList
            data={Icons}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    )
}




export default function HomeScreen() {
    return (
        <View style={styles.Main}>
            <StatusBar style='dark' />
            <View style={{ flexDirection: "row", paddingTop: 50, alignItems: "center", alignSelf: "center" }}>
                <Ionicons
                    name='search-circle'
                    size={40}
                    color={"#8C8B8B"}
                />
                <TextInput
                    textAlign='center'
                    placeholder='Who are you looking for?'
                    style={styles.Input}></TextInput>
            </View>
            <Image
                style={styles.Images}
                resizeMode={'contain'}
                source={require('../../PlanR/sales_offer_mainpic_20111011110338oxford_500x200.jpg')} />
            <PostsContent />
        </View>
    );
}
const styles = StyleSheet.create({
    Main: {
        flex: 1,
    },
    Input: {
        borderRadius: 30,
        backgroundColor: '#8C8B8B',
        width: "80%",
        height: 40,
        fontWeight: "bold",
        color: "white"
    },
    Images: {
        borderRadius: 10,
        width: "95%",
        marginTop: 10,
        alignSelf: "center"
    },
    Iconsa: {
        width: 55,
        height: 55,
        left:10,
        top:"2%",
    },
    Buttons:{
        width:"90%",
        backgroundColor:"#FF925E",
        borderRadius:15,
        alignSelf:"center",
        height:65,
        margin:5,
        justifyContent:'space-between',
        flexDirection:"row"   
    }

});