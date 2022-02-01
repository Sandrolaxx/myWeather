import React from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { NavigationContainer } from '@react-navigation/native';
import { screenOptions, Drawer } from "./components/utils/utils";

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                screenOptions={screenOptions}
                initialRouteName="Home">
                <Drawer.Screen 
                    name="Home"
                    component={Home} 
                    options={{
                        title: "Minha Cidade"
                    }}
                />
                <Drawer.Screen 
                    name="Search" 
                    component={Search}
                    options={{
                        title: "Buscar"
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );

}