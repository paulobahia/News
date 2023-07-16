import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { NavigationProp } from "@react-navigation/native";

import { News, categoryNews } from "../../../../variables/data";
import { formatDate } from "../../../../utils/methods";

type FeedNewsProps = {
    navigation: NavigationProp<RootTabParamList>;
};

const FeedNews: React.FC<FeedNewsProps> = ({ navigation }) => {

    const [category, setCategory] = useState('Novidades')
    const [data, setData] = useState(News)

    const setCategoryFeed = (item: string) => {
        setCategory(item)
        if (item != 'Novidades') {
            return setData(News.filter(e => e.category === item))
        }
        setData(News)
    }

    return (
        <View className="flex">
            <View>
                <View className="">
                    <ScrollView showsHorizontalScrollIndicator={false} className="py-3 flex gap-x-2 shadow-black shadow-2xl" horizontal={true}>
                        {categoryNews.map((item, index) => (
                            <TouchableOpacity key={index} disabled={item.name == category} onPress={() => setCategoryFeed(item.name)} className={`${category == item.name && 'bg-slate-600'}  shadow-2xl rounded-md px-4 py-0.5 transition-colors `}>
                                <Text className={`${category == item.name ? 'text-white font-bold' : 'font-medium text-gray-300'}`}>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                {data.map((news, index) => (
                    <TouchableOpacity onPress={() => navigation.navigate('SheetNews', { news })} key={index} className="my-1 flex flex-row rounded-3xl bg-slate-100 shadow-black shadow-2xl">
                        <Image source={{ uri: news.imagePath }} className="w-24 h-24 m-3 rounded-3xl" />
                        <View className="items-start gap-y-2 pt-5 flex pr-5 flex-1">
                            <View className="flex items-center gap-x-2 flex-row">
                                <View className="px-2 py-0.5 bg-slate-600 rounded-md">
                                    <Text className="text-xs text-white  font-bold">{news.category}</Text>
                                </View>
                                <View className="text-black">
                                    <Text className="text-black font-light text-[10px]">
                                        {news.timeToRead} de leitura
                                    </Text>
                                </View>
                            </View>
                            <View className="mr-1">
                                <Text numberOfLines={2} ellipsizeMode="tail" className="text-xs font-robotoSerif-regular text-black">
                                    {news.title}
                                </Text>
                            </View>
                            <View className="flex w-full items-end">
                                <Text className="text-[10px] font-robotoSerif-regular text-neutral-800">{formatDate(news.dateReleased)}</Text>
                            </View>
                        </View>
                        {/* <View className="flex gap-y-1.5 flex-1 p-2">
                            <View className="flex flex-row items-center justify-between ">
                                <View>
                                    <View className={`px-2 py-0.5 bg-slate-500/20 rounded-md`}><Text className="text-xs text-black/50 font-nunito-bold">{news.category}</Text></View>
                                </View>
                            </View>
                            <View>
                                <Text numberOfLines={2} ellipsizeMode="tail" className="text-[12px] font-nunito-bold">
                                    {news.title}
                                </Text>
                            </View>
                            
                        </View> */}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default FeedNews