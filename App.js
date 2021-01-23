
import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import UsuarioStack from 'Practica/src/components/Usuario/UsuarioStack';
import MapStack from 'Practica/src/components/Maps/MapStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();
const App = () =>{
  return(

    <NavigationContainer>
      <Tabs.Navigator>

          <Tabs.Screen
            name='Mapa'
            component={MapStack}
            options={{
              tabBarIcon: ({size, color}) =>(
                /*style={{ TintColor: color, widht: size, height: size}*/
                
                <Image 
                  source={require('Practica/src/assets/IMapa.png')}

                />
              )
              }}
          />
          <Tabs.Screen
            name='Usuario'
            component={UsuarioStack}
          />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
