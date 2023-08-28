import { View } from "@/goku/View";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { NavbarLaptop } from "@/src/app/NavbarLaptop";

import { NavbarMobile } from "@/src/app/NavbarMobile";

const MOBILE_SIZE = 900;
const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {}, []);

  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        flexDirection: width > MOBILE_SIZE ? "row" : "column",
      }}
    >
      {width > MOBILE_SIZE ? <NavbarLaptop /> : <></>}
      <View style={{ flex: 1, backgroundColor: "#3C3C5B" }}>
        <Component {...pageProps} />
      </View>
      {width > MOBILE_SIZE ? <></> : <NavbarMobile />}
    </View>
  );
};

export { App };
