import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "", 
      job: ""
    }
  }
  thisApp = this
  apiCall = () => {
    fetch('https://reqres.in/api/users', { 
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        title: this.state.job
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
    .then(data => data.json())
    .then(json => JSON.stringify(json))
    .then(string => Alert.alert(string))
    .catch(err => Alert.alert(err))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Insert Name</Text> 
        <TextInput 
          style={{borderColor: 'black'}}
          onChangeText={text => this.setState({name: text})}
          value={this.state.name}
        />
        <Text>Insert Job</Text> 
        <TextInput 
          style={{borderColor: 'black'}}
          onChangeText={text => this.setState({job: text})}
          value={this.state.job}
        />
        <TouchableOpacity 
          onPress = {this.apiCall}
          style = {{borderColor: 'black', backgroundColor: 'red'}}
        >
          <Text>
            submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
