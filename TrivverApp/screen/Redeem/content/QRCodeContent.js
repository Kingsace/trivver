//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode";

// create a component
class QRCodeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.receivedTarget.QRCode
    };
  }
  render() {
    //   console.warn(this.props.receivedTarget)
    return (
      <View style={styles.container}>
        <QRCode
          value={this.state.text}
          size={200}
          bgColor="purple"
          fgColor="white"
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
}
});

//make this component available to the app
export default QRCodeContent;
