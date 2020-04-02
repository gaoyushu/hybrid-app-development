import React,{Component} from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import Goods from './Goods';

const styles = StyleSheet.create({
    div:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-between',
        backgroundColor: '#eee',
        paddingTop: 5
    },

})

const path = '../img/';
const items = [
    {
        img: require(path+'corn.jpg'),
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: '1.00'
    },
    {
        img: require(path+'chips.jpg'),
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: '2.00'
    },
]

for(let i = 2; i < 10; i++){
    if(i%2==0){
        items[i] = items[0];
    }else{
        items[i] = items[1];
    }
};


export default class List extends Component{
    constructor(){
        super();
        this.state = {
            items: items
        }
    }
    render(){
        return(
            <View style={styles.div}>
                {this.state.items.map((item,idx)=>{
                    return <Goods item={item} key={'goods'+idx} />
                })}
            </View>
        )
    }
}