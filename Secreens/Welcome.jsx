import { View, Text, StyleSheet , Image, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import {COLORS, SIZES, FONTS} from "../Constant"; 
import a1 from "../assets/images/a1.jpeg"
import a2 from "../assets/images/a2.jpeg"
import a3 from "../assets/images/a3.jpeg"
import Butten from '../components/Butten';
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  const duration = 1000;
  const delay = duration + 300;

   {/*  دوال حركة الصور  */}
  const fadeImagesAnimation =useRef(new Animated.Value(0)).current;
  const moveImagesAnimation =useRef(new Animated.ValueXY({x : 100 , y : 100})).current;
 
   {/* دوال حركة النصوص والبطمة  */}
   const fadeTextAnimation = useRef(new Animated.Value(0)).current;
   const moveButtonAnimation = useRef(new Animated.Value(1)).current;
  
   /** دوال خاصة بحركة الصور */
  const imagesAnimationHandler =() =>{
    Animated.sequence([
      Animated.timing(fadeImagesAnimation, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
      Animated.spring(moveImagesAnimation, {
        toValue: { x: 0, y: 0 },
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  };
  
  /** دوال خاصة بحركة النصوص */
  const textAnimationHandler =() =>{
   
      Animated.timing(fadeTextAnimation, {
        toValue: 1,
        duration,
        delay,
        useNativeDriver: true,
      }).start();
  };

  /** دوال خاصة بحركة البطمة  */
  const buttonAnimationHandler =() =>{
   
    Animated.spring(moveButtonAnimation, {
      toValue: 0,
      friction:4,
      delay,
      useNativeDriver: true,
    }).start();
};

  /** بمتابة كومبونت تشمل تشغيل جميع الدوال */
  useEffect(() => {
    imagesAnimationHandler();
    textAnimationHandler();
    buttonAnimationHandler();
  }, [imagesAnimationHandler,textAnimationHandler,buttonAnimationHandler]);


  const pressHandler = () =>{
    navigation.navigate("Login");
  };

  return (
<View style={styles.container} >
        
      {/* هدا كومبونت فيه الصور بااطاراتهن والحركه  */}
      <Animated.View style={[styles.imageContainer , {  opacity: fadeImagesAnimation,transform : moveImagesAnimation.getTranslateTransform(), }]}>

        {/* الصورة الاولة واطارها  */}
        <View style={styles.imageCard}>
           <Image style={styles.image} source={a2}></Image>
        </View>

        <View style={[styles.imageCard, {top: SIZES.midium + 15 }]}>
           <Image style={styles.image} source={a1}></Image>
        </View>

        <View style={styles.imageCard}>
           <Image style={styles.image} source={a3}></Image>
        </View>
      </Animated.View>
 
      {/* خاص بالنصوص  */}
      <Animated.View style={[styles.textContainer, {
        opacity:fadeTextAnimation,
      },]}>
        <Text style={styles.mainText}> مرحبا بكم ! </Text>
        <Text style={styles.subText}> تطبيق " تفوق " لمساعدة الطلاب في مادة الرياضيات  </Text>
      </Animated.View>
     
      {/* خاص بالبطمة  */}
      <Animated.View style={[styles.buttonContainer,{
        transform:[{translateY:moveButtonAnimation.interpolate({
          inputRange :[0 , 1],
          outputRange : [0 , 200],
        })
        
        }]
      }]}>
       <Butten
       title=" ابدا الان "
       pressHandler={pressHandler}
       stylesButton={styles.button}
       stylesText={styles.textButton}/>
      </Animated.View >
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create (
  {
    container: {
      paddingHorizontal: SIZES.small + 10,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      
  },
  
  imageContainer: {
    top: -SIZES.midium,
    flexDirection:"row",
    gap: SIZES.small,
  },
  imageCard: {
    borderRadius: SIZES.midium,
    padding: SIZES.small,
    backgroundColor: COLORS.cardbg,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: SIZES.midium,
  }, 
  
  textContainer: {
    margin: SIZES.small,
    padding: SIZES.small,
    marginVertical: SIZES.xlarge + 6,
  },
  mainText: {
   
    fontSize: SIZES.xlarge + 10,
    textAlign: "center",
    color: COLORS.black,
  },
  subText: {
   
    textAlign: "center",
    marginTop: SIZES.large ,
    color: COLORS.black,
    fontSize : SIZES.large,
  },
  buttonContainer: {
    position: "absolute",
    bottom: SIZES.xlarge + 10,
    marginVertical: SIZES.xlarge,
    
  },
  button: {
    backgroundColor: COLORS.gray,
    padding: SIZES.small + 4,
    width: 180,
    alignItems: "center",
    borderRadius: SIZES.midium,
  },
  textButton: {
    color: COLORS.black,
    
    fontSize: SIZES.xlarge,
  },
});