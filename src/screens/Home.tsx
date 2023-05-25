import { StyleSheet, View, Text, TextInput } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  text: {
    color: "#000",
    fontSize: 24,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    height: 56,
    width: "100%",
    padding: 16,
  },
});
