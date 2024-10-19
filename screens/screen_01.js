import { StatusBar } from "expo-status-bar";
import { StyleSheet,View,Text,TextInput,Image,TouchableOpacity,Alert } from "react-native";
import axios from "axios";
import React,{useState,useEffect} from "react";




export default function app ({navigation}) {


    const [email, setemail] = useState("");
    const [password,setpassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://6711db604eca2acdb5f5f664.mockapi.io/users');
            const users = response.data;
            const user = users.find(u => u.email === email && u.password === password);
            if(user){
                navigation.navigate("Screen_02");
            }
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false);
        }
    };

    return(
        <View style={styles.container}>
           <View>
               <Image source={require("../assets/Data/icon.png")} style={{
                width:100,
                height:100,
                resizeMode:"contain",
               }}></Image>
            </View> 
            <View>
                <Text style={{
                    fontSize:20,
                    fontWeight:"bold",
                    marginTop:20,
                }}>Hello Again!</Text>
                <Text style={{
                    fontSize:10,
                    fontWeight:"bold",
                    color:"#CCC",
                    marginTop:10,
                }}>Log into your account</Text>
            </View>

            <View style={{
                flexDirection:"row",
                width:"90%",
                height:40,
                borderRadius:10,
                borderWidth:1,
                marginTop:50,
                justifyContent:"center",
                alignItems:"center",
            }}>
                <Image source={require("../assets/Data/email.png")} style={{
                    width:20,
                    height:20,
                    resizeMode:"contain",
                    marginRight:10,
                    marginLeft:10,
                }}></Image>
                <TextInput style={{
                    width:"90%",
                    height:40,
                    borderRadius:10
                }} placeholder="Enter your email address"
                value={email}
                onChangeText={setemail}></TextInput>

            </View>
            <View style={{
                flexDirection:"row",
                width:"90%",
                height:40,
                borderRadius:10,
                borderWidth:1,
                marginTop:30,
                justifyContent:"center",
                alignItems:"center",
            }}>
                <Image source={require("../assets/Data/email.png")} style={{
                    width:20,
                    height:20,
                    resizeMode:"contain",
                    marginRight:10,
                    marginLeft:10,
                }}></Image>
                <TextInput style={{
                    width:"90%",
                    height:40,
                    borderRadius:10
                }} placeholder="Enter your password" 
                value={password}
                onChangeText={setpassword}></TextInput>

            </View>

            <View style={{
                marginLeft:150,
                marginTop:40,
            }}>
                <Text style={{
                    fontSize:15,
                    fontWeight:"bold",
                    color:"blue",
                }}>Forgot password?</Text>
            </View>

            <View style={{
                width:"90%",
                height:40,
                alignItems:"center",
                justifyContent:"center",
                marginTop:20,
                marginBottom:30
            }}>
                <TouchableOpacity style={{
                    alignItems:"center",
                    justifyContent:"center",
                    width:"90%",
                    height:40,
                    backgroundColor:"blue",
                    borderRadius:10,
                    
                }} onPress={handleLogin}>
                    <Text style={{
                        fontSize:15,
                        fontWeight:"bold",
                        color:"#fff",
                    }}>
                        Continue
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={{
                flexDirection:"row",
            }}>
                <Image source={require("../assets/Data/google.png")} style={{
                    width:60,
                    height:60,
                    borderRadius:30,
                    marginRight:10,
                }}></Image>
                 <Image source={require("../assets/Data/face.png")} style={{
                    width:60,
                    height:60,
                    borderRadius:30,
                    marginRight:10,
                }}></Image>
                 <Image source={require("../assets/Data/apple.png")} style={{
                    width:60,
                    height:60,
                    borderRadius:30,
                }}></Image>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor:"#fff",
    }
})