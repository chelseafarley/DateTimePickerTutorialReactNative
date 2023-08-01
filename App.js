import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

export default function App() {
  const [date, setDate] = useState(new Date());

  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <View style={styles.container}>
      <DateTimePicker
        value={date}
        mode={"date"}
        is24Hour={true}
        onChange={onChange}
      />
      <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
      />
      <Text>{date.toLocaleString()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
