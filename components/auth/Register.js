import React, { useState } from 'react'
import { StyleSheet, Button, TextInput, View } from 'react-native'

// import { createUserWithEmailAndPassword } from '@firebase/auth';

// import { auth } from '../../firebase-config';

const Register = () => {

    const [state, setState] = useState({ email: '', password: '', name: '' })

    // const onSignUp = async () => {
    //     const { email, password, name } = state;
    //     try {
    //         const user = await createUserWithEmailAndPassword(auth, email, password);
    //         console.log('User created successfully');
    //         console.log(user);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <View>
            <TextInput placeholder="Email" onChangeText={(email) => setState({ ...state, email })} />
            <TextInput placeholder="Password" onChangeText={(password) => setState({ ...state, password })} />
            <TextInput placeholder="Name" onChangeText={(name) => setState({ ...state, name })} />
            <Button title="Register" onPress={() => console.log('Register')} />
        </View >
    )
}

export default Register

const styles = StyleSheet.create({})