import { StyleSheet } from "@/goku/StyleSheet";
import { Text } from "@/goku/Text";
import { View } from "@/goku/View";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.leftContainer}></View>
        <View style={styles.rightContainer}>
          <Text style={{ fontSize: 48 }}>{"Want to hire me?"}</Text>
          <View style={{ alignItems: "center", gap: 24 }}>
            <Text
              style={{
                fontSize: 20,
                color: "rgba(255, 255, 255, 0.65)",
              }}
            >
              {"I strive to reply within an hour."}
            </Text>
            <View
              style={{
                height: 62,
                backgroundColor: "#464567",
                padding: 16,
                gap: 10,
                borderRadius: 16,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{ width: 36, height: 24, backgroundColor: "#1DFF9E" }}
              />
              <Text>{"EMAIL"}</Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              width: "100%",
              gap: 16,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height: 1,
                flex: 1,
                backgroundColor: "rgba(255, 255, 255, 0.32)",
              }}
            />
            <Text>{"or"}</Text>
            <View
              style={{
                height: 1,
                flex: 1,
                backgroundColor: "rgba(255, 255, 255, 0.32)",
              }}
            />
          </View>
          <View
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              flexDirection: "row",
            }}
          >
            {[1, 2, 3, 4].map((item) => (
              <View
                key={`link-${item}}`}
                style={{
                  width: 62,
                  height: 62,
                  borderRadius: 16,
                  backgroundColor: "#464567",
                }}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export { Home };

const styles = StyleSheet.create({
  container: { flex: 1, overflowY: "scroll" },
  innerContainer: {
    paddingLeft: 64,
    paddingRight: 64,
    paddingTop: 32,
    paddingBottom: 32,
    gap: 16,
    flexDirection: "row",
    flex: 1,
  },
  leftContainer: { flex: 1 },
  rightContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 120,
    paddingBottom: 120,
  },
});
