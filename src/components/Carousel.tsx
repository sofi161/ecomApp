import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

const { width } = Dimensions.get('window');

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const images = [
    {
      id: 1,
      src: 'https://i.pinimg.com/1200x/39/d0/a7/39d0a7e4ee4300d46910b1eb77b388f2.jpg',
    },
    {
      id: 3,
      src: 'https://i.pinimg.com/736x/37/84/08/37840842216139312fe81b7f6a87879a.jpg',
    },
    {
      id: 4,
      src: 'https://i.pinimg.com/1200x/49/14/07/491407f741f2469c110d29c7b49bd237.jpg',
    },
    {
      id: 2,
      src: 'https://i.pinimg.com/1200x/bd/d0/94/bdd09439260b11313694e9301a11574b.jpg',
    },
  ];

  //   auto scroll
  useEffect(() => {
    // if activeIndex == lastIndex -> jump to first
    // else activeIndex + 1
    const interval = setInterval(() => {
      if (activeIndex === images.length - 1) {
        flatListRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatListRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    // console.log(scrollPosition / width + 1);
    const index = Math.ceil(scrollPosition / width);
    setActiveIndex(index);
  };

  //   dot indicators
  const dotIndicators = () => {
    return images.map((dot, index) => {
      if (activeIndex === index) {
        return <View key={index} style={styles.dotIndicatorFocused}></View>;
      } else {
        return <View key={index} style={styles.dotIndicator}></View>;
      }
    });
  };

  return (
    <View>
      <FlatList
        data={images}
        ref={flatListRef}
        // getItemLayout={getItemLayout}
        horizontal
        pagingEnabled={true}
        onScroll={handleScroll}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Image
            style={styles.imageCarousel}
            source={{ uri: item.src }}
            alt="image"
          />
        )}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        {dotIndicators()}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  imageCarousel: {
    height: 200,
    width: width - 40,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  dotIndicator: {
    backgroundColor: '#828282',
    borderRadius: '50%',
    height: 8,
    width: 8,
    marginTop: 10,
    marginHorizontal: 4,
  },
  dotIndicatorFocused: {
    backgroundColor: '#000',
    borderRadius: '50%',
    height: 8,
    width: 8,
    marginTop: 10,
    marginHorizontal: 4,
  },
});
