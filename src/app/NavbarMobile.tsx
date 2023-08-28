import { View } from "@/goku/View";
import { tabs } from "./tabs";
import { StyleSheet } from "@/goku/StyleSheet";
import { useRouter } from "next/router";
import { Text } from "@/goku/Text";
import Image from "next/image";

const NavbarMobile = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <View
      style={{ height: 80, backgroundColor: "#2E2E47", flexDirection: "row" }}
    >
      {tabs.map((item) => {
        const isActive = pathname == item.route;
        return (
          <View key={`mobile-tab-${item.route}`} style={styles.container}>
            <View
              onClick={() => {
                router.replace(item.route);
              }}
              style={{
                ...styles.itemContainer,
                ...(isActive && styles.activeItemContainer),
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <Image src={item.icon} alt="" />
                <Text>{item.label}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export { NavbarMobile };

const styles = StyleSheet.create({
  itemContainer: {
    // borderRadius: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,0.65)",
    flex: 1,
    padding: 8,
    cursor: "pointer",
    gap: 16,
    borderRadius: 8,
  },
  container: { flex: 1, padding: 8 },
  activeItemContainer: {
    backgroundColor: "#464567",
    color: "rgba(255,255,255,0.87)",
  },
});
