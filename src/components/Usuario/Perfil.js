import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Http from 'Practica/src/libs/http';

class Perfil extends Component {

    state={
        Uperfil: []
    }

    componentDidMount = async() => {
        const res = await Http.instance.get("x");

        this.setState({ Uperfil: res.data});
    }
    render(){
        return(
            <View>
                <Text>Pantalla de PERFIL</Text>
            </View>
        );

    }
}

export default Perfil;