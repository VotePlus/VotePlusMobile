import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeComponent from './View/Home/HomeComponent';
import ListComponent from './View/List/ListComponent';
import ProfileComponent from './View/Profile/ProfileComponent';
import SearcherComponent from './View/Searcher/SearcherComponent';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import colorsConst from './Consts/colors.json';
import menuConst from './Consts/menu.json';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const AppManager = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName={menuConst.menuHome.name}    
                screenOptions={{
                    tabBarStyle:{
                        maxHeight: 100,
                    },
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveBackgroundColor: colorsConst.grayColorForMenu,
                    tabBarInactiveBackgroundColor: colorsConst.grayColorForMenu,
                    tabBarActiveTintColor: '#ffffff',
                    tabBarInactiveTintColor: colorsConst.yellowColorForIcons,
                }}
            >
                <Tab.Screen
                    name={menuConst.menuHome.name}
                    component={HomeComponent}
                    options={{
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="home-variant-outline" color={color} size={28}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name={menuConst.menuList.name}
                    component={ListComponent}
                    options={{
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="view-list-outline"  color={color} size={28}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name={menuConst.menuSearch.name}
                    component={SearcherComponent}
                    options={{
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="movie-search-outline" color={color} size={28}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name={menuConst.menuProfile.name}
                    component={ProfileComponent}
                    options={{
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="account" color={color} size={28}/>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppManager;