import { StyleSheet, Dimensions } from "react-native";
import color from "./color";

const style = StyleSheet.create({
	base_container: {
		flex: 1,
		backgroundColor: color.white_base
	},
	splash_screen_container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: color.white_base
	},
	login_body_wrapper: {
		alignItems: "center"
	},
	body_wrapper: {
		flex: 1,
		marginHorizontal: 16
	},

	prime_card_container: {
		padding: 16,
		backgroundColor: color.white_base_70
	},

	shape_line: {
		marginVertical: 16,
		height: 1,
		backgroundColor: color.black_base
	},
	row_view: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 8
	},
	center_view: {
		justifyContent: "center",
		alignItems: "center"
	},

	//Menu
    cardview_container: {
        flex: 1,
        justifyContent: "space-between",
		margin: 8,
		elevation: 4
    },

	cardview_blank: {
        flex: 1,
        justifyContent: "space-between",
        margin: 8
    },
});

export default style;
