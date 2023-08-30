import { StyleSheet } from "@/goku/StyleSheet";
import { Text } from "@/goku/Text";
import { View } from "@/goku/View";
import { FiverrIconImg, FreelancerIconImg, LinkedinIconImg, UpworkIconImg } from "@/src/assets/images";
import { LinkIcon } from "@/src/components/LinkIcon";
import { useWindowDimensions } from "@/src/hooks/useWindowDimensions";

const aboutThisPage = [
  "This page was built by me.",
  "I always enjoy constructive feedback, positive or negative, and improving my products based on that. This is no exception, so feel free to use the links bellow.",
  "The idea is to keep it as minimal as possible without missing on content.",
];

const links = [
  {
    icon: FiverrIconImg,
    link: "https://www.freelancer.com/u/ayushpandey05",
  },
  {
    icon: LinkedinIconImg,
    link: "https://www.linkedin.com/in/ayushpandey05/",
  },
  {
    icon: UpworkIconImg,
    link: "https://www.linkedin.com/in/ayushpandey05/",
  },
  {
    icon: FreelancerIconImg,
    link: "https://www.freelancer.com/u/ayushpandey05",
  },
];

const AboutThisPage = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.innerContainer,
          ...(width <= 750 && styles.mobileContainer),
        }}
      >
        <Text style={styles.title}>{"About this page"}</Text>
        <View
          style={{
            ...styles.aboutTextContainer,
            ...(width <= 750 && styles.aboutTextContainerMobile),
          }}
        >
          {aboutThisPage.map((item, index) => (
            <Text style={styles.aboutText} key={`about-this-page-${index}`}>
              {item}
            </Text>
          ))}
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          {links.map((item, index) => (
            <LinkIcon key={`link-${index}}`} {...item} />
          ))}
        </View>
      </View>
    </View>
  );
};

export { AboutThisPage };

const styles = StyleSheet.create({
  container: { flex: 1, overflowY: "scroll" },
  innerContainer: {
    paddingLeft: 64,
    paddingRight: 64,
    paddingTop: 32,
    paddingBottom: 32,
    gap: 16,
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  mobileContainer: {
    flexDirection: "column",
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: "400",
    color: "rgba(255,255,255,0.87)",
    textAlign: "center",
  },
  aboutTextContainer: { gap: 16, marginTop: 108, marginBottom: 108 },
  aboutTextContainerMobile: { gap: 16, marginTop: 60, marginBottom: 60 },
  aboutText: {
    fontSize: 24,
    fontWeight: "400",
    color: "rgba(255,255,255,0.87)",
    textAlign: "center",
  },
});
