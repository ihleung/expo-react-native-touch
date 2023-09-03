import React, { useState } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //Handling Touch
    //paddingTop: 60,
    //Scrolling with your fingers
    //paddingTop: StatusBar.currentHeight,
    //Swipeable and Cancellable
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "ghostwhite",
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
  //Scrolling with your fingers
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  //Swipeable and Cancellable
  swipeContainer: {
    flex: 1,
    flexDirection: "row",
    width: 200,
    height: 30,
    marginTop: 50,
  },

  swipeItem: {
    width: 200,
    height: 30,
    backgroundColor: "azure",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "slategrey",
  },

  swipeItemText: {
    textAlign: "center",
    color: "slategrey",
  },

  swipeBlank: {
    width: 200,
    height: 30,
  },
});

//Swipeable and Cancellable
function SwipeableButton({ onSwipe, name }) {
  function onScroll(e) {
    e.nativeEvent.contentOffset.x === 200 && onSwipe();
  }

  return (
    <View style={styles.swipeContainer}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        onScroll={onScroll}
      >
        <TouchableOpacity>
          <View style={styles.swipeItem}>
            <Text style={styles.swipeItemText}>{name}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.swipeBlank} />
      </ScrollView>
    </View>
  );
}

export default function App() {
  //Handling Touch
  const onPressButton = function () {
    alert("You tapped the button!");
  };

  const onLongPressButton = function () {
    alert("You long-pressed the button!");
  };
  //Swipeable and Cancellable
  // Create a state variable containing an array of objects.
  // These items will be used to render a bunch of swipeable
  // buttons to the UI.
  const [items, setItems] = useState(
    new Array(5).fill(null).map((v, id) => ({
      id,
      name: `Swipe Me (${id})`,
    }))
  );

  // When a swipeable button is swiped, this event handler will
  // remove it from the items state variable.
  function onSwipe(id) {
    return () => {
      setItems(items.filter((item) => item.id !== id));
    };
  }

  return (
    //Handling Touch
    /*<View style={styles.container}>
      <TouchableHighlight onPress={onPressButton} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>
      <TouchableNativeFeedback
        onPress={onPressButton}
        background={
          Platform.OS === "android"
            ? TouchableNativeFeedback.SelectableBackground()
            : ""
        }
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            TouchableNativeFeedback{" "}
            {Platform.OS !== "android" ? "(Android only)" : ""}
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableWithoutFeedback onPress={onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableHighlight
        onPress={onPressButton}
        onLongPress={onLongPressButton}
        underlayColor="white"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touchable with Long Press</Text>
        </View>
      </TouchableHighlight>
    </View>
    */
    //Scrolling with your fingers
    /*<SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
    */
    //Swipeable and Cancellable
    <View style={styles.container}>
      {items.map((item) => (
        <SwipeableButton
          key={item.id}
          onSwipe={onSwipe(item.id)}
          name={item.name}
        />
      ))}
    </View>
  );
}
