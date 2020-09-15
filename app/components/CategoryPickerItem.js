import React from 'react'
import { View, StyleSheet } from 'react-native';

import Icon from '../components/Icon';
import AppText from './AppText';

export default function CategoryPickerItem({ item, onPress }) {
    return <View style={styles.container}>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
        <AppText style={styles.label}>{item.label}</AppText>
    </View>;

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        paddingVertical: 15,
        alignItems: 'center',
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})