import React, {Component} from 'react';
import {View, Text, Button, ImageBackground, StyleSheet} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Details from './SignUp'
import MainButton from "./Components/MainButton";
import Login from "./Login";
import MainScreen from "./MainScreen";

class HomeScreen extends React.Component {
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
                    <View style={styles.s0bfa086f}/>
                    <View resizeMode={`contain`} style={styles.s51b00167}>
                        <Text style={styles.se95e47af}>
                            {`protect yourself in 21st century`}
                        </Text>
                    </View>
                    <View style={styles.sae37546b}>
                        <View style={styles.mainButton}>
                            <MainButton
                                title={`Login`}
                                onPress={() =>
                                    this.props.navigation.navigate('Login')
                                }
                                marginBottom={15}
                            />
                            <MainButton
                                title={`Sign up`}
                                onPress={() =>
                                    this.props.navigation.navigate('SignUp')
                                }
                            />
                        </View>
                    </View>
                </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    s0bfa086f: {
        alignItems: `center`,
        justifyContent: `center`,
        width: `100%`
    },
    se95e47af: {
        color: `rgba(243, 247, 255, 1)`,
        fontSize: 20,
        textAlign: `right`,
        top: 50,
        position: `absolute`,
        letterSpacing: 1,
        right: 20
    },
    s51b00167: {
        alignItems: `center`,
        flex: 2,
        justifyContent: `center`,
        width: `100%`
    },
    s6d38b895: {
        opacity: 1
    },
    mainButton: {
        width: 200
    },
    sae37546b: {
        alignItems: `center`,
        flex: 2,
        width: `100%`
    },
    s1bf00777: {
        flex: 1
    },
    backGround: {
        flex: 1,
        opacity: 1
    }
});



const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    SignUp: {
        screen: Details,
    },
    Login: {
        screen: Login,
    },
    MainScreen: {
        screen: MainScreen,
    },
}, {
    initialRouteName: 'Home',
});

const AppContainer =  createAppContainer(AppNavigator);

export default class App extends Component{
    render(){
        return <AppContainer/>
    }
}