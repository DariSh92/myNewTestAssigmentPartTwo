import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const Time = `${String(Math.floor(time / 60)).padStart(2, "0")}:${String(
    time % 60
  ).padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{Time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    fontSize: 72,
  },
});

export default Timer;
