import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#b7142c", // orange
    secondary: "#848383",   // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#101114',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding15 :15,
    padding2: 20,
    padding25: 25,
    padding3: 30,


    br1: 10,
    br15 : 10,
    br2: 20,
    br9: 99,


    head: 70,
    headios: 95,
    bar :45,
    height5 : 50,

    // font sizes
    largeTitle: 50,
    h1: 19,
    h2: 17,
    h4: 14,
    h5 : 13,
    h6 :12,
    
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;