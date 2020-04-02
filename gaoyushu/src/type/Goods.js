import React,{Component} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const styles = StyleSheet.create({
    bigdiv:{
        width: '47%',
        marginLeft: '2%',
        marginTop: '2%',
        height: 300,
        backgroundColor:'#fff',
        justifyContent:'center',
    },
    div:{
        height: 250,
        padding: '5%',
        width:'94%'
    },
    img:{
        width: '100%',
        height: 180
    },
    title:{
        color: '#888888',
        fontSize: 15,
        marginTop: 10
    },
    price:{
        color: 'red',
        fontSize: 15,
        marginTop: 10
    }

})

export default class Switch extends Component{
    render(){
        return(
            <View style={styles.bigdiv}>
                <View style={styles.div}>
                    <Image style={styles.img} source={this.props.item.img} resizeMode='contain'></Image>
                    <Text style={styles.title}>{this.props.item.title}</Text>
                    <Text style={styles.price}>{this.props.item.price}</Text>
                </View>
            </View>
        )
    }

}