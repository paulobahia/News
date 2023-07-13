import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Setting2, Home, PlayCircle, GlobalSearch, ReceiptDiscount } from 'iconsax-react-native';

export function BottomTab(props: BottomTabBarProps) {
    const { navigation, state, descriptors } = props

    type RouteName = 'Home' | 'Promotions' | 'Live' | 'News' | 'Settings';

    const getIconComponent = (routeName: RouteName, isCurrentRoute: boolean) => {
        switch (routeName) {
            case 'Home':
                return <Home size={30} color='#5F1CBE' variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            case 'Promotions':
                return <ReceiptDiscount size={30} color='#5F1CBE' variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            case 'Live':
                return <PlayCircle className="absolute bottom-8" size={60} color='#5F1CBE' variant="Bold" />;
            case 'News':
                return <GlobalSearch size={30} color='#5F1CBE' variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            case 'Settings':
                return <Setting2 size={30} color='#5F1CBE' variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            default:
                return null;
        }
    };

    return (
        <View className="absolute bg-white bottom-6 left-5 right-5 rounded-2xl h-16 shadow-2xl">
            <View className="flex-1 justify-around flex-row items-center">
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.title || route.name;
                    const isCurrentRoute = state.index === index;

                    return (
                        <View key={route.key}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate(route.name)}
                                className="items-center justify-center flex-1"
                            >
                                {getIconComponent(route.name as RouteName, isCurrentRoute)}
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};