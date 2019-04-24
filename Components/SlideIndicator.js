import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  s3e80eeaf: {
    backgroundColor: `rgba(87, 150, 252, 1)`,
    borderRadius: 3.5,
    height: 7,
    marginRight: 10,
    width: 7
  },
  s974327f3: {
    borderColor: `rgba(87, 150, 252, 1)`,
    borderRadius: 3.5,
    borderWidth: 1,
    height: 7,
    marginRight: 10,
    width: 7
  }
});

class SlideIndicator extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <Fragment>
        <>{props.active === true && <View style={styles.s3e80eeaf} />}</>

        <>{props.active !== true && <View style={styles.s974327f3} />}</>
      </Fragment>
    );
  }
}

SlideIndicator.defaultProps = {
  active: true
};

export default SlideIndicator;

export { styles };
