import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight } from "react-native";
import { color } from "../styles/index";

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    getShapeStyle(shape) {
        switch (shape) {
            case "fill":
                return {
                    borderRadius: 0
                };
            case "basic":
                return {
                    borderRadius: 4
                };
            case "border":
                return {
                    borderRadius: 4,
                    borderWidth: 1,
                    backgroundColor: "transparent",
                    borderColor: color.white_base,
                };
        }
    }

    render() {
        const {
            style,
            shape,
            backgroundColor,
            underlayColor,
            onPress,
            title,
            titleColor
        } = this.props;

        const initialStyle = {
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 16,
            paddingVertical: 8,
            height: 60,
            margin: 8,
            backgroundColor: backgroundColor
        };

        return (
            <TouchableHighlight
                onPress={onPress}
                underlayColor={underlayColor}
                style={[initialStyle, style, this.getShapeStyle(shape)]}
            >
                <Text style={{color: titleColor}}>{title}</Text>
            </TouchableHighlight>
        );
    }
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    shape: PropTypes.string.isRequired,
    style: PropTypes.object,
    titleColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    underlayColor: PropTypes.string,
};

Button.defaultProps = {
    shape: "basic",
    titleColor: color.white_base,
    backgroundColor: color.green_dark,
    underlayColor: color.green_base,
    borderColor: color.white
};