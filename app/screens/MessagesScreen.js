import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
    ListItem,
    ListItemDeleteAction,
    ListItemSeparator,
} from "../components/lists";
import useApi from '../hooks/useApi'
import messagesApi from '../api/messages'

function MessagesScreen(props) {
    const getMessagesApi = useApi(messagesApi.getMessages)

    useEffect(() => {
        getMessagesApi.request();
    }, []);

    const [messages, setMessages] = useState(getMessagesApi.data);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    return (
        <Screen>
            <FlatList
                data={getMessagesApi.data}
                extraData={getMessagesApi.data}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages();
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({});

export default MessagesScreen;