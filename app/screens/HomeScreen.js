import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import AppButton from '../components/AppButton'

export default function HomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={5}
            style={styles.background}
            source={require('../assets/ticketstubback.png')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/favicon.png')} />
                <Text style={styles.tagline}>Tickets For Sale</Text>
            </View>
            <View style={styles.buttonsContainer} >
                <AppButton title="Login" />
                <AppButton title="Register" color="secondary" />
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",

    },
    buttonsContainer: {
        padding: 20,
        width: '100%',

    },
    logo: {
        width: 100,
        height: 100,

    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    }
})
