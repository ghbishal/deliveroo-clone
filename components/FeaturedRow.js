import {View, Text} from "react-native";
import React, {useEffect, useState} from "react";
import {ArrowRightIcon} from "react-native-heroicons/outline";
import {ScrollView} from "react-native";
import {RestaurantCard} from "./RestaurantCard";
import {client} from "../sanity";

export const FeaturedRow = ({id, title, description}) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[] -> {
          ...,
          dishes[] ->
        }
      }[0]
    `,
        {id}
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        // this is the inner padding
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        // This is outer overall scrollview padding
        className="pt-4"
      >
        {/* Restaurant Cards... */}

        {restaurants?.map((restaurants) => (
          <RestaurantCard
            key={restaurants._id}
            id={restaurants._id}
            imgUrl={restaurants.image}
            address={restaurants.address}
            title={restaurants.string}
            dishes={restaurants.dishes}
            rating={restaurants.rating}
            short_description={restaurants.short_description}
            genre={restaurants.string}
            long={restaurants.long}
            lat={restaurants.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};
