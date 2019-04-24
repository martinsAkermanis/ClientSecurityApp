import React, {Fragment} from "react";
import {View, Text, ImageBackground, StyleSheet} from "react-native";
import MainButton from "./Components/MainButton";

class Top extends React.PureComponent {
    render() {

        return (
            <Fragment>
                <ImageBackground
                    style={styles.s0377d414}
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
                        <View style={styles.s00ab639f}>
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
            </Fragment>
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

Top.defaultProps = {};

export default Top;


