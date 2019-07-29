import { StyleSheet, Dimensions } from "react-native";
import color from "./color";

const font = StyleSheet.create({
    title_white: {
        fontSize: 18,
        color: color.white_base
    },
    title_black: {
        fontSize: 18,
        color: color.black_base
    },

    secondary_title: {
        fontSize: 18,
        color: color.black_base_50
    },

    sub_title_black: {
        fontSize: 16,
        color: color.black_base
    },
    sub_title_white: {
        fontSize: 16,
        color: color.white_base
    },

    secondary_subtitle: {
        fontSize: 14,
        color: color.black_base
    },
    secondary_subtitle_green: {
        fontSize: 14,
        color: color.green_dark
    }
});

export default font;
