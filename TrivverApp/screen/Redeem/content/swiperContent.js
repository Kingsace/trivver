//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity
} from "react-native";
import Swiper from "react-native-swiper";
// import data from "../../../articles.json";

// create a component
class swiperContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.dataSource,
      contentText: "Select the brand for your discount reward!",
      selectedItem: [],
    };
  }

  _toggleSelected = targetBrand => {
    this.props.onSelected(targetBrand)
    targetBrand.selected = !targetBrand.selected
    this.setState({
      selectedItem: targetBrand.name
    })

    // this.setState(prevState => {
    //   this.state.dataSource.brand.map((item) => {
    //     item.selected = false;
    //     if(item.name===targetBrand.name) item.selected = !item.selected;
    //     return item;
    //   })
    //   return {
    //     selectedItem: targetBrand,
    //     dataSource: prevState.dataSource
    //   }

    // });
  };

  renderSwiper = () => {
    let clonedArr = JSON.parse(JSON.stringify(this.state.dataSource.brand));
    (swiperArr = []), (itemArr = []), (pageSize = 4);

    while (clonedArr.length > 0) itemArr.push(clonedArr.splice(0, pageSize));

    itemArr.forEach(swiperPage => {
      swiperArr.push(
        <FlatList
          data={swiperPage}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <TouchableOpacity
                onPress={() => this._toggleSelected(item)}
                style={
                  // item.selected ? styles.selected : styles.unselected
                  this.state.selectedItem === item.name ? styles.selected : styles.unselected
                }
              >
                <ImageBackground
                  source={{ uri: item.img }}
                  style={{ width: "100%", height: "95%" }}
                  resizeMode="center"
                />
              </TouchableOpacity>
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      );
    });

    return swiperArr;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.contentText}>{this.state.contentText}</Text>
        <Swiper
          loop={false}
          style={styles.wrapper}
          showsButtons={true}
          showsPagination={false}
        >
          {this.state.dataSource && this.renderSwiper()}
        </Swiper>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: "white"
  },
  contentText: {
    color: "#6495ED",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold"
  },
  selected: {
    borderWidth: 1,
    borderColor: "blue"
  },
  unselected: {
    borderWidth: 0
  },
  wrapper: {},
  slide: {
    flexDirection: "column",
    margin: 1,
    flex: 1,
    backgroundColor: "white",
    height: 100
  },
  brand: {
    color: "#6495ED",
    fontWeight: "bold",
    borderColor: "green",
    borderWidth: 1,
    flex: 1
  }
});

//make this component available to the app
export default swiperContent;
