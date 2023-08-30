import { StyleSheet } from "@/goku/StyleSheet";
import { View } from "@/goku/View";
import Image from "next/image";
import { FC } from "react";

interface LinkIconProps {
  link: string;
  icon: any;
}

const LinkIcon: FC<LinkIconProps> = ({ icon, link }) => {
  return (
    <View
      onClick={() => {
        window.open(link, "_blank");
      }}
      style={styles.container}
    >
      <Image src={icon} alt="" />
    </View>
  );
};

export { LinkIcon };

const styles = StyleSheet.create({
  container: {
    width: 62,
    height: 62,
    borderRadius: 16,
    backgroundColor: "#464567",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
});
