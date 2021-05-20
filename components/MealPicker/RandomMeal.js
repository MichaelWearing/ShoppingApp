import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function RandomMeal({ meal }) {
    return (
        <View>
            <Text style={styles.mealText}>{meal}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mealText: {
        fontSize: 35,
        textAlign: 'center',
        paddingVertical: 80,
    }
})
