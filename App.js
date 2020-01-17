import React, { Component, useState } from 'react';
import { Text, SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from 'react-native-elements';
import { Card, CardItem, ListItem, CheckBox } from 'native-base'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      taskDoneCount: 0,
      tasks: [
        {
          content: 'Me lever',
          done: false
        },
        {
          content: 'Aller en cours',
          done: false
        },
        {
          content: 'Rater le tram',
          done: false
        },
        {
          content: 'Un exempe très long pour vérifier ce qu\'il se passe si jamais bah le mec ajoute un exemple bien long quoi ce qui serait relou en vrai, je devrais mettre un autowrap ou je sais pas quoi j\'y connais r moi je suis un back-end en fait',
          done: false
        },
        {
          content: 'Rentrer chez moi',
          done: false
        },
        {
          content: 'Bâtir un culte',
          done: false
        },
        {
          content: 'Faire croire que c\'est une religion',
          done: false
        },
        {
          content: 'Gagner de la thune à ne plus pouvoir la compter',
          done: false
        },
        {
          content: 'Enfin pouvoir se payer un café a Paris',
          done: false
        },
        {
          content: 'Me casser sur Mars et les laisser dans la merde',
          done: false
        }
      ]
    };
  }

  setCheck(element) {
    element.done = !element.done
    if (element.done) {
      this.state.taskDoneCount++
    } else {
      this.state.taskDoneCount--
    }
    return this.state.tasks
  }

  removeTodo(element, index) {
    if (element.done) this.state.taskDoneCount--
    this.state.tasks.splice(index, 1)
    return this.state.tasks
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.top_bar}>
          <Text style={styles.todo_title}>Todo List</Text>
          <Text style={styles.todo_task_count}>{this.state.taskDoneCount} / {this.state.tasks.length}</Text>
        </View>
        <ScrollView>
          {this.state.tasks.map((element, index) =>
            <View key={index}>
              <ListItem style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox
                  style={{ marginRight: '5%' }}
                  checked={element.done}
                  color="blue"
                  onPress={() => this.setState({ tasks: this.setCheck(element) })}
                />
                <Text style={{ fontSize: 26, maxWidth: '80%' }}>{element.content}</Text>
                <View style={{ position: "absolute", right: '5%' }}>
                  <Icon name='trash' type='font-awesome' color='#F00'
                    onPress={() => this.setState({ tasks: this.removeTodo(element, index) })}
                  />
                </View>
              </ListItem>
            </View>
          )}
          <View style={{ marginTop: '30%' }}></View>
        </ScrollView>
        <View style={styles.fab_add}>
          <Icon size={72} name='ios-add-circle' type='ionicon' color='#00F' />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  top_bar : {
    backgroundColor: 'rgba(0, 130, 255, 1)',
    alignContent: "center",
    paddingTop: 5,
    paddingBottom: 5
  },
  fab_add: {
    position: "absolute",
    right: '3%',
    bottom: '3%'
  },
  todo_title: {
    fontSize: 48,
    fontWeight: "bold",
    alignSelf: "center"
  },
  todo_task_count: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center"
  }
});
