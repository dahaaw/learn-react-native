import { View, Text, Touchable, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import COLORS from '../../const/colors';

const PrimaryButton = ({title, onPress = () => {}}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={style.btnContainer}>
                <Text style={style.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 18
    },
    btnContainer: {
        backgroundColor: COLORS.primary,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export {PrimaryButton}