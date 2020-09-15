import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/colors'

const listings = [
    {
        id: 1,
        title: 'blue tickets',
        price: 100,
        image: require('../assets/bluetickets.jpeg')
    },
    {
        id: 2,
        title: 'blue tickets front row',
        price: 1000,
        image: require('../assets/bluetickets.jpeg')
    }
];

export default function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image} />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.red
    }
})