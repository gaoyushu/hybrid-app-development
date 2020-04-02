import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';

const styles = StyleSheet.create({
    div:{
        height: 60,
        backgroundColor: '#fff'
    },
    search:{
        flex: 1,
        height: 40,
		    flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#eee',
        borderRadius: 3,
    },
    text:{
        flex: 8/10,
        fontSize: 15,
    },
    img:{
        flex:2/10,
        height: 30,
        alignSelf: 'center',
    }

})

export default class SearchBarDemo extends React.Component {
  render() {
    return (
      <View style={styles.div}>
        <View style={styles.search}>
          <TextInput style={styles.text} placeholder='请输入商品名称' >
          </TextInput>
          <Image style={styles.img} source={require('../img/search.png')} resizeMode='contain'/>
        </View>
      </View>
    );
  }
}