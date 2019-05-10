//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Slider,
  Image,
  TouchableOpacity
} from "react-native";

// create a component
class SliderContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: props.selectedItem,
      value: 0,
      discount: 0
    };
  }

  getValue = value => {
    let eggRequiredPerPt = this.props.selectedItem.eggsRequiredPerPoint;
    let numberOfEggUsed = value;

    let discount = numberOfEggUsed / eggRequiredPerPt;

    this.props.discount(discount);
    this.props.value(numberOfEggUsed)

    this.setState({
      value: value,
      discount: discount
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={this.props.back} style={styles.backWrapper}>
            <Image
              source={require("../../../images/back.png")}
              style={styles.backImage}
              onP
            />
            <Text>Back</Text>
          </TouchableOpacity>
          <View style={styles.imgWrapper}>
            <ImageBackground
              source={{ uri: this.props.selectedItem.img }}
              style={styles.image}
              resizeMode="center"
            />
          </View>
        </View>
        <Slider
          style={styles.slider}
          trackStyle={customStyles4.track}
          thumbStyle={customStyles4.thumb}
          minimumValue={0}
          maximumValue={this.props.maximumSlide}
          minimumTrackTintColor="#6495ED"
          maximumTrackTintColor="#000000"
          thumbTintColor="#6495ED"
          value={this.state.value}
          onValueChange={value => this.getValue(value)}
          // onValueChange={this}
          step={1}
        />
        <Text>Eggs: {this.state.value}</Text>
        <Text style={styles.discount}>${this.state.discount} Discount</Text>
      </View>
    );
  }
}

var customStyles4 = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.15
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: "#f8a1d6",
    borderColor: "#a4126e",
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35
  }
});

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "column"
  },
  backWrapper: {
    position:"absolute",
    left: 10,
    top: 10,
  },
  backImage: {
    width: 20,
    height: 20,
  },
  wrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  imgWrapper: {
    borderWidth: 1,
    borderColor: "blue",
    marginTop: 10
  },
  back: {
    position: "absolute",
    left: 0,
    top: 0
  },
  image: {
    width: 150,
    height: 80
  },
  slider: {
    marginTop: 20,
    width: 350,
    height: 60
  },
  discount: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: "#6495ED"
  }
});

//make this component available to the app
export default SliderContent;
