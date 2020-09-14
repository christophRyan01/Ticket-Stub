import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color={colors.white}
                />
            </View>
        </TouchableNativeFeedback>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
