import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText'
import colors from '../config/colors'

export default function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailContainer}>
                        <AppText style={styles.title} numberOfLines={1}>
                            {title}
                        </AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>
                            {subTitle}
                        </AppText>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" color={colors.medium} size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
        alignItems: "center",
    },
    detailContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontSize: 22,
    },

})