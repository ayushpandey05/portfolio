import { StyleSheet } from "@/goku/StyleSheet";
import { Text } from "@/goku/Text";
import { View } from "@/goku/View";
import { LeftContainer } from "./leftContainer";
import { useWindowDimensions } from "@/src/hooks/useWindowDimensions";
import { RightContainer } from "./rightContainer";

const Home = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.innerContainer,
          ...(width <= 750 && styles.mobileContainer),
        }}
      >
        <LeftContainer />
        <RightContainer />
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
  },
  mobileContainer: {
    flexDirection: "column",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
