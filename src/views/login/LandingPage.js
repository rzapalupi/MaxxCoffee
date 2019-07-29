import React, { Component } from "react";
import { View, Image, Text, ImageBackground, StatusBar } from "react-native";
import { connect } from "react-redux";
import { color, style, font } from "../../styles"
import { Header, Button } from "../../components"
import Axios from "axios";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nim: null,
            password: null,

            is_validate: true,
            is_tutor: false,
            error_message_validation: null
        };
    }

    componentDidMount() {
        this.props.navigation.addListener("didFocus", () => {
            this.props.changeScreen("LandingPage")
        });

    }

    render() {
        return (
            <ImageBackground source={require("../../images/Background_Home.jpg")} style={{ width: '100%', height: '100%' }}>
                <StatusBar translucent={false} barStyle="light-content"  />
                <Header
                    icon={require("../../images/Nav_Drawer_White.png")}
                    onIconPress={() => alert("press")}
                />
                <View style={style.body_wrapper}>
                    <Text style={font.title_white}>Good Morning</Text>
                </View>
                <Button
                    title="SIGN UP"
                    onPress={() => alert("sign up")}
                />
                <Button
                    shape="border"
                    underlayColor={color.white_base_20}
                    title="LOGIN"
                    onPress={() => this.props.navigation.navigate("LoginPage")}
                />
            </ImageBackground>
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
)(LandingPage);
