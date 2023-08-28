import { StyleSheet } from "@/goku/StyleSheet";
import { Text } from "@/goku/Text";
import { View } from "@/goku/View";
import { EmailGreenIconImg, FiverrIconImg, FreelancerIconImg, HomeIconImg, LinkedinIconImg, UpworkIconImg } from "@/src/assets/images";
import Image from "next/image";
import { useRouter } from "next/router";

const links = [
  {
    icon: FiverrIconImg,
    link: "https://www.freelancer.com/u/ayushpandey05",
  },
  {
    icon: LinkedinIconImg,
    link: "https://www.freelancer.com/u/ayushpandey05",
  },
  {
    icon: UpworkIconImg,
    link: "https://www.linkedin.com/in/ayushpandey05/",
  },
  {
    icon: FreelancerIconImg,
    link: "https://www.linkedin.com/in/ayushpandey05/",
  },
];

const RightContainer = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48, textAlign: 'center' }}>{"Want to hire me?"}</Text>
      <View style={{ alignItems: "center", gap: 24 }}>
        <Text
          style={{
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.65)",
            textAlign: 'center'
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
            cursor: 'pointer'
          }}
          onClick={()=>{
            router.push('mailto:ayushpandey0508@gmail.com')
          }}
        >
          <Image src={EmailGreenIconImg} alt="" />
          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              color: "rgba(255,255,255,0.87)",
            }}
          >
            {"EMAIL"}
          </Text>
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
        <Text style={{ fontSize: 24, color: "white", fontWeight: "400" }}>
          {"or"}
        </Text>
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
        {links.map((item, index) => (
          <View
            onClick={() => {
                window.open(item.link, "_blank");
            //   router.push(item.link, {}, {});
            }}
            key={`link-${index}}`}
            style={{
              width: 62,
              height: 62,
              borderRadius: 16,
              backgroundColor: "#464567",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Image src={item.icon} alt="" />
          </View>
        ))}
      </View>
    </View>
  );
};

export { RightContainer };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 120,
    paddingBottom: 120,
  },
});
