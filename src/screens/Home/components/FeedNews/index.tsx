import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { NavigationProp } from "@react-navigation/native";

import { News, categoryNews } from "../../../../variables/data";
import { formatDate } from "../../../../utils/methods";

type FeedNewsProps = {
    navigation: NavigationProp<RootTabParamList>;
};

const FeedNews: React.FC<FeedNewsProps> = ({ navigation }) => {

    const [category, setCategory] = useState('Hoje')
    const [data, setData] = useState(News)

    const returnCategoryColor = (item: string) => {
        const categoryColors: { [key: string]: string } = {
            Filmes: 'bg-red-600/70',
            Televisão: 'bg-blue-600/70',
            Política: 'bg-green-600/70',
            Cultura: 'bg-orange-600/70',
            Cotidiano: 'bg-gray-600/70',
        };

        if (item in categoryColors) {
            return categoryColors[item];
        }

        return '';
    };

    const setCategoryFeed = (item: string) => {
        setCategory(item)
        if (item != 'Hoje') {
            return setData(News.filter(e => e.category === item))
        }
        setData(News)
    }

    return (
        <View className="flex divide-y-[0.3px] divide-gray-600 px-2">
            <View>
                <Text className="text-lg font-nunito-medium">Notícias</Text>
            </View>
            <View>
                <ScrollView showsHorizontalScrollIndicator={false} className="py-3 gap-x-2 shadow-black shadow-2xl" horizontal={true}>
                    {categoryNews.map((item, index) => (
                        <TouchableOpacity disabled={item.name == category} onPress={() => setCategoryFeed(item.name)} key={index} className={`${category == item.name ? 'bg-background-primary' : 'bg-slate-500/20'}  shadow-2xl rounded-md px-4 py-0.5 transition-colors `}>
                            <Text className={`${category == item.name ? 'text-white font-nunito-bold' : 'font-nunito-medium text-gray-300'}`}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                {data.map((news, index) => (
                    <TouchableOpacity onPress={() => navigation.navigate('SheetNews')} key={index} className="my-1 rounded-lg flex shadow-black shadow-2xl">
                        <View className="flex flex-row shadow-2xl">
                            <Image source={{ uri: news.imagePath }} className="w-1/3  rounded-xl" />
                            <View className="flex gap-y-1.5 flex-1 p-2">
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
                                <View className="flex">
                                    <Text className="text-[10px] font-nunito-regular text-neutral-800">{formatDate(news.dateReleased)}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default FeedNews