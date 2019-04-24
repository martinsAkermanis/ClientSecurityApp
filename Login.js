import React from 'react'
import {
    View,
    TextInput,
    StyleSheet, ImageBackground
} from 'react-native'
import MainButton from "./Components/MainButton";
import axios from 'axios'


export default class SignUp extends React.Component {
    state = {
        password: '', email: ''
    }
    onChangeText = (key, val) => {
        this.setState({[key]: val})
    }
    signUp = () => {
        const {password, email} = this.state

        axios.post('https://baf3242e.ngrok.io/clients-api/sign-in', {
            email: email,
            password: password
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                this.props.navigation.navigate('MainScreen')

            })
            //.catch(e => console.error(e))
    }


    render() {
        return (
            <ImageBackground
                style={styles.backGround}
                source={{
                    uri:
                        "https://storage.googleapis.com/laska-a5b9d.appspot.com/users/kfi6t754XUPtGEHOYRodwieiDNv2/apps/-LctOC4JePtoUdIRPnD_/f887b6c2.jpg",
                    originalName: "night-1209938_1920.jpg"
                }}
                resizeMode={`cover`}
            >
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        autoCapitalize="none"
                        placeholderTextColor='black'
                        onChangeText={val => this.onChangeText('email', val)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor='black'
                        onChangeText={val => this.onChangeText('password', val)}
                    />

                    <MainButton
                        style={styles.mainButton}
                        title='Sign Up'
                        onPress={this.signUp}
                    />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 250,
        height: 55,
        backgroundColor: `rgba(243, 247, 255, 1)`,
        opacity: 0.55,
        margin: 10,
        padding: 8,
        borderRadius: 5,
        color: `black`,
        fontSize: 15,
        fontWeight: '200',
    },
    container: {
        alignItems: `center`,
        flex: 1,
        justifyContent: `center`,
        width: `100%`
    },
    backGround: {
        flex: 1,
        opacity: 1
    },
})