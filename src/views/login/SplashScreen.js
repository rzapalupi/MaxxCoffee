import React, { Component } from "react";
import { View, Image, StatusBar, BackHandler, Alert } from "react-native";
import { connect } from "react-redux";
import { color, style } from "../../styles"

class SplashScreen extends Component {

    handleBackPress() {
        const screenLocation = this.props.screen;

        switch (screenLocation) {
            case "LandingPage":
                BackHandler.exitApp();
                break;
            case "Home":
                Alert.alert(
                    "INFO",
                    "Apakah anda yakin ingin keluar?",
                    [
                        {
                            text: "Ya",
                            onPress: () => {
                                this.props.navigation.navigate("LandingPage");
                            }
                        },
                        {
                            text: "Tidak",
                            onPress: () => { }
                        }
                    ]
                );
                break;
            default:
                this.props.navigation.goBack(null);
                break;
        }

        return true;
    }


    componentDidMount() {
        setTimeout(() => {
            BackHandler.addEventListener(
                "hardwareBackPress",
                this.handleBackPress.bind(this)
            );
            this.props.navigation.navigate("LandingPage");
        }, 2000);
    }

    render() {
        return (
            <View style={style.splash_screen_container}>
                <StatusBar translucent={false} barStyle="light-content" hidden={true} />
                <Image source={require("../../images/Logo.png")} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    screen: state.app.screen
});

const mapDispatchToProps = dispatch => ({
    changeScreen: screen =>
        dispatch({
            type: "change_screen",
            screen: screen
        }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SplashScreen);
