//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfEgg: 0
    };
  }

  componentDidMount() {
    // const {data} = this.props.navigation.state.params;
    const numberOfEgg  = this.props.data;
    this.setState({numberOfEgg: numberOfEgg})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Number Of Eggs Remain: {this.state.numberOfEgg}</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

//make this component available to the app
export default Wallet;
