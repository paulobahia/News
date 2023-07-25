import { useRef, useState } from 'react'
import { View, Image, Text, TouchableOpacity } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack";
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RouteProp } from '@react-navigation/native';
import { ArrowLeft2, More, Save2, Sun1 } from 'iconsax-react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';

type SheetNewsScreenProps = {
    navigation: StackNavigationProp<RootTabParamList, 'SheetNews'>;
    route: RouteProp<RootTabParamList, 'SheetNews'>
};

const SheetNews: React.FC<SheetNewsScreenProps> = ({ route, navigation }) => {

    const { category, imagePath, dateReleased, title } = route.params.news
    const sheetRef = useRef<BottomSheet>(null)
    const sheetThemeRef = useRef<BottomSheet>(null)
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

    const { colorScheme, toggleColorScheme } = useColorScheme();

    const closeBottomSheet = () => {
        sheetThemeRef.current?.close()
    };

    const openBottomSheet = () => {
        setIsBottomSheetVisible(true);
    };

    const handleSheetChanges = (index: number) => {
        if (index === -1) {
            setIsBottomSheetVisible(false);
        }
    };

    const BackgroundContente = () => {
        return (
            <View className='flex-1'>
                <Image
                    source={{ uri: imagePath }}
                    className='w-screen h-2/5'
                />
                <View className='w-screen h-2/5 p-5 absolute'>
                    <View className='flex flex-row justify-between'>
                        <View>
                            <TouchableOpacity onPress={() => navigation.goBack()} className='p-2 shadow-2xl rounded-lg shadow-black justify-center items-center flex bg-gray-500/60'>
                                <ArrowLeft2 size="24" color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <View className='gap-y-2'>
                            <TouchableOpacity onPress={openBottomSheet} className='p-2 shadow-2xl rounded-lg shadow-black justify-center items-center flex bg-gray-500/60'>
                                <More size="24" color="#fff" />
                            </TouchableOpacity>
                            <TouchableOpacity className='p-2 shadow-2xl rounded-lg shadow-black justify-center items-center flex bg-gray-500/60'>
                                <Save2 size="24" color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <GestureHandlerRootView className="bg-neutral-300 flex flex-1 justify-start items-center">
            <BottomSheet
                ref={sheetRef}
                snapPoints={['75%']}
                backdropComponent={() => <BackgroundContente />}
            >
                <BottomSheetScrollView>
                    <View className='flex px-5 gap-y-5 pt-3'>
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
                            <Text className='font-robotoSerif-bold text-2xl'>
                                {title}
                            </Text>
                        </View>
                        <View className='mb-5'>
                            <Text className='text-sm font-robotoSerif-regular text-justify'>
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

            <BottomSheet
                ref={sheetThemeRef}
                snapPoints={['65%']}
                handleComponent={null}
                enablePanDownToClose
                onChange={handleSheetChanges}
                index={isBottomSheetVisible ? 0 : -1}
            >
                <View className='rounded-t-3xl bg-background-light dark:bg-background-dark flex p-5 items-center flex-1'>
                    <View className='flex mb-5 flex-row items-center justify-between w-full'>
                        <Text className='text-black dark:text-white font-robotoSerif-medium text-xl'>
                            Tema de leitura
                        </Text>
                        <TouchableOpacity onPress={closeBottomSheet} className='p-2 justify-center items-center flex'>
                            <Ionicons name="close" size={24} color={colorScheme === "dark" ? 'white' : 'black'} />
                        </TouchableOpacity>
                    </View>
                    <View className='flex flex-1 justify-around gap-y-3 w-full'>
                        <View className='flex px-3 py-1 items-center flex-row justify-between'>
                            <Text className='text-black dark:text-white text-sm font-robotoSerif-regular'>
                                Dark Mode
                            </Text>
                            <TouchableOpacity onPress={toggleColorScheme} className={`${colorScheme === "dark" ? 'bg-white items-end' : 'bg-black items-start'} p-1 w-14 h-7 justify-center transition-all delay-150 ease-out flex rounded `}>
                                <View className={`${colorScheme === "dark" ? 'bg-black' : 'bg-white'} w-[45%] h-full rounded-md`} />
                            </TouchableOpacity>
                        </View>
                        <View className='flex px-3'>
                            <Text className='text-black dark:text-white text-sm font-robotoSerif-regular'>
                                Font Size
                            </Text>
                            <View className='flex flex-row mt-3 w-full justify-between items-center'>
                                <Text className='text-xs font-robotoSerif-medium'>
                                    A
                                </Text>
                                <Text className='text-base font-robotoSerif-medium'>
                                    A
                                </Text>
                            </View>
                        </View>
                        <View className='flex px-3'>
                            <Text className='text-black dark:text-white text-sm font-robotoSerif-regular'>
                                Brilho
                            </Text>
                            <View className='flex flex-row mt-3 w-full justify-between items-center'>
                                <Sun1 size="15" color="#000" />
                                <Sun1 size="24" color="#000" />
                            </View>
                        </View>
                        <View className='flex px-3'>
                            <Text className='text-black dark:text-white text-sm font-robotoSerif-regular'>
                                Cor do fundo
                            </Text>
                            <View className='flex flex-row mt-3 w-full justify-between items-center'>
                                <TouchableOpacity className='flex justify-center rounded-md shadow-md shadow-black items-center px-7 py-1 bg-background-light'>
                                    <Text className='text-xs font-robotoSerif-light'>
                                        Aa
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity className='flex justify-center rounded-md shadow-md shadow-black items-center px-7 py-1 bg-background-dark'>
                                    <Text className='text-xs font-robotoSerif-light text-white'>
                                        Aa
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity className='flex justify-center rounded-md shadow-md shadow-black items-center px-7 py-1 bg-background-reading'>
                                    <Text className='text-xs font-robotoSerif-light'>
                                        Aa
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity className='flex justify-center rounded-md shadow-md shadow-black items-center px-7 py-1 bg-background-dark2'>
                                    <Text className='text-xs font-robotoSerif-light text-white'>
                                        Aa
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.6} className='bg-black w-full mt-5 dark:bg-white flex justify-center items-center p-3 rounded-lg'>
                        <Text className='text-base text-white dark:text-black font-robotoSerif-extrabold'>Aplicar</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>

        </GestureHandlerRootView >
    )
}

export default SheetNews