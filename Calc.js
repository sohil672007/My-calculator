import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput,Alert } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  state = {
    text: 0,
    input: '',
    inputValue: 0,
    inputValue2: 0,
    calcu: 0
  }

  onButtonPressed = function() {
     this.setState({ text:this.state.inputValue })}

  _handleTextChange = inputValue => { this.setState({ inputValue }); 
  };

  _handleTextChange2 = inputValue2 => { this.setState({ inputValue2 }); 
  };

  plus = function() {
    var x = parseFloat(this.state.inputValue);
    var y = parseFloat(this.state.inputValue2);
    var calcu = x + y;
    this.setState({ text: calcu})}

  minus = function() {
    var x = parseFloat(this.state.inputValue);
    var y = parseFloat(this.state.inputValue2);
    var calcu = x - y;
    this.setState({ text: calcu})
  }

  devide = function(){
    var x = parseFloat(this.state.inputValue);
    var y = parseFloat(this.state.inputValue2);
    var calcu = x / y;
    this.setState({ text: calcu})
  }
  
  multi = function(){
    var x = parseFloat(this.state.inputValue);
    var y = parseFloat(this.state.inputValue2);
    var calcu = x * y;
    this.setState({ text: calcu})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {this.state.text}
        </Text>

        <TextInput
          value={this.state.inputValue}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange}
          style={{ width: 200, height: 44, padding: 8 }}
        />
        <TextInput
          value={this.state.inputValue2}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange2}
          style={{ width: 200, height: 44, padding: 8 }}
        />
      
        <Button title='+' onPress={this.plus.bind(this)}/>
        <Button title='-' onPress={this.minus.bind(this)}/>
        <Button title='/' onPress={this.devide.bind(this)}/>
        <Button title='*' onPress={this.multi.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});