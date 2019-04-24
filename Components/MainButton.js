import React, { Fragment } from "react";
import {
  Text,
  ActivityIndicator,
  View,
  TouchableHighlight,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  s8a6106a1: {
    color: `rgba(255, 255, 255, 1)`,
    fontFamily: `Helvetica`,
    fontSize: 17,
    letterSpacing: 1
  },
  sb5d21fe5: {
    alignItems: `center`,
    borderRadius: 8,
    height: 50,
    justifyContent: `center`,
    backgroundColor: `rgba(145, 149, 156, 0.67)`,
    shadowOpacity: 0.93,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0
    }
  }
});

class MainButton extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <Fragment>
        <TouchableHighlight
          underlayColor={`rgba(0, 0, 0, 0.74)`}
          style={[
            styles.sb5d21fe5,
            {
              marginBottom: props.marginBottom,
              marginTop: props.marginTop
            }
          ]}
          onPress={props.onPress}
        >
          <View>
            <>
              {!props.loading && (
                <Text style={styles.s8a6106a1} onPress={() => {}}>
                  {props.title}
                </Text>
              )}
            </>

            <>
              {props.loading && (
                <ActivityIndicator
                  size={`large`}
                  color={`rgba(243, 247, 255, 1)`}
                />
              )}
            </>
          </View>
        </TouchableHighlight>
      </Fragment>
    );
  }
}

MainButton.defaultProps = {
  title: `Button`,
  onPress: () => {},
  loading: false
};

export default MainButton;

export { styles };
