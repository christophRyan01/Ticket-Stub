import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import { Image } from 'react-native-expo-image-cache'

import Text from './Text'
import colors from '../config/colors'

export default function Card({ title, subTitle, imageUrl, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} uri={imageUrl} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title} numberOfLines={1}>
                        {title}
                    </Text>
                    <Text style={styles.subtitle} numberOfLines={2}>
                        {subTitle}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.play,
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    subtitle: {
        color: colors.primary,
        fontWeight: "bold"
    },
    title: {
        marginBottom: 7,
        fontWeight: "bold",
    }
})
