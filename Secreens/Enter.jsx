import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

const Enter = () => {
  const [idt, setidt] = useState('');
  const [Qname, setQname] = useState('');
  const [idUnit, setidUnit] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/Q7router/insertQ7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idt, Qname, idUnit })
      });

      const responseText = await response.text(); 
      console.log(responseText); 

      if (response.ok) {
        const data = JSON.parse(responseText); // تحليل نص الاستجابة كـ JSON
        console.log("Submit in successfully");
        Alert.alert('Success', 'Submit in successfully!', { text: 'OK', onPress: () => console.log(data) });
      } else {
        const errorData = JSON.parse(responseText); // تحليل نص الاستجابة كـ JSON
        Alert.alert('Error', errorData.message || 'Invalid useremile or password');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Server error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>رقم التمرين:</Text>
      <TextInput
        style={styles.input}
        value={idt}
        onChangeText={setidt}
        placeholderTextColor="#aaa"
      />
     
      <Text style={styles.label}>اسم التمرين:</Text>
      <TextInput
        style={styles.input}
        value={Qname}
        onChangeText={setQname}
        placeholderTextColor="#aaa"
      />
      
      <Text style={styles.label}>رقم الوحدة:</Text>
      <TextInput
        style={styles.input}
        value={idUnit}
        onChangeText={setidUnit}
        placeholderTextColor="#aaa"
      />
      
      <Button title="إرسال" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default Enter;
