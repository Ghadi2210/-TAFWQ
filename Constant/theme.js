import { PixelRatio } from "react-native";
const fontScale = PixelRatio.getFontScale();
export const SIZES ={
       small: 9 * fontScale ,
       midium: 14 * fontScale ,
       large: 18 * fontScale ,
       xlarge: 24 * fontScale ,
};
export const COLORS ={
       bg: "#56a5ec",
       cardbg: "#1f2937",
       white: "#fff",
       black: "#000",
       gray: "#ddd",
              primaryRedHex: '#DC3535',
              primaryOrangeHex: '#D17842',
              primaryBlackHex: '#0C0F14',
              primaryDarkGreyHex: '#141921',
              secondaryDarkGreyHex: '#21262E',
              primaryGreyHex: '#252A32',
              secondaryGreyHex: '#252A32',
              primaryLightGreyHex: '#52555A',
              secondaryLightGreyHex: '#AEAEAE',
              primaryWhiteHex: '#FFFFFF',
              primaryBlackRGBA: 'rgba(12,15,20,0.5)',
              secondaryBlackRGBA: 'rgba(0,0,0,0.7)',
            };

export const FONTS ={
  
    Medium: 'InterMedium',
   
    SemiBold: 'InterSemiBold' ,
    Light: 'InterLight',
    arbaeen:'Arbaeen',
};
