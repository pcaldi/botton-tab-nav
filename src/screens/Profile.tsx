import { StyleSheet, View, Text, TextInput } from "react-native";

export function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c4c4c4",
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
