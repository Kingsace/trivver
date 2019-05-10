//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Image } from "react-native-elements";

// create a component
class QRHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textQRHeader: "QR CODE",
      selectedItem: props.selectedItem
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
          {this.state.textQRHeader} {"\n"}
        </Text>
        <View style={styles.imgWrapper}>
          <ImageBackground
            source={{ uri: this.props.selectedItem.img }}
            style={styles.imageItem}
            resizeMode="center"
          />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 3,
    display: "flex",
    backgroundColor: "#6495ED"
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
  imageItem: {
    width: 150,
    height: 80
  },
  imgWrapper: {
    borderWidth: 1,
    borderColor: "blue",
    position: "absolute",
    right: 20,
    top: 60,
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    width: 150
  }
});

//make this component available to the app
export default QRHeader;
