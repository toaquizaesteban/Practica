import React, {Component} from 'react';
import {View, Text, Pressable,StyleSheet} from 'react-native';

class Login extends Component {

    handlePress = () => {
        console.log("go to Loguin",this.props);

        this.props.navigation.navigate('Perfil');
    }

    handlePress2 = () => {
        console.log("go to Registrarse",this.props);

        this.props.navigation.navigate('User');
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Pantalla de LOGIN</Text>
                <Pressable style={styles.btn} onPress={this.handlePress}>
                    <Text>Loguearse</Text>
                </Pressable>
 

                <Pressable style={styles.btn} onPress={this.handlePress2}>
                    <Text>Registrarse</Text>
                </Pressable>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btn: {
        padding: 8,
        backgroundColor: "blue",
        borderRadius: 8,
        margin: 16
    }
})

export default Login;