//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

// create a component
class SelectFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonTitle: "SELECT",
      selectedItem: ""
    };
  }

  _onPressButton = () => {
    this.props.onClicked()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={this._onPressButton}>
          <View style={styles.view}>
            <Text style={styles.text}>{this.state.buttonTitle}</Text>
          </View>
          <Image source={require("../../../images/dragonButton.png")} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 3,
    display: "flex",
    backgroundColor: "#6495ED",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    position: "absolute",
  },
  image: { 
      width: 295,
      height: 125,
      opacity: 0.2
    },
  touchable: {
    width: 300,
    height: 130,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: "#6495ED",
  }
});
//make this component available to the app
export default SelectFooter;
