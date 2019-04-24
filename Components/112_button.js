import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  se3e785b0: {
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 15,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: `rgba(255, 255, 255, 0)`
  },
  s2515c38c: {
    alignItems: `center`,
    borderColor: `rgba(255, 255, 255, 0)`,
    borderRadius: 7,
    height: 44,
    justifyContent: `center`,
    backgroundColor: `rgba(81, 78, 78, 1)`
  }
});

class _112Button extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <Fragment>
        <View style={styles.s2515c38c}>
          <Text style={styles.se3e785b0}>{props.textContent}</Text>
        </View>
      </Fragment>
    );
  }
}

_112Button.defaultProps = {
  textContent: `Add to Wallet`
};

export default _112Button;

export { styles };
