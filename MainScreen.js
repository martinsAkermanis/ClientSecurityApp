import React, {Fragment} from "react";
import {
    View,
    Button,
    Text,
    StyleSheet,
    PermissionsAndroid,
    Platform,
    Alert,
    ImageBackground
} from 'react-native';

import axios from 'axios';
import MainButton2 from "./Components/MainButton2";
import MainButton3 from "./Components/MainButton3";


class Main extends React.PureComponent {
    state = {
        currentLongitude: "",//Initial Longitude
        currentLatitude: "",//Initial Latitude
        city: "---",
        road: "---",
    }

    SignOutAlert = () => {
        // Works on both iOS and Android
        Alert.alert(
            'Sign Out',
            'Do You Really Want To Sign Out?',
            [
                {text: 'OK', onPress: () => this.logOut()},
            ],
            {cancelable: false},
        );
    }

    goodAlert = () => {
        Alert.alert(
            "Incident sent successfully!"
        )
    }

    badAlert = () => {
        Alert.alert(
            "Error while sending incident!"
        )
    }

    componentDidMount = () => {
        let that = this;
        //Checking for the permission just after component loaded
        if (Platform.OS === 'ios') {
            this.callLocation(that);
        } else {
            const requestLocationPermission = async () => {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                            'title': 'Location Access Required',
                            'message': 'This App needs to Access your location'
                        }
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //To Check, If Permission is granted
                        that.callLocation(that);
                    } else {
                        alert("Permission Denied");
                    }
                } catch (err) {
                    alert("err", err);
                    console.warn(err)
                }
            };
            requestLocationPermission();

        }
    }

    callLocation(that) {
        //alert("callLocation Called");
        navigator.geolocation.getCurrentPosition(
            //Will give you the current location
            (position) => {
                //getting the Latitude from the location json
                const currentLatitude = JSON.stringify(position.coords.latitude);
                //getting the Longitude from the location json
                const currentLongitude = JSON.stringify(position.coords.longitude);
                that.setState({currentLongitude: currentLongitude});
                //Setting state Longitude to re re-render the Longitude Text
                that.setState({currentLatitude: currentLatitude});
                //Setting state Latitude to re re-render the Longitude Text
                this.getAddress(this.state.currentLatitude, this.state.currentLongitude)
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        that.watchID = navigator.geolocation.watchPosition((position) => {
            //Will give you the location on location change
            console.log(position);
            const currentLongitude = JSON.stringify(position.coords.longitude);
            //getting the Longitude from the location json
            const currentLatitude = JSON.stringify(position.coords.latitude);
            //getting the Latitude from the location json
            that.setState({currentLongitude: currentLongitude});
            //Setting state Longitude to re re-render the Longitude Text
            that.setState({currentLatitude: currentLatitude});
            //Setting state Latitude to re re-render the Longitude Text
        });
    }

    componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.watchID);
    }

    getAddress = (latitude, longitude) => {
        axios.get('https://eu1.locationiq.com/v1/reverse.php', {
                params: {
                    key: '6d5d7da8feb488',
                    lat: latitude,
                    lon: longitude,
                    format: 'json'
                }
            }
        )
        //this.setState({city: response.results.address_components.formatted_address})

            .then(response => {
                this.setState({city: response.data.address.city})
                this.setState({road: response.data.address.road})

            })
            .catch(error => {
                console.log(error);
            });
    }

    logOut = () => {
        axios.post('https://6319e5f5.ngrok.io/clients-api/sign-out', {}).then((response) => {
            this.props.navigation.navigate('SignUp')
        })
    }


    sendLocation = () => {
        axios.post('https://6319e5f5.ngrok.io/clients-api/incident', {
            latitude: this.state.currentLatitude,
            longitude: this.state.currentLongitude,
        }).then((response) => {
                this.goodAlert()
            }
        )
            .catch(e => this.badAlert());
    }


    call = () => {
        const args = {
            number: '+37129797471',
            prompt: true,
        };

        call(args).catch(e => console.error(e))
    };


    render() {
        return (
            <ImageBackground
                style={styles.backGround}
                source={require('./images/iPhone6-Plus-Silver-no-logo-JasonZigrino.jpg')}
                resizeMode={`cover`}
            >
                <View style={styles.View}>
                    <Text style={styles.GPS}>{'Your current GPS location is:'}</Text>
                    <Text style={styles.latitude}>
                        LATITUDE: {this.state.currentLatitude}</Text>
                    <Text style={styles.longitude}>
                        LONGITUDE: {this.state.currentLongitude}</Text>
                    <Text style={styles.address}>{'Your current address is:'}</Text>
                    <Text style={styles.city}>
                        CITY: {this.state.city}</Text>
                    <Text style={styles.road}>
                        STREET: {this.state.road}</Text>
                    <MainButton2
                        style={styles.mainButton}
                        title='REPORT INCIDENT'
                        onPress={this.sendLocation}
                    />
                    <MainButton3
                        title={'Call 112'}
                        textContent={`CALL 112`}
                        onPress={this.call}
                    />
                    <Button style={styles.buttonStatus}
                            title='Click here to log out'
                            onPress={this.SignOutAlert}>
                    </Button>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        opacity: 1,
    },
    View: {
        justifyContent: `flex-start`,
        position: `absolute`,
        width: 300,
        flexDirection: `column`,
        left: 40,
        marginTop: 50
    },
    GPS: {
        textAlign: `center`,
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20,
        color: '#41454c',
    },
    latitude: {
        letterSpacing: 1,
        marginTop: 5,
        textAlign: `left`,
        color: 'black'
    },
    longitude: {
        letterSpacing: 1,
        marginTop: 5,
        color: 'black',
    },
    address: {
        textAlign: `center`,
        fontSize: 18,
        marginTop: 30,
        marginBottom: 20,
        color: '#41454c',

    },
    city: {
        letterSpacing: 1,
        fontSize: 14,
        position: `relative`,
        color: 'black',
    },
    road: {
        letterSpacing: 1,
        marginTop: 5,
        marginBottom: 40,
        color: 'black',
    },
    buttonStatus: {
        textAlign: `left`,
        fontSize: 18,
        letterSpacing: 1,
        flex: 1,
        borderWidth: 1,
        borderColor: `rgba(0, 0, 0, 1)`,
        borderRadius: 3,
        borderLeftColor: `rgba(0, 0, 0, 1)`,
        color: `rgba(0, 0, 0, 1)`,
        marginTop: 20
    },
});

Main.defaultProps = {};

export default Main;

export {styles};
