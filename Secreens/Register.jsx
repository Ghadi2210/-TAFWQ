import React, { useState } from 'react';
import { View, Image,Alert, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {COLORS, SIZES, FONTS} from "../Constant"; 
import a2 from '../assets/images/background.png';
import li from '../assets/images/light.png';
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [username, setUsername] = useState('');
  const [useremile, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setCPassword] = useState('');

  const handleLsignup = async () => {
    try {
      const response = await fetch('http://10.0.2.2:5000/auth/signup',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username , useremile , password , confirmPassword })
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(" signup in successfully ")
        Alert.alert('Success', 'signup in successfully!', [{ text: 'OK', onPress: () => console.log(data) }]);
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
   navigation.navigate("login");
  };
   const bookHandler = () =>{
    navigation.navigate("TabNavigator");
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
          marginTop:-23,
          marginBottom:-3,
           }}>
              إنشاء حساب</Text>
              <Text style={{
               fontFamily: FONTS.arbaeen,
               fontSize: 24,
               color: COLORS.white,
               fontSize: 30,
               textAlign: 'center',
               marginTop:-25,
               marginBottom:28,
               padding:18,
             }}> 
              جديد</Text>
          </View>

    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="اسم المستخدم"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#aaa"
      />
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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="تاكيد كلمة المرور  "
        value={confirmPassword}
        onChangeText={setCPassword}
        placeholderTextColor="#aaa"
      />
    </View>

    <TouchableOpacity style={styles.button} onPress={handleLsignup  } >
      <Text style={styles.buttonText}>تسجيل</Text>
    </TouchableOpacity>

    <Text style={styles.linkText}>   قم {" "}
        <Text  style={styles.link}  onPress={(bookHandler )}>
           بتسجيل الدخول 
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
    marginBottom: -61,
    fontSize: 16,
  },
  link:{
    color: '#1565C0',
    fontWeight: 'bold',
    fontSize: 17,
  }
});

export default Register;
