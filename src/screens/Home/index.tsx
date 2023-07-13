import React, { useState } from "react";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Swiper from 'react-native-swiper';
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

import { SwiperData } from "../../variables/data";
import FeedNews from "./components/FeedNews";

type HomeScreenProps = {
    navigation: BottomTabNavigationProp<RootTabParamList, 'Home'>;
};

const Home: React.FC<HomeScreenProps> = (props) => {

    return (
        <ScrollView className="bg-slate-100">
            <View className="flex flex-1 justify-start pb-20 pt-8 px-1 items-center">
                <View className="divide-y-[0.2px] divide-gray-600 p-2">
                    <View className="mb-2 flex justify-between flex-row items-center gap-y-1.5">
                        <View>
                            <Text className="text-2xl font-light">Tarde, Ipatinga</Text>
                            <Text className="text-xs font-light">Aqui está o seu feed de notícias</Text>
                        </View>
                        <View className="flex flex-row items-center">
                            <Image source={{ uri: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png' }} className="w-12 h-12 rounded-l-lg" />
                            <View className="flex flex-row items-start">
                                <Text className="text-4xl font-extralight">
                                    22
                                </Text>
                                <Text className="text-sm font-extralight">°C</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View className="flex-row items-center w-full">
                            <Text className="text-lg font-medium">Destaques</Text>
                        </View>
                        <View className="h-48 mt-2">
                            <Swiper showsButtons={false} showsPagination={false} showsHorizontalScrollIndicator={false}>
                                {SwiperData.map((item, index) => (
                                    <TouchableOpacity key={index} className="flex flex-1">
                                        <Image source={{ uri: item.url }} className="w-full h-full rounded-2xl bg-cover" />
                                        <View className="absolute rounded-2xl flex w-full h-full">
                                            <View className={`flex ${item.type == 1 ? 'bg-blue-600' : 'bg-red-600'}  p-0.5 right-0 absolute px-3 rounded-bl-2xl rounded-tr-2xl`}>
                                                <Text className="text-white text-sm font-extrabold">
                                                    {item.type == 1 ? 'Notícias' : 'Promoção'}
                                                </Text>
                                            </View>
                                            <View className="flex absolute bottom-0 px-3 rounded-bl-2xl rounded-tr-2xl justify-center items-start bg-gray-800/70">
                                                <Text numberOfLines={1} adjustsFontSizeToFit ellipsizeMode="tail" className="text-white text-sm font-semibold my-1">
                                                    {item.title}
                                                </Text>
                                                <Text className="text-white font-normal mb-2 text-xs">
                                                    {item.date}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </Swiper>
                        </View>
                    </View>
                    <FeedNews />
                </View>
            </View>
        </ScrollView>
    )
}

export default Home;