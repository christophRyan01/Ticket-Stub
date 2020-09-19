import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permissions from 'expo-permissions';

import getExpoPushTokenApi from "../api/expoPushTokens"

export default useNotifications = () => {
    useEffect(() => {
        registerForPushNotifications();

        Notifications.addListener((notification) => {
            notification.navigate("Account");
        });
    }, []);

    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (!permission.granted) return;

            const token = await Notifications.getExpoPushTokenAsync();
            getExpoPushTokenApi.register(token)
        } catch (error) {
            console.log('Error getting a push token', error)
        }
    }
}