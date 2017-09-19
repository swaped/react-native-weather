import React from 'react';
import { Button, StyleSheet, Text, View, ActivityIndicator, ListView } from 'react-native';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: "",
      counter: 1
    }
  }

  componentDidMount() {
    return fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=3bb30a697c7ac119276f24df9ba8c42f')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.list),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }

      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData.dt}, {rowData.dt_txt} :: {this.state.counter++}</Text>}
          />
        </View>
      );
  }
}
