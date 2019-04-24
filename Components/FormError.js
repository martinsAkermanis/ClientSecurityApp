import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  s56f33355: {
    color: `rgba(0, 0, 0, 0.44)`,
    fontSize: 20,
    left: 10,
    marginRight: 10,
    position: `absolute`
  },
  s35a1942b: {
    backgroundColor: `rgba(251, 158, 158, 1)`,
    borderRadius: 5,
    color: `rgba(0, 0, 0, 1)`,
    fontFamily: `Source Sans Pro`,
    padding: 10,
    paddingLeft: 40,
    width: `100%`
  },
  sc43dd929: {
    alignItems: `center`,
    flexDirection: `row`,
    marginBottom: 10,
    marginTop: 20
  }
});

class FormError extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <Fragment>
        <View style={styles.sc43dd929}>
          <Icon
            style={styles.s56f33355}
            iconIdentifier={`MaterialIcons/error`}
          />
          <Text style={styles.s35a1942b}>{props.message}</Text>
        </View>
      </Fragment>
    );
  }
}

FormError.defaultProps = {
  message: `Error`
};

export default FormError;

export { styles };
