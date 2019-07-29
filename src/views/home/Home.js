import React, { Component } from "react";
import { View, Image, Text, ImageBackground, Dimensions } from "react-native";
import { connect } from "react-redux";
import { color, style, font } from "../../styles"
import { Header, Button } from "../../components"
import Axios from "axios";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.navigation.addListener("didFocus", () => {
            this.props.changeScreen("Home")
        });
        this.loadDataHome()
    }

    loadDataHome() {
        Axios.post(
            baseURL + "/api/v2/home",
            {
                token: this.props.token
            },
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: this.props.token_type + " " + this.props.token
                },
            },

        )
            .then(response => {
                console.log(JSON.stringify(response));
                this.props.setDataUser(response.data)
                this.props.setPrimaryCard(response.data.primaryCard)
            })
            .catch(error => {
                console.log(JSON.stringify(error));

            });
    }

    render() {
        return (
            <ImageBackground source={require("../../images/Background_Home.jpg")} style={{ width: '100%', height: '100%' }}>
                <Header
                    icon={require("../../images/Nav_Drawer_White.png")}
                    onIconPress={() => this.props.navigation.navigate("Menu")}
                />
                <View style={style.body_wrapper}>
                    <Text style={font.title_white}>{this.props.data_user.salam}</Text>
                    <Text style={font.title_white}>{this.props.data_user.username}</Text>
                    <Text style={font.title_white}>{"IDR " + this.props.data_user.balance}</Text>
                    <Text style={font.title_white}>{this.props.data_user.beans + " Beans"}</Text>
                </View>

                <View style={style.prime_card_container}>
                    <Text style={font.title_black}>Prime  to Pay</Text>
                    <View style={style.shape_line}></View>
                    <Text style={font.secondary_title}>Show below QR Code to the cashier</Text>

                    <Text style={font.sub_title_black}>Kartu Satu</Text>

                    <View style={[style.row_view, {justifyContent: "space-between", paddingRight: "20%"}]}>
                        <Text style={font.secondary_subtitle_green}>Balance</Text>
                        <Text style={font.secondary_subtitle}>{"IDR " + this.props.data_user.balance}</Text>
                    </View>
                    <View style={[style.row_view, {justifyContent: "space-between", paddingRight: "20%"}]}>
                        <Text style={font.secondary_subtitle_green}>Beans</Text>
                        <Text style={font.secondary_subtitle}>{this.props.data_user.beans}</Text>
                    </View>


                    <View style={[style.center_view, {marginTop: 16}]}>
                        <Image
                            style={{
                                width: Dimensions.get("screen").height * (3 / 10),
                                height: Dimensions.get("screen").height * (3 / 10)
                            }}

                            source={this.props.primary_card === null
                                ? require("../../images/Image_Belum_Load.png")
                                : { uri: this.props.primary_card.barcode }} />
                    </View>



                </View>

            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
    screen: state.app.screen,
    data_user: state.app.data_user,
    primary_card: state.app.primary_card,
    token: state.credential.token,
    token_type: state.credential.token_type,
});

const mapDispatchToProps = dispatch => ({
    changeScreen: screen =>
        dispatch({
            type: "change_screen",
            screen: screen
        }),
    setDataUser: data_user =>
        dispatch({
            type: "set_data_user",
            data_user: data_user
        }),
    setPrimaryCard: primary_card =>
        dispatch({
            type: "set_primary_card",
            primary_card: primary_card
        }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
