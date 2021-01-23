import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegistrarUsuarioScreen from './RegistrarUsuarioScreen';
import Login from './Login';
import Perfil from './Perfil';

const Stack = createStackNavigator();

const UsuarioStack = () => {

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={Login}    
            />

            <Stack.Screen 
                name="User" 
                component={RegistrarUsuarioScreen}
            />

            <Stack.Screen 
                name="Perfil" 
                component={Perfil}
            />
        </Stack.Navigator>
    );

}

export default UsuarioStack;