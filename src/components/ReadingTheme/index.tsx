import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal";
import Slider from '@react-native-community/slider';
import BrightnessControl from './components/BrightnessControl';

interface ReadingThemeProps {
    isReadingThemeVisible: boolean;
    setReadingThemeVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReadingTheme: React.FC<ReadingThemeProps> = ({ isReadingThemeVisible, setReadingThemeVisible }) => {

    const { colorScheme, toggleColorScheme } = useColorScheme();
    const [fontSize, setFontSize] = useState(2);

    const closeReadingTheme = () => {
        setReadingThemeVisible(false)
    }

    return (
        <Modal backdropTransitionOutTiming={0} onBackdropPress={closeReadingTheme} onBackButtonPress={closeReadingTheme} isVisible={isReadingThemeVisible}
            onSwipeComplete={closeReadingTheme} swipeDirection="down" className='m-0 flex-1 justify-end' >
            <View className='rounded-t-3xl bg-background-light transition-colors delay-100 ease-in dark:bg-background-dark flex p-5 h-2/3'>
                <View className='flex mb-5 flex-row items-center justify-between w-full'>
                    <Text className='text-black dark:text-white font-robotoSerif-medium text-xl'>
                        Tema de leitura
                    </Text>
                    <TouchableOpacity onPress={closeReadingTheme} className='p-2 justify-center items-center flex'>
                        <Ionicons name="close" size={24} color={colorScheme === "dark" ? 'white' : 'black'} />
                    </TouchableOpacity>
                </View>
                <View className='flex flex-1 justify-around gap-y-3 w-full'>
                    <View className='flex px-3 py-1 items-center flex-row justify-between'>
                        <Text className='text-black dark:text-white text-sm font-robotoSerif-regular'>
                            Dark Mode
                        </Text>
                        <TouchableOpacity onPress={toggleColorScheme} className={`${colorScheme === "dark" ? 'bg-white items-end' : 'bg-black items-start'} p-1 w-14 h-7 transition-all delay-300 ease-linear flex rounded-md `}>
                            <View className={`${colorScheme === "dark" ? 'bg-black' : 'bg-white'} w-2/5 h-full rounded-xl`} />
                        </TouchableOpacity>
                    </View>
                    <View className='flex px-3'>
                        <Text className='text-black dark:text-white text-sm font-robotoSerif-regular'>
                            Font Size
                        </Text>
                        <View className='flex flex-row mt-3 w-full justify-between items-center'>
                            <Text className='text-xs dark:text-white font-robotoSerif-medium'>
                                A
                            </Text>
                            <Slider
                                minimumTrackTintColor={'black'}
                                thumbTintColor={'#000'}
                                onValueChange={setFontSize}
                                style={{ width: '90%' }}
                                value={fontSize}
                                step={1}
                                minimumValue={0}
                                maximumValue={6}
                            />
                            <Text className='text-base dark:text-white font-robotoSerif-medium'>
                                A
                            </Text>
                        </View>
                    </View>
                    <BrightnessControl />
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
        </Modal>
    )
}

export default ReadingTheme