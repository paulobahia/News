import React from "react";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { Text, View, Image } from "react-native";
import Swiper from 'react-native-swiper';

type HomeScreenProps = {
    navigation: BottomTabNavigationProp<RootTabParamList, 'Home'>;
};

const images = [
    'https://images.pexels.com/photos/17318211/pexels-photo-17318211/free-photo-of-abstrato-resumo-abstrair-aventura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/16159464/pexels-photo-16159464/free-photo-of-ceu-azul-ceu-de-brigadeiro-construcao-predio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15109908/pexels-photo-15109908/free-photo-of-flor-broto-borboleta-flores.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const Home: React.FC<HomeScreenProps> = (props) => {

    return (
        <View className="bg-neutral-300 flex flex-1 justify-start pt-12 px-3 items-center">
            <Swiper className="flex" loop={false} >
                {images.map((image, index) => (
                    <View key={index} className="flex flex-1">
                        <Image source={{ uri: image }} className="w-full h-[30%] rounded-2xl bg-cover" />
                    </View>
                ))}
            </Swiper>
        </View>
    )
}

export default Home;