import React from "react";
import { View, Text, Touchable, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SIZES, FONTS, icons } from "../constants";
const HeaderBar = ({
  title,
  leftOnPressed,
  rightOnPressed,
  containerStyle,
  right
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: SIZES.padding,
        ...containerStyle,
      }}
    >
      {/* Back */}
      <View
        style={{
          alignItems: "flex-start",
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.transparentBlack,
          }}
          onPress={leftOnPressed}
        >
          <Image
            source={icons.left_arrow}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
      </View>
      {/* Title */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{title}</Text>
      </View>
      {/* Settings */}
      <TouchableOpacity
        onPress={rightOnPressed}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: right ? COLORS.transparentBlack : null,
        }}
      >
        {right && (
          <Image
            source={icons.settings}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.white,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
