import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity } from 'react-native';
import { Setting2, Home, SearchNormal1, ArchiveBook, Archive } from 'iconsax-react-native';

export function BottomTab(props: BottomTabBarProps) {
    const { navigation, state, descriptors } = props

    type RouteName = 'Home' | 'Promotions' | 'Live' | 'Search' | 'Settings';

    const getIconComponent = (routeName: RouteName, isCurrentRoute: boolean) => {
        switch (routeName) {
            case 'Home':
                return <Home size={30} color={isCurrentRoute ? 'red' : 'grey'} variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            case 'Search':
                return <SearchNormal1 size={30} color={isCurrentRoute ? 'red' : 'grey'} variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            case 'Promotions':
                return <Archive size={30} color={isCurrentRoute ? 'red' : 'grey'} variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            case 'Settings':
                return <Setting2 size={30} color={isCurrentRoute ? 'red' : 'grey'} variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            default:
                return null;
        }
    };

    return (
        <View className="absolute bg-white bottom-3 left-5 right-5 rounded-2xl h-16 shadow-2xl shadow-slate-500">
            <View className="flex-1 justify-around flex-row items-center">
                {state.routes.map((route, index) => {
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