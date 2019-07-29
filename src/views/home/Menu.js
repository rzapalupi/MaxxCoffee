import React, { Component } from "react";
import { View, Image, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { color, style } from "../../styles"
import { Header } from "../../components"
import Collapsible from 'react-native-collapsible';
import Axios from "axios";
const numColumns = 2;
import { dataDummy } from "../../store/dataDummy"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all_menu_data: {},
            menu_drink: [],
            menu_food: [],
            menu_merchandise: []
        };
    }

    componentDidMount() {
        this.props.navigation.addListener("didFocus", () => {
            this.props.changeScreen("Menu")
        });
        this.shortMenu(dataDummy)
        this.loadMenuList()
    }

    loadMenuList() {
        Axios.get(baseURL + "/api/menu/list"
        ).then(response => {
            console.log(response)
            this.setState({ all_menu_data: response.data.menu })
        }).catch(error => {
            console.log(error)
        })
    }

    shortMenu(dataDummy) {
        for (var key in dataDummy) {
            for (var x in dataDummy[key]) {
                console.log(dataDummy[key][x].nama_menu)
                if(dataDummy[key][x].group === "Food"){

                } else if(dataDummy[key][x].group === "Drinks") {

                } else if(dataDummy[key][x].group === "Merchandise"){
                    
                }
            }

        }

    }

    formatDataRender(data, numColumns) {
        const numberOfFullRows = Math.floor(data.length / numColumns);

        let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
        while (
            numberOfElementsLastRow !== numColumns &&
            numberOfElementsLastRow !== 0
        ) {
            data.push({ empty: true });
            numberOfElementsLastRow = numberOfElementsLastRow + 1;
        }

        return data;
    }

    renderListData(data) {
        return (<FlatList
            style={{ marginHorizontal: 8 }}
            data={this.formatDataRender(data, numColumns)}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            renderItem={({ item, index }) =>
                item.empty ? (
                    <View style={style.cardview_blank} />
                ) : (
                        <View style={style.cardview_container}>
                            <View style={{ height: 115, backgroundColor: "blue" }}>
                                <Image source={item.gambar === null
                                    ? (require("../../images/Image_Belum_Load.png"))
                                    : { uri: item.gambar }} />
                            </View>
                            <Text>{item.nama_menu}</Text>

                        </View>
                    )
            }
        />
        )
    }

    render() {
        return (
            <View style={style.base_container}>
                <Header
                    icon={require("../../images/Nav_Drawer_Black.png")}
                    onIconPress={() => this.props.navigation.navigate("Menu")}
                    title="Menu"
                    titleColor={color.black_base}
                    backgroundColor={color.white_base}
                    borderBottomWidth={0.5}
                />
            </View>
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
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
