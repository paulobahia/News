import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity, Animated } from 'react-native';
import { Setting2, Home, SearchNormal1, Save2 } from 'iconsax-react-native';
import { useColorScheme } from "nativewind";
import useBottomTabAnimation from '../../hooks/useBottomTabAnimation';

export function BottomTab(props: BottomTabBarProps) {
    const { navigation, state, descriptors } = props
    const { colorScheme } = useColorScheme();
    type RouteName = 'Home' | 'Promotions' | 'Live' | 'Search' | 'Settings';

    const { translateValue } = useBottomTabAnimation();

    const getIconComponent = (routeName: RouteName, isCurrentRoute: boolean) => {
        switch (routeName) {
            case 'Home':
                return <Home size={30} color={isCurrentRoute ? 'red' : `${colorScheme === 'dark' ? 'white' : 'grey'}`} variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            case 'Search':
                return <SearchNormal1 size={30} color={isCurrentRoute ? 'red' : `${colorScheme === 'dark' ? 'white' : 'grey'}`} variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            case 'Promotions':
                return <Save2 size={30} color={isCurrentRoute ? 'red' : `${colorScheme === 'dark' ? 'white' : 'grey'}`} variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            case 'Settings':
                return <Setting2 size={30} color={isCurrentRoute ? 'red' : `${colorScheme === 'dark' ? 'white' : 'grey'}`} variant={isCurrentRoute ? 'Bold' : 'Bulk'} />;
            default:
                return null;
        }
    };

    return (
        <Animated.View style={{ transform: [{ translateY: translateValue }] }} className={`absolute bg-white bottom-3 left-5 right-5 rounded-2xl h-16 shadow-2xl shadow-slate-500 dark:bg-background-dark`}>
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
        </Animated.View>
    );
};