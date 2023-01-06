import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeComponent from './View/Home/HomeComponent';
import ListComponent from './View/List/ListComponent';
import ProfileComponent from './View/Profile/ProfileComponent';
import SearcherComponent from './View/Searcher/SearcherComponent';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppManager = () => {

    const Tab = createMaterialBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" 
                    component={HomeComponent} 
                    options={{
                        tabBarIcon: () => (
                          <MaterialCommunityIcons name="home-variant-outline" size={26} />
                        )}}/>
                <Tab.Screen name="List" component={ListComponent} />
                <Tab.Screen name="Searcher" component={SearcherComponent} />
                <Tab.Screen name="Profile" component={ProfileComponent} />
            </Tab.Navigator>
        </NavigationContainer>
        );

}

export default AppManager;