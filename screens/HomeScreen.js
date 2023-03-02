import {View, Text, SafeAreaView, Image} from "react-native";
import React, {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/core";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // how to know where are the options like headerShown
      headerShown: false,
    });
  }, []);

  // 39 minutes

  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-500">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>
      </Text>
    </SafeAreaView>
  );
}
