import { Text } from "@/goku/Text";
import { View } from "@/goku/View";

const About = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
      }}
    >
      <Text style={{ fontSize: 14, color: "rgba(255,255,255,0.62)" }}>
        Coming Soon
      </Text>
    </View>
  );
};

export { About };
