import React from "react";
import styles from "../assets/styles";

import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";

const CardItem = ({
	actions,
	description,
	image,
	matches,
	name,
	onPressLeft,
	onPressRight,
	status,
	variant
}) => {
	const fullWidth = Dimensions.get("window").width;
	const imageStyle = [
		{
			borderRadius: 8,
			width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
			height: variant ? 170 : 350,
			margin: variant ? 0 : 20
		}
	];

	const nameStyle = [
		{
			paddingTop: variant ? 10 : 15,
			paddingBottom: variant ? 5 : 7,
			color: "#363636",
			fontSize: variant ? 15 : 30
		}
	];

	return (
		<View style={styles.containerCardItem}>
			<Image source={image} style={imageStyle} />

			{matches && (
				<View style={styles.matchesCardItem}>
					<Text style={styles.matchesTextCardItem}>
						{matches}% Match!
					</Text>
				</View>
			)}

			<Text style={nameStyle}>{name}</Text>

			{description && (
				<Text style={styles.descriptionCardItem}>{description}</Text>
			)}

			{status && (
				<View style={styles.status}>
					<View style={status === "Online" ? styles.online : styles.offline} />
					<Text style={styles.statusText}>{status}</Text>
				</View>
			)}

			{actions && (
				<View style={styles.actionsCardItem}>
					<TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
						<Image
							style={{width: 30, height: 30}}
							source={require('../assets/images/heart.png')}
						/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => onPressRight()}>
					<Image
							style={{width: 30, height: 30}}
							source={require('../assets/images/x.jpg')}
						/>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default CardItem;
