import React, { useState } from 'react';
import { View, Image, Text, TextInput,Button,StyleSheet, Avatar, useTheme, Title,TouchableOpacity } from 'react-native';
import {COLORS, SIZES, FONTS} from "../Constant"; 
import a2 from '../assets/images/background.png';
import li from '../assets/images/light.png';
import { useNavigation } from "@react-navigation/native";
import {  Alert } from 'react-native';




const Login = () => {
  const [useremile, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = async () => {
    try {
      const response = await fetch('http://10.0.2.2:5000/auth/login',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ useremile, password })
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(" Logged in successfully ")
        Alert.alert('Success', 'Logged in successfully!', [{ text: 'OK', onPress: () => console.log(data) }]);
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.message || 'Invalid useremile or password');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Server error');
    }
  };
  
  const navigation = useNavigation();
  const rejesterHandler = () =>{
   navigation.navigate("Register");
 };


  return (

<View style={styles.container}>
  <Image source={a2} style={styles.image} />
  <View style={styles.Vligt}>
    <Image style={styles.ligtO} source={li} />
    <Image style={styles.ligtT} source={li} />
  </View>

  <View style={styles.overlay}>
    <View style={styles.titleContainer}>
    <Text style={{
          fontFamily: FONTS.arbaeen,
          fontSize: 24 ,
          color: COLORS.white,
          fontSize: 30,
          marginTop:-18,
          marginBottom:28,
           }}>
              تسجيل دخول</Text>
              <Text style={{
               fontFamily: FONTS.arbaeen,
               fontSize: 24,
               color: COLORS.white,
               fontSize: 30,
               textAlign: 'center',
               marginTop:-3,
               marginBottom:22,
               padding:18,
             }}> 
              </Text>
          </View>

    
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="البريد الإلكتروني"
        value={useremile}
        onChangeText={setEmail}
        placeholderTextColor="#aaa"
      />
    </View>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder=" كلمة المرور "
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#aaa"
      />
    </View>
   
   
    <TouchableOpacity style={styles.button} onPress={handleLogin} >
      <Text style={styles.buttonText}>تسجيل الدخول </Text>
    </TouchableOpacity>
  
    <Text style={styles.linkText}>  ليس لديك حساب قم {" "}
        <Text  style={styles.link}  onPress={(rejesterHandler)}>
          بالتسجيل 
        </Text>{" "}
  </Text>
    
  </View>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom:64,
    backgroundColor: 'rgba(255, 255, 255, 0.0)', // لجعل الخلفية شفافة قليلاً
  },
  Vligt: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  ligtO:{
    width: 90,
    height: 225,
  },
  ligtT:{
    width: 65,
    height: 160,
  },
  title: {
    fontSize: 24,
    marginBottom: 9,
    paddingBottom:9,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: COLORS.gray,
  borderRadius: 20, // تغيير الحواف لتكون مستديرة تمامًا
  paddingHorizontal: 8,
  marginBottom: 16,
  marginTop:11,
  backgroundColor: COLORS.gray,
},
input: {
  flex: 0.8,
  height: 41,
  backgroundColor: COLORS.gray, // تغيير اللون الخلفي
  borderRadius: 20, // تغيير الحواف لتكون مستديرة تمامًا
  paddingVertical: 10, // إزالة القيمة السلبية وجعلها موجبة لتوفير المساحة المناسبة داخل الحقل
  paddingHorizontal: 15, // توسيع الهامش الأفقي للحقل لجعلها أكثر توازنًا

},
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 20,
    marginTop: 16,
    width: 120,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText:{
    marginTop: 20,
    padding: 5,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
  },
  link:{
    color: '#1565C0',
    fontWeight: 'bold',
    fontSize: 17,
  }
});

export default Login ;
