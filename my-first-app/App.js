import React, { Component } from 'react';
import { Button, View, Text,Image} from 'react-native';

class RedButton extends Component{
  render(){
    return(
      <Button title="Play" color='red'></Button>
    );
  }
}
export default class App extends Component {
  render() {
    return (
       // <Text style={{marginTop:150,marginLeft:150}}>My first App</Text>
       <View>
        <Image source={{uri:'http://www.ballastmedia.com/wp-content/uploads/Easter-Worship-Background-2012.jpg'}} style={{width:500,height:700}}></Image>
        <Image source={require('./assets/snack-icon.png')} style={{width:100,height:100}}></Image>
        <Button title='Click me' color='#000000'></Button>
        <RedButton/>
       
       </View>
    );
  }
}






