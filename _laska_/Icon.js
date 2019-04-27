import React from "react";

let iconSets = null;

iconSets = {
  AntDesign: require("react-native-vector-icons/AntDesign").default,
  MaterialIcons: require("react-native-vector-icons/MaterialIcons").default,
  FontAwesome: require("react-native-vector-icons/FontAwesome").default,
  Entypo: require("react-native-vector-icons/Entypo").default,
  MaterialCommunityIcons: require("react-native-vector-icons/MaterialCommunityIcons")
    .default,
  Feather: require("react-native-vector-icons/Feather").default
};

export default class Icon extends React.Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }
  render() {
    if (!iconSets) {
      // Used in <Canvas />
      iconSets = this.props.iconSets;
    }

    const iconParts = this.props.iconIdentifier.split("/");
    let iconPackageName = iconParts[0];
    let iconName = iconParts[1];
    if (!iconSets[iconPackageName]) {
      iconPackageName = "FontAwesome";
      iconName = "question";
    }
    const IconClass = iconSets[iconPackageName];
    const clonedProps = { ...this.props, name: iconName };
    delete clonedProps.iconIdentifier;

    // Support FontAwesome5's solid/light/brand
    if (clonedProps.iconStyle) {
      clonedProps[clonedProps.iconStyle] = true;
    }
    delete clonedProps.iconStyle;
    delete clonedProps.iconSets;

    return (
      <IconClass {...clonedProps} ref={component => (this._root = component)} />
    );
  }
}

Icon.defaultProps = {
  iconIdentifier: "FontAwesome/question"
};
