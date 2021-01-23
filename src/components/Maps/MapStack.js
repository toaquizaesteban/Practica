import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from './MapScreen';

const Stack = createStackNavigator();

const MapStack = () => {

    return(
        <Stack.Navigator>

            <Stack.Screen 
                name="Mapa" 
                component={MapScreen}
            />


        </Stack.Navigator>
    );

}

export default MapStack;