import React, {Fragment} from "react";
import {
    Text,
    Image,
    ImageBackground,
    Button,
    View,
    TouchableHighlight,
    ScrollView,
    StyleSheet
} from "react-native";
import imgStripesWallpaperHD1 from "./images/stripes_wallpaper_HD1.jpg";
import Icon from "./_laska_/Icon";


class Onboarding2 extends React.PureComponent {
    nextPage = () => {
        {
            this.props.navigation.navigate('Onboarding2')
        }
    }

    render() {
        const {} = this;
        const {navigation} = this.props;

        return (
            <Fragment>
                <ScrollView style={styles.ScrollView}>
                    <View style={styles.View1}>
                        <View style={styles.view2}>
                            <Text numberOfLines={3} style={styles.TextHeader}>
                                {`Fast.
Efficient.
Delivered.`}
                            </Text>
                            <Text style={styles.text1} selectable={false}>
                                {`Ever wondered about security unit response times?`}
                            </Text>
                            <Text style={styles.text2} selectable={false}>
                                {`We use advanced algorithms to connect your device with the closest unit available`}
                            </Text>
                            <ImageBackground
                                style={styles.imageBack}
                                source={require('./images/Black_And_White_Abstract_Backgrounds_Cave_wallpaper_wpt7602602.jpg')}
                                resizeMode={`cover`}
                            >
                            </ImageBackground>
                        </View>
                        <View style={styles.but1}>
                            <View style={styles.but2}>
                                <View style={styles.but3}>
                                </View>
                                <Button
                                    title={"NEXT"}
                                    underlayColor={`rgba(0, 0, 0, 0)`}
                                    style={styles.button}
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
    TextHeader: {
        backgroundColor: `rgba(207, 38, 38, 0)`,
        fontSize: 35,
        lineHeight: 42,
        marginTop: 45,
        textAlign: `center`,
        letterSpacing: 1,
        marginBottom: 30
    },
    text1: {
        color: `rgba(255, 0, 0, 1)`,
        fontSize: 15,
        lineHeight: 21,
        textAlign: `center`,
    },
    text2: {
        color: `rgba(0, 0, 0, 1)`,
        fontSize: 15,
        lineHeight: 21,
        marginTop: 30,
        textAlign: `center`,
        marginBottom: 10
    },
    imageBack: {
        alignItems: `center`,
        flex: 1,
        overflow: `hidden`,
        justifyContent: `flex-start`
    },
    view2: {
        backgroundColor: `rgba(255, 255, 255, 0)`,
        height: 580
    },
    but3: {
        flexDirection: `row`
    },
    sdc663206: {
        marginLeft: 8
    },
    sd49ac800: {
        fontSize: 13,
        letterSpacing: 0.56,
        marginRight: 10
    },
    button: {
        alignItems: `center`,
        flexDirection: `row`,
        padding: 20
    },
    but2: {
        alignItems: `center`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        width: 284,
        marginTop: 1
    },
    but1: {
        alignItems: `center`,
        flexDirection: `row`,
        height: 117,
        justifyContent: `center`
    },
    View1: {
        height: 667
    },
    ScrollView: {
        backgroundColor: `rgba(255, 255, 255, 1)`
    }
});

Onboarding2.defaultProps = {};

export default Onboarding2;

export {imgStripesWallpaperHD1, styles};
