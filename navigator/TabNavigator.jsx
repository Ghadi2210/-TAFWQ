import { View, Text,StyleSheet} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Books from '../Secreens/Books';
import { COLORS } from '../Constant';
import CustomIcon from '../components/CustomIcon';
import { BlurView } from 'expo-blur';
import { createIconSetFromFontello } from 'react-native-vector-icons';


const Tab = createBottomTabNavigator();
const Icon = createIconSetFromFontello(fontelloConfig);

const TabNavigator = () => {
  return (
    
   <Tab.Navigator
    screenOptions={{
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBarStyle,
      tabBarBackground: () => (
        <BlurView
          overlayColor=""
          blurAmount={15}
          style={styles.BlurViewStyles}
        />
      ),
    }}
  > 
    <Tab.Screen 
      name="HOME" 
      component={Books} 
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <CustomIcon 
            name="home"
            size={15} // تم استخدام size المرسلة إلى tabBarIcon
            color={ COLORS.cardbg } 
          />
        ),
      }} 
    />
     <Icon name="correct-icon-name" size={30} color="#900" />
    <Tab.Screen 
      name="sug" 
      component={Books} 
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <CustomIcon 
            name="sug"
            size={89} // تم استخدام size المرسلة إلى tabBarIcon
            color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} 
          />
        ),
      }} 
    />
  </Tab.Navigator>
  )
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
export default TabNavigator;
