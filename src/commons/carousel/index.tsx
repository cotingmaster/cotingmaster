import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from './animations';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.93);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i);
}

export default class ImagesCarousel extends Component {
  state = {
    index: 0,
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.imageStyle} source={{ uri: item }} />
        {/* <Text style={styles.itemLabel}>{`Item ${item}`}</Text> */}
      </View>
    );
  }

  render() {
    return (
      <View>
        <Carousel
          ref={c => (this.carousel = c)}
          data={this.props.data}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={index => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
        />
        {/* <Text style={styles.counter}>{this.state.index}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 5,
    // padding: 10,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  // counter: {
  //   marginTop: 25,
  //   fontSize: 30,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  imageStyle: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
});
