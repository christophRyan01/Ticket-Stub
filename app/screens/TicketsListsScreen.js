import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'

import colors from '../config/colors'

export default function TicketsListsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/bluetickets.jpeg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}> Blue Tickets For Sale </AppText>
                <AppText style={styles.price}> $100 </AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/userImage.jpeg')}
                        title="Chris Gotschall"
                        subTitle="2 Listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    userContainer: {
        marginVertical: 35
    }
})