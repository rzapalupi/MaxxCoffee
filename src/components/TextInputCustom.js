import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { color } from "../styles/index";

export default class TextInputCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            borderColor: color.black
        };
    }

    render() {
        const {
            title,
            titleColor,
            placeholderTextColor,
            onChangeText,
            value,
            returnKeyType,
            keyboardType,
            secureTextEntry,
            maxLength,
        } = this.props;

        return (
            <View style={style.text_input_container}>
                <Text style={{ color: titleColor }}>{title}</Text>
                <TextInput
                    style={style.text_input_wrapper}
                    onChangeText={onChangeText}
                    value={value}
                    returnKeyType={returnKeyType}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={placeholderTextColor}
                    maxLength={maxLength}
                />
            </View>
        );
    }
}


const style = StyleSheet.create({
    text_input_container: {
        margin: 8
    },
    text_input_wrapper: {
        marginTop: 8,
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
        color: color.white_base,
        backgroundColor: color.white_base_20,
        borderBottomColor: color.black_base,
    }
});

TextInputCustom.propTypes = {
    title: PropTypes.string,
    titleColor: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string,
    returnKeyType: PropTypes.string,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    maxLength: PropTypes.number,
};
TextInputCustom.defaultProps = {
    titleColor: color.white_base,
    placeholderTextColor: color.white_base
};