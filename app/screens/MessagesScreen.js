import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: "Red Hot Tickets",
        description: "Red Tickets",
        image: require('../assets/userImage.jpeg')
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require('../assets/userImage.jpeg')
    }
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={messages => messages.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subtitle={item.subtitle}
                        image={item.image}
                        // onPress={() => console.log("Message selected", item)}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: "T2",
                            description: "D2",
                            image: require('../assets/userImage.jpeg')
                        }
                    ])
                }}
            />
        </Screen>
    );
}

export default MessagesScreen
