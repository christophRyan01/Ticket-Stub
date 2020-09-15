import React, { useEffect, useState } from 'react';
import { Button, Switch, View, Image } from 'react-native';
import HomeScreen from "./app/screens/HomeScreen"
import ViewTicketsSreen from './app/screens/ViewTicketsSreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions';

import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import TicketsListsScreen from './app/screens/TicketsListsScreen';
import Icon from './app/components/Icon'
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen'
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppPicker from './app/components/AppPicker'
import AppTextInput from './app/components/AppTextInput';
import LoginScreens from './app/screens/LoginScreens';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListItem from './app/components/ListItem'
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList'



export default function App() {

  return <ListingEditScreen />


}
