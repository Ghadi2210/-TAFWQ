import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Alert, Butten } from 'react-native';
import { COLORS, SIZES, FONTS } from "../Constant"; 
import book7 from '../assets/images/book7.jpg';
import book8 from '../assets/images/book8.jpg';
import mathbac from '../assets/images/mathbac.png';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Button } from 'react-native-paper';

const Books = () => {
  const [element7, setElement7] = useState(false);
  const [element8, setElement8] = useState(false);
  const [data, setData] = useState([]);
  const [data8, setData8] = useState([]);
  const [unitId, setunitId] = useState([]);

  const isFocused = useIsFocused();

  const display = () => {
    setElement7(!element7);
  };

  const display8 = () => {
    setElement8(!element8);
  };

  const handleLunit8 = async () => {
    try {
      const response = await fetch('http://10.0.2.2:5000/unit8/getunit8', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const result8 = await response.json();
      setData8(result8);  
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Server error');
    }
  };

  const handleLunit = async () => {
    try {
      const response = await fetch('http://10.0.2.2:5000/unit/getunit', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const result = await response.json();
      setData(result);  
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Server error');
    }
  };

  useEffect(() => {
    handleLunit();
    handleLunit8();
  }, [isFocused]);

  const navigation = useNavigation();
  const nextpage = () => {
    navigation.navigate("Exercis7", {
      id: unitId
    });
  };
  const enter = () => {
    navigation.navigate("Enter");
  };

  useEffect(() => {
    if (isFocused) {
      setunitId(null); // Reset unitId when screen is focused
    }
  }, [isFocused]);

  return (

    <View style={styles.container}>
      <Image source={mathbac} style={styles.imageb} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewFlex}>
        <Text style={styles.screenTitle}>
          قم بإختيار{'\n'}فصل الدراسي الخاص بك
        </Text>

        <View style={styles.imageContainer}>
          <View style={styles.imageCard} onTouchEnd={display}>
            <Image style={styles.image} source={book7}></Image>
            {element7 ? (
              <View style={styles.menu}>
                {data.map((i) => (
                  <View key={i.idUnit} style={styles.menuItem} >
                    <Text style={styles.unitNumber}  >{i.idUnit} </Text>
                    <Text style={styles.unitName} onPress={() => { setunitId(i.idUnit); nextpage(); }} >{i.nameUnit}</Text>
                  </View>
                ))}
              </View>
            ) : null}
          </View>



          <View style={styles.imageCard} onTouchEnd={display8}>
            <Image style={styles.image} source={book8}></Image>
            {element8 ? (
              <View style={styles.menu}>
                {data8.map((E) => (
                  <View key={E.idUnit} style={styles.menuItem}>
                    <Text style={styles.unitNumber}>{E.idUnit}</Text>
                    <Text style={styles.unitName}>{E.nameUnit}</Text>
                  </View>
                ))}
              </View>
            ) : null}
          </View>
        
        </View>

        <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={enter} style={styles.button}>
          انتقل إلى الصفحة التالية
        </Button>
      </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white, 
  },
  scrollViewFlex: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: 25,
    fontFamily: FONTS.arbaeen,
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: 50,
  },
  imageContainer: {
    top: SIZES.midium, // تأكد من أن هذا الحجم معرف بشكل صحيح
    flexDirection: 'row',
    gap: SIZES.small,
    paddingBottom: 20, // تعديل القيمة لتجنب NaN
    marginBottom: 20,  // تعديل القيمة لتجنب NaN
  },
  imageCard: {
    borderRadius: SIZES.midium, // تأكد من أن هذا الحجم معرف بشكل صحيح
    padding: 7,
    backgroundColor: COLORS.cardbg,
  },
  image: {
    width: 180,
    height: 220,
    borderRadius: 7,
  },
  imageb: {
    position: 'absolute',
    width: '100%',
    height: '28%',
    resizeMode: 'cover',
  },
  menu: {
    position: 'absolute',
    top: '100%', // Position the menu below the image
    left: 2,
    right: 3,
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 9,
    elevation: 9, //ظل 
    marginTop: 14,
    borderBlockColor: COLORS.black,
    borderColor: COLORS.black,
    borderWidth: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.gray,
  },
  unitNumber: {
    fontSize: 16,
    color: COLORS.black,
    marginRight: 10,
  },
  unitName: {
    fontSize: 16,
    color: COLORS.black,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    width: 200,
  },
});

export default Books;
