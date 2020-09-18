import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={2}
            style={styles.background}
            source={require("../assets/ticketpile.png")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/littleredTicket.png")} />
                <Text style={styles.tagline}>Ticket Stubs</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate(routes.LOGIN)}
                />
                <Button
                    title="Register"
                    color="secondary"
                    onPress={() => navigation.navigate(routes.REGISTER)}
                />
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 200,
        height: 100,
        borderRadius: 20,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagline: {
        fontSize: 45,
        color: "white",
        fontWeight: "600",
        paddingVertical: 20,
        fontFamily: "Arial",
    },
});

export default WelcomeScreen;