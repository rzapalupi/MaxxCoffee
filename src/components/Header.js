import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight, Image, StyleSheet } from "react-native";
import { color } from "../styles/index";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            icon,
            onIconPress,
            title,
            titleColor,
            backgroundColor,
            borderBottomWidth
        } = this.props;

        return (
            <View style={[style.header_container, {backgroundColor: backgroundColor, borderBottomWidth: borderBottomWidth}]}>
                <TouchableHighlight
                    onPress={onIconPress}
                    underlayColor="transparent"
                >
                    <Image style={style.ic_small} source={icon} />

                </TouchableHighlight>
                <View style={{ flex: 1, marginHorizontal: 16, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{color: titleColor}}>{title}</Text>
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({
    header_container: {
        flexDirection: "row",
        padding: 16,
        height: 65,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: color.black_base,
    },
    ic_small: {
        height: 24,
        width: 24
    }
});

Header.propTypes = {
    onIconPress: PropTypes.func.isRequired,
    icon: PropTypes.number.isRequired,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderBottomWidth: PropTypes.number
};

Header.defaultProps = {
    title: "",
    titleColor : color.white_base,
    backgroundColor: "transparent",
    borderBottomWidth: 0
};