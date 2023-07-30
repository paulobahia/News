import { useEffect, useRef, useState } from 'react'
import { View, Image, Text, TouchableOpacity } from "react-native"
import * as Brightness from 'expo-brightness';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";

import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ArrowLeft2 } from 'iconsax-react-native';

import ReadingTheme from '../../components/ReadingTheme';
import { SaveNews } from '../../components/SaveNews';
import { MoreOptions } from './components/MoreOptions';
import { useColorScheme } from 'nativewind';
import storage from '../../services/storage';

type SheetNewsScreenProps = {
    navigation: StackNavigationProp<RootTabParamList, 'SheetNews'>;
    route: RouteProp<RootTabParamList, 'SheetNews'>
};

const SheetNews: React.FC<SheetNewsScreenProps> = ({ route, navigation }) => {
    const { colorScheme } = useColorScheme();

    const { category, imagePath, dateReleased, title, id } = route.params.news
    const sheetRef = useRef<BottomSheet>(null)

    const [isReadingThemeVisible, setReadingThemeVisible] = useState(false);

    const [theme, setTheme] = useState<ThemeReading>({
        background: "#F2F2F2",
        brightest: 0.5,
        fontSize: 2,
    });

    const [textColor, setTextColor] = useState('#000')

    const showReadingTheme = () => {
        setReadingThemeVisible(true);
    };

    useEffect(() => {
        const readingThemeData = storage.getReadingTheme();

        const getReadingTheme = async () => {
            if (readingThemeData != null) {
                setTheme(readingThemeData)
            }
            else {
                setTheme({
                    background: "#F2F2F2",
                    brightest: 0.5,
                    fontSize: 2,
                })
            }
        }

        const setInitialBrightness = () => {
            const brightnessValue = readingThemeData?.brightest ?? 0.5
            Brightness.setBrightnessAsync(brightnessValue)
        };

        const handleThemeText = async () => {
            const backgroundValue = readingThemeData?.background ?? '#000'
            if (backgroundValue === "") {
                if (colorScheme === "dark") {
                    setTextColor('#fff')
                }
                else {
                    setTextColor('#000')
                }
            }
            else {
                switch (backgroundValue) {
                    case "#F2F2F2":
                        setTextColor('#000')
                        break;
                    case "#333333":
                        setTextColor('#fff')
                        break;
                    case "#FFF5CC":
                        setTextColor('#000')
                        break;
                    case "#444444":
                        setTextColor('#fff')
                        break;
                    default:
                        break;
                }
            }
        }

        const fetchData = async () => {
            await getReadingTheme();
            setInitialBrightness();
            handleThemeText();
        };

        fetchData();

        return () => {
            const revertBrigthness = async () => {
                await Brightness.restoreSystemBrightnessAsync();
            }
            revertBrigthness();
        };
    }, [isReadingThemeVisible])

    const BackgroundContente = () => {
        return (
            <View style={{ backgroundColor: `${theme.background}` }} className='flex-1'>
                <Image
                    source={{ uri: imagePath }}
                    className='w-screen h-2/5'
                />
                <View className='w-screen h-2/5 p-5 absolute'>
                    <View className='flex flex-row justify-between'>
                        <View>
                            <TouchableOpacity onPress={() => navigation.goBack()} className='w-10 h-10 shadow-2xl rounded-lg shadow-black justify-center items-center flex bg-gray-500/60'>
                                <ArrowLeft2 size="24" color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <View className='gap-y-2'>
                            <View>
                                <MoreOptions showReadingTheme={showReadingTheme} />
                            </View>
                            <View>
                                <SaveNews news={route.params.news} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <GestureHandlerRootView className="flex flex-1 justify-start items-center">
            <BottomSheet
                // handleIndicatorStyle={{ backgroundColor: 'red' }}
                handleStyle={{
                    backgroundColor: `${theme.background}`,
                }}
                ref={sheetRef}
                snapPoints={['65%', "80%"]}
                backdropComponent={() => <BackgroundContente />}
            >
                <BottomSheetScrollView>
                    <View style={{ backgroundColor: `${theme.background}` }} className='flex px-5 gap-y-5 pt-3'>
                        <View className='flex justify-between items-center flex-row'>
                            <View className='shadow-2xl rounded-md bg-green-500 px-4 py-0.5 transition-colors'>
                                <Text className='font-robotoSerif-medium text-sm text-white'>
                                    {category}
                                </Text>
                            </View>
                            <View>
                                <Text className='text-gray-400 font-robotoSerif-light text-xs'>
                                    {dateReleased}
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: `${textColor}` }} className='font-robotoSerif-bold text-2xl'>
                                {title}
                            </Text>
                        </View>
                        <View className='mb-5'>
                            <Text style={{ color: `${textColor}` }} className='text-sm font-robotoSerif-regular text-justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam tristique nisl ut convallis. Aenean id elit vel urna hendrerit faucibus a in diam. Proin id vestibulum nisl. Integer auctor eleifend massa, vel euismod arcu malesuada vel. Fusce venenatis bibendum massa id vehicula. In suscipit dui vel ligula cursus, ac feugiat dui convallis. Ut eu tincidunt urna. Sed malesuada purus vel elit facilisis, ut finibus lectus eleifend.
                                {'\n'}
                                {'\n'}
                                Praesent eget ultrices nulla. Vivamus eget tortor et mi interdum scelerisque. Nullam auctor, felis ac tincidunt rhoncus, justo magna faucibus ipsum, nec posuere risus neque in ipsum. Nam id aliquet arcu. Suspendisse ut mi nunc. Phasellus scelerisque, arcu eget tempus rhoncus, dui tellus aliquet justo, a tincidunt urna libero et odio. Suspendisse potenti. Nunc volutpat velit in luctus mattis. In eu orci mauris. Integer vel lorem vitae nulla tempus eleifend. Sed a venenatis libero. Cras tempus convallis eros, non lacinia mi tincidunt id. Etiam vestibulum, risus in facilisis sodales, quam nisl ultricies quam, a malesuada ipsum nisl nec ex.
                                {'\n'}
                                {'\n'}
                                Maecenas pellentesque venenatis elit, eu tristique est efficitur in. Nam et nisi ac nisi dignissim rhoncus. Ut nec fermentum felis. Duis lacinia, risus eu eleifend pulvinar, massa sapien luctus augue, eget interdum ante ex quis mauris. Aenean eu orci eget elit consectetur faucibus. Phasellus nec justo ut purus consequat auctor in vitae odio. Suspendisse potenti. In nec lacus tellus. Curabitur euismod felis id metus bibendum, ac fermentum purus posuere. Quisque in elit eu mauris luctus euismod eu eu ex. Suspendisse non arcu vitae ex malesuada pulvinar sit amet id libero. Integer volutpat dapibus magna, at interdum erat luctus vel. Duis laoreet, purus eu lobortis euismod, nisl felis vehicula odio, id iaculis est sapien quis arcu.
                            </Text>
                        </View>
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
            <ReadingTheme theme={theme} setTheme={setTheme} isReadingThemeVisible={isReadingThemeVisible} setReadingThemeVisible={setReadingThemeVisible} />
        </GestureHandlerRootView >
    )
}

export default SheetNews