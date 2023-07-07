import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity } from 'react-native';
import { Setting2, Home, PlayCircle, GlobalSearch, ReceiptDiscount } from 'iconsax-react-native';

export function BottomTab(props: BottomTabBarProps) {
    const { navigation } = props
    return (
        <View className="absolute bg-white bottom-6 left-5 right-5 rounded-2xl h-16 shadow-2xl">
            <View className="flex-row justify-around">
                <TouchableOpacity onPress={() => navigation.navigate('Home')} className="items-center justify-center">
                    <Home size="30" color="indigo" variant="Bulk" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Promotions')} className="items-center justify-center">
                    <ReceiptDiscount size="30" color="indigo" variant="Bulk" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Live')} className="items-center justify-center bottom-5">
                    <PlayCircle size="60" color="indigo" variant="Bold" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('News')} className="items-center justify-center">
                    <GlobalSearch size="30" color="indigo" variant="Bulk" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')} className="items-center justify-center">
                    <Setting2 size="30" color="indigo" variant="Bulk" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
