import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet, ImageBackground
} from 'react-native'

export default class MainScreen extends React.Component {


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

            </ImageBackground>
        )
    }


}