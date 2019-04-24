import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sa0720642: {
    fontSize: 30
  },
  sd0b7438d: {
    alignItems: `center`,
    backgroundColor: `rgba(243, 247, 255, 1)`,
    borderRadius: 5,
    height: 40,
    justifyContent: `center`,
    width: 40
  }
});

class CheckBox extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <Fragment>
        <View style={styles.sd0b7438d}>
          <>
            {props.checked && (
              <Icon
                style={styles.sa0720642}
                iconIdentifier={`FontAwesome/check`}
              />
            )}
          </>
        </View>
      </Fragment>
    );
  }
}

CheckBox.defaultProps = {
  checked: true
};

export default CheckBox;

export { styles };
