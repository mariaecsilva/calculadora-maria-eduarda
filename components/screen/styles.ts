import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5", 
    alignItems:"center",
    justifyContent: "center",
  },
  containerHeader: {
    width: '100%',
    marginBottom: 30,
    alignItems: "center",
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    gap: 10,
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
});