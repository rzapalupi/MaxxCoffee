import React, { Component } from "react";
import { View, ImageBackground, Text } from "react-native";
import { connect } from "react-redux";
import { color, style, font } from "../../styles"
import { Header, Button, TextInputCustom } from "../../components"
import Axios from "axios";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "support@technopartner.id",
            password: "1234567",
        };
    }

    componentDidMount() {
        this.props.navigation.addListener("didFocus", () => {
            this.props.changeScreen("LoginPage")
        });

    }

    doOauth() {
        var formData = new FormData();
        formData.append("client_secret", "0a40f69db4e5fd2f4ac65a090f31b823")
        formData.append("client_id", "e78869f77986684a")
        formData.append("grant_type", "password")
        formData.append("username", this.state.username)
        formData.append("password", this.state.password)

        fetch(baseURL + "/oauth/access_token", {
            method: "post",
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
            },
            body: formData
        }).then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                this.props.setTokenType(responseJson.token_type)
                this.doLogin(responseJson.access_token)
            }).catch(error => {
                console.log(error)
            })
    }

    doLogin(access_token) {
        Axios.post(baseURL + "/api/login",
            {
                email: this.state.username,
                password: this.state.password
            },
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: this.props.token_type + " " + access_token
                }
            }
        ).then(response => {
            console.log(response)
            if (response.data.status === "success") {
                this.props.setToken(response.data.token)
                this.props.navigation.navigate("Home")
            }

        }).catch(error => {
            console.log(error)
        })

    }

    render() {
        return (
            <ImageBackground source={require("../../images/Background_Login.jpg")} style={{ width: '100%', height: '100%' }}>
                <Header
                    icon={require("../../images/Nav_Drawer_White.png")}
                    onIconPress={() => this.props.navigation.navigate("Menu")}
                    title="Login"
                />
                <View>
                    <TextInputCustom
                        title="Email address"
                        onChangeText={text => this.setState({ username: text })}
                        value={this.state.username}
                        returnKeyType="next"
                        keyboardType="email-address"
                    />
                    <TextInputCustom
                        title="Password"
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password}
                        returnKeyType="done"
                        secureTextEntry={true}
                        maxLength={12}
                    />
                    <Button
                        title="LOGIN"
                        onPress={() => this.doOauth()}
                    />
                    <View style={{ alignItems: "center" }}>
                        <Text style={font.sub_title_white}>Not registered yet? Sign up here</Text>
                        <Text style={font.sub_title_white}>Forgot Password?</Text>
                    </View>

                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
    screen: state.app.screen,
    token: state.credential.token,
    token_type: state.credential.token_type,
});

const mapDispatchToProps = dispatch => ({
    changeScreen: screen =>
        dispatch({
            type: "change_screen",
            screen: screen
        }),
    setToken: token =>
        dispatch({
            type: "set_token",
            token: token
        }),
    setTokenType: token_type =>
        dispatch({
            type: "set_token_type",
            token_type: token_type
        }),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
