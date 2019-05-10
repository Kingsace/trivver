//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import HeaderEgg from "./header/headerEgg";
import HeaderQR from "./header/headerQR";
import SwiperContent from "./content/swiperContent";
import SliderContent from "./content/sliderContent";
import QRCodeContent from "./content/QRCodeContent";
import SelectFooter from "./footer/selectFooter";
import ReceiveFooter from "./footer/receiveFooter";
import DiscountFooter from "./footer/discountFooter";
import data from "../../articles.json";

// create a component
class Redeem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      item: "",
      page: 0,
      numberOfEgg: 0,
      remain: 0,
      usedEgg: 0,
      dataSource: [],
      discount: 0,
    };

  }
  // from main Page Content
  onPress = target => {
    this.setState({ item: target });
  };

  // from main Page footer
  onApply = () => {
    if (this.state.item) {
      this.setState({ page: 1 });
    } else {
      alert("Please Select a Brand");
    }
  };

  getDiscount = discount => {
    this.setState({ discount: discount });
  };


  getValue = numberOfEggUsed => {
    this.setState({usedEgg: numberOfEggUsed})
  };

  getQRCode = () => {
    if (this.state.discount !== 0) {
      this.setState({ page: 2 });
      console.warn('remain, ', this.state.remain)
    } else {
      alert("No Discount Received");
    }
  };

  componentDidMount() {
    const numberOfEgg = this.props.data;
    this.setState({
      isLoading: false,
      dataSource: data,
      numberOfEgg: numberOfEgg
    });
  }

  updateRemainEgg = () => {
    this.setState({remain: 1})
  }

  backward = () => {
    this.setState({ page: 0, item: "" });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    let header, content, footer;
    // main page
    if (this.state.page === 0) {
      header = <HeaderEgg numberOfEgg={this.state.numberOfEgg} />;
      content = (
        <SwiperContent
          onSelected={this.onPress}
          dataSource={this.state.dataSource}
        />
      );
      footer = <SelectFooter onClicked={this.onApply} />;
    }
    // selected page
    else if (this.state.page === 1) {
      header = <HeaderEgg numberOfEgg={this.state.numberOfEgg} />;
      content = (
        <SliderContent
          back={this.backward}
          discount={this.getDiscount}
          value={this.getValue}
          selectedItem={this.state.item}
          maximumSlide={this.state.numberOfEgg}
        />
      );
      footer = <ReceiveFooter onReceived={this.getQRCode} getRemainEgg={this.updateRemainEgg}/>;
    }
    // QR page
    else if (this.state.page === 2) {
      header = <HeaderQR selectedItem={this.state.item} />;
      content = <QRCodeContent receivedTarget={this.state.item} />;
      footer = <DiscountFooter showDiscount={this.state.discount} />;
    }

    return (
      <View style={styles.container}>
        {header}
        {content}
        {footer}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

//make this component available to the app
export default Redeem;
