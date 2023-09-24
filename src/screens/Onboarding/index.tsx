import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { colors, fonts, height, spacing, width } from "@/theme";
import Svg, { Path } from "react-native-svg";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/onboarding.png")} />
      <View style={{ position: "relative" }}>
        <View
          style={{
            backgroundColor: colors.brand,
            borderRadius: 10,
            height: height * 0.055,
            width: width * 0.23,
            position: "absolute",
            left: height * 0.049,
            top: height * 0.003,
          }}
        ></View>
        <Text
          style={[
            styles.text,
            { color: colors.white, lineHeight: spacing.xl * 1.227 },
          ]}
        >
          <Text style={{ color: colors.dark }}>Preh</Text>aps The {"\n"} Most{" "}
          <Text
            style={{
              color: "#000",
              textShadowColor: "#FFF",
              textShadowRadius: 3,
              textShadowOffset: {
                width: 0,
                height: 0,
              },
            }}
          >
            Convenient {"\n"}NFT
          </Text>{" "}
          Auction
        </Text>
      </View>
      <View style={{ width: spacing.m, height: spacing.m }}>
        {/* <Svg width={spacing.m} height={spacing.m}>
          <Path
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            fill="#fff"
          />
        </Svg> */}
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Cilo-Bold",
    fontSize: spacing.xl,
    color: colors.white,
    textAlign: "center",
  },
});
