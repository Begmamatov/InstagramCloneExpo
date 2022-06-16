import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Lending = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }} >
            <Button title="Register" onPress={() => navigation.navigate('Register')} />
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
    )
}

export default Lending

const styles = StyleSheet.create({})