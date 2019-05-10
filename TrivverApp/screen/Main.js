//import liraries
<script src="http://192.168.0.206:8097" />;
import React, { Component } from "react";
import Wallet from "../screen/Wallet/index";
import { View, Text, StyleSheet, Button } from "react-native";
import { Navigation } from "react-native-navigation";

// create a component
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfEgg: 400
    };
    
  }

  goToScreen = screenName => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName,
        passProps: {
          data: this.state.numberOfEgg
         },
        options: {
          topBar: {
            // leftButtons: [
            //   {
            //     id: 'home',
            //     icon: require('../images/house.png')
            //   }
            // ],
            title: {
              text: screenName + " Page"
            }
          }
        }
      }
    });

    if (screenName === "Wallet") {
      <Wallet numberOfEgg={this.state.numberOfEgg} />;
    }

    // Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
    //   if (buttonId === 'home') {
    //     console.warn("click")
    //     Navigation.popToRoot(this.props.componentId);
    //          // User pressed topBar backButton
    //          // Navigation has popped the screen => update your code if needed
    //   }
    // });

    Navigation.mergeOptions(this.props.componentId, {
      layout: {
        direction: "ltr" // Supported directions are: 'rtl', 'ltr'
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="AR Camera" onPress={() => this.goToScreen("ARCamera")} />
        <Button title="Wallet" onPress={() => this.goToScreen("Wallet")} />
        <Button title="Redeem" onPress={() => this.goToScreen("Redeem")} />
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
export default Main;
