//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native-elements";

// create a component
class EggHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textHeader: "Congrats!",
      bodyTextHeader: "You've Found",
      numberOfEgg: props.numberOfEgg,
      eggs: " Eggs"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../../images/dragon.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          {this.state.textHeader} {"\n"}
          {this.state.bodyTextHeader} {"\n"}
          <Text style={styles.eggNumber}>{this.state.numberOfEgg}</Text>
          {this.state.eggs}
        </Text>
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
  },
  image: {
    position: "absolute",
    left: 0,
    width: 160,
    height: 160
  },
  text: {
    position: "absolute",
    right: 10,
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },
  eggNumber: {
    textDecorationLine: "underline"
  }
});

//make this component available to the app
export default EggHeader;
