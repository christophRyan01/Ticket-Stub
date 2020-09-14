import React from 'react';
import { View } from 'react-native';
import HomeScreen from "./app/screens/HomeScreen"
import ViewTicketsSreen from './app/screens/ViewTicketsSreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import TicketsListsScreen from './app/screens/TicketsListsScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  return (
    <MessagesScreen />
  )

}
