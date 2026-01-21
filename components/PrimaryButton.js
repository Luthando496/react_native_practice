import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "#f0e000" }}
        onPress={onPress}
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  innerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#fff",
    elevation: 15,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: "#2bdb60",
    fontWeight: "800",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
});

export default PrimaryButton;
