import React from 'react';
import {StackNavigator,} from 'react-navigation';
import { StyleSheet, Text, View ,ScrollView,TextInput,TouchableHighlight,TouchableNativeFeedback } from 'react-native';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  _onPressButton() {
    alert("You tapped the button!");
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer</Text>
        <Text>show   吴李楠</Text>
        <TextInput
          style={{height: 40,width:100}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}/>
        <TouchableHighlight onLongPress={this._onPressButton}>
          <Text>Button</Text>
        </TouchableHighlight>
        <TouchableNativeFeedback onPress={this._onPressButton}>
          <View><Text>Button</Text></View>
        </TouchableNativeFeedback>
        <Text style={{padding: 10, fontSize: 20}}>{this.state.text}</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer</Text>
        <Text>show   吴李楠</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer</Text>
        <Text>show   吴李楠</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer</Text>
        <Text>show   吴李楠</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer</Text>
        <Text>show   吴李楠</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer</Text>
        <Text>show   吴李楠</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer</Text>
        <Text>show   吴李楠</Text>
        
      </View>
      </ScrollView>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: App },
});

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});