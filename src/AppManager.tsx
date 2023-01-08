import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeComponent from './View/Home/HomeComponent';
import ListComponent from './View/List/ListComponent';
import ProfileComponent from './View/Profile/ProfileComponent';
import SearcherComponent from './View/Searcher/SearcherComponent';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createMaterialBottomTabNavigator();

const AppManager = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                shifting={true}
                labeled={false}
                activeColor="black"
                inactiveColor="#f7eb40"
                barStyle={{ backgroundColor: '#2b2b2b'}}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeComponent}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarColor: "#575757",
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="home-variant-outline" color={color} size={32} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="List"
                    component={ListComponent}
                    options={{
                        tabBarLabel: 'List',
                        tabBarColor: "#575757",
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="view-list-outline"  color={color} size={32}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={SearcherComponent}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarColor: "#575757",
                        tabBarIcon: ({color}) => (
                            <Entypo name="magnifying-glass" color={color} size={32}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileComponent}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarColor: "#575757",
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="account" color={color} size={32}/>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppManager;