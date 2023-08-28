import { StyleSheet } from "@/goku/StyleSheet";
import { View } from "@/goku/View";
import { useRouter } from "next/router";
import { tabs } from "./tabs";

const NavbarLaptop = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <View style={{ width: "22%", backgroundColor: "#2E2E47" }}>
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
            {item.label}
          </View>
        );
      })}
    </View>
  );
};

export { NavbarLaptop };

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,0.65)",
  },
  activeItemContainer: {
    backgroundColor: "#464567",
    color: "rgba(255,255,255,0.87)",
  },
});
