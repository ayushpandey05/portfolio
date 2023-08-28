import { StyleSheet } from "@/goku/StyleSheet";
import { View } from "@/goku/View";
import { useRouter } from "next/router";
import { tabs } from "./tabs";
import { Text } from "@/goku/Text";
import Image from "next/image";
import { HomeIconImg } from "../assets/images";

const NavbarLaptop = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <View style={styles.container}>
      {tabs.map((item) => {
        const isActive = pathname == item.route;

        return (
          <View
            onClick={() => {
              router.push(item.route);
            }}
            style={{
              ...styles.itemContainer,
              ...(isActive && styles.activeItemContainer),
            }}
            key={`laptop-tab-${item.route}`}
          >
            <Image src={item.icon} alt={item.label} />
            <Text>{item.label}</Text>
          </View>
        );
      })}
    </View>
  );
};

export { NavbarLaptop };

const styles = StyleSheet.create({
  container: {
    width: "22%",
    backgroundColor: "#2E2E47",
    paddingTop: 16,
    paddingBottom: 16,
    gap: 16,
  },
  itemContainer: {
    borderRadius: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,0.65)",
    height: 48,
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    gap: 16,
    flexDirection: "row",
    marginLeft: 16,
    marginRight: 16,
  },
  activeItemContainer: {
    backgroundColor: "#464567",
    color: "rgba(255,255,255,0.87)",
  },
});
