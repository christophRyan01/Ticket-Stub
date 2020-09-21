import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="ticket"
                    color={colors.white}
                    size={50}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#4ca3dd",
        borderColor: colors.medium,
        borderRadius: 15,
        borderWidth: 3,
        bottom: 20,
        height: 60,
        justifyContent: "center",
        width: 170,
    },
});

export default NewListingButton;