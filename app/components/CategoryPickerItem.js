import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from '../components/Icon';
import Text from './Text';

export default function CategoryPickerItem({ item, onPress }) {
    return <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
    </View>;

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%'
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})