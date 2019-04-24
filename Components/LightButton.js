import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sf8f9ffd0: {
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 15,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: `rgba(255, 255, 255, 0)`
  },
  sf95e64ba: {
    alignItems: `center`,
    borderColor: `rgba(255, 255, 255, 0)`,
    borderRadius: 7,
    height: 44,
    justifyContent: `center`,
    backgroundColor: `rgba(113, 11, 11, 1)`
  }
});

class LightButton extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <Fragment>
        <View style={styles.sf95e64ba}>
          <Text style={styles.sf8f9ffd0}>{props.textContent}</Text>
        </View>
      </Fragment>
    );
  }
}

LightButton.defaultProps = {
  textContent: `Add to Wallet`
};

export default LightButton;

export { styles };
