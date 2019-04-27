import React, {Fragment} from "react";
import {
    Text,
    Button,
    ImageBackground,
    View,
    TouchableHighlight,
    ScrollView,
    StyleSheet
} from "react-native";


class Onboarding3 extends React.PureComponent {
    nextPage = () => {
        {
            this.props.navigation.navigate('MainScreen')
        }
    }

    render() {
        const {} = this;
        const {navigation} = this.props;

        return (
            <Fragment>
                <ScrollView style={styles.s3197aaed}>
                    <View style={styles.s8f9c46b1}>
                        <View style={styles.s5330a1ce}>
                            <Text style={styles.sb300d9cb}>
                                {`Your peace of mind is our extra mile`}
                            </Text>
                            <Text style={styles.sc6f61554} selectable={false}>
                                {`Think security industry is left behind?`}
                            </Text>
                            <Text style={styles.sc469336b} selectable={false}>
                                {`Think again - we use latest technology to provide best solutions for our customers`}
                            </Text>
                            <ImageBackground
                                style={styles.s0c07e003}
                                source={require('./images/Screenshot_2019_04_21_at_11.15.02.png')}
                                resizeMode={`cover`}
                            />
                        </View>
                        <View style={styles.but1}>
                            <View style={styles.but2}>
                                <View style={styles.but3}>
                                </View>
                                <Button
                                    title={"NEXT"}
                                    underlayColor={`rgba(0, 0, 0, 0)`}
                                    style={styles.buttonStyle}
                                    onPress={this.nextPage}
                                    color={'#4ab0e8'}
                                >
                                </Button>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    sb300d9cb: {
        backgroundColor: `rgba(207, 38, 38, 0)`,
        fontSize: 35,
        lineHeight: 45,
        marginTop: 50,
        textAlign: `center`,
        letterSpacing: 1
    },
    sc6f61554: {
        color: `rgba(251, 0, 0, 1)`,
        fontSize: 15,
        lineHeight: 21,
        marginTop: 35,
        textAlign: `center`,
    },
    sc469336b: {
        color: `rgba(0, 0, 0, 1)`,
        fontSize: 15,
        lineHeight: 21,
        marginTop: 35,
        textAlign: `center`,
    },
    s0c07e003: {
        alignItems: `center`,
        flex: 1,
        marginTop: 20,
        overflow: `hidden`,
        paddingTop: 20,
        backgroundColor: `rgba(255, 255, 255, 0)`
    },
    s5330a1ce: {
        backgroundColor: `rgba(255, 255, 255, 0)`,
        height: 580
    },
    but3: {
        flexDirection: `row`
    },
    s2c3a750d: {
        marginLeft: 8
    },
    s260da2f3: {
        fontSize: 13,
        letterSpacing: 0.56,
        marginRight: 10
    },
    buttonStyle: {
        alignItems: `center`,
        flexDirection: `row`,
        padding: 20
    },
    but2: {
        alignItems: `center`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        width: 284
    },
    but1: {
        alignItems: `center`,
        flexDirection: `row`,
        height: 117,
        justifyContent: `center`
    },
    s8f9c46b1: {
        height: 667
    },
    s3197aaed: {
        backgroundColor: `rgba(255, 255, 255, 1)`
    }
});

Onboarding3.defaultProps = {};

export default Onboarding3;

export {styles};
