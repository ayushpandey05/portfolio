import { StyleSheet } from "@/goku/StyleSheet";
import { Text } from "@/goku/Text";
import { View } from "@/goku/View";

const info = [
  [
    { normal: "I'm a " },
    { colored: "Full Stack Developer" },
    { normal: " specialising in web and mobile apps." },
  ],
  "In my free time, I like to explore about new technologies.",
  "I love talking about code."
  // "In my free time, I am either contributing to Open-Source projects or working on my cars.",
  // "I love talking about the world, hobbies and especially code.",
];

const LeftContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {"Hi, I'm "}
          <Text style={styles.headerTextBold}>{"Ayush"}</Text>
        </Text>
        <Text style={styles.headerInfo}>{"Welcome to my page"}</Text>
      </View>
      <View
        style={{
          flexGrow: 1,
          paddingTop: 87,
          paddingBottom: 87,
          gap: 16,
          justifyContent: "center",
        }}
      >
        {info.map((item, index) => {
          if (typeof item === "string") {
            return (
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "400",
                  color: "rgba(255,255,255, 0.87)",
                }}
                key={`item-info-${index}`}
              >
                {item}
              </Text>
            );
          }
          return (
            <Text
              style={{
                fontSize: 24,
                fontWeight: "400",
                color: "rgba(255,255,255, 0.87)",
              }}
              key={`item-info-${index}`}
            >
              {item.map((innerItem, innerItemIndex) => (
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: innerItem?.colored ? "700" : "400",
                    color: innerItem?.colored
                      ? "#1DFF9E"
                      : "rgba(255,255,255, 0.87)",
                  }}
                  key={`inner-item-info-${innerItemIndex}`}
                >
                  {innerItem?.colored ?? innerItem?.normal ?? ""}
                </Text>
              ))}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export { LeftContainer };

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 120, paddingBottom: 120 },
  header: { gap: 10, paddingBottom: 32 },
  headerText: {
    fontSize: 48,
    fontWeight: "400",
  },
  headerTextBold: {
    fontWeight: "700",
    color: "#1DFF9E",
  },
  headerInfo: {
    fontSize: 24,
    fontWeight: "400",
    color: "rgba(255,255,255,0.32)",
  },
});
