import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = true }) {
    if (!visible) return null;

    return (
        <LottieView
            autoPlay
            loop
            source={require("../assets/animations/ball.json")}
        />
    );
}

export default ActivityIndicator;