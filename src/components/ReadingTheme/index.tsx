import { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal";
import { BrightnessControl, FontSizeControl, BackgroundControl } from './components';
import storage from '../../services/storage';

interface ReadingThemeProps {
    isReadingThemeVisible: boolean;
    setReadingThemeVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReadingTheme: React.FC<ReadingThemeProps> = ({ isReadingThemeVisible, setReadingThemeVisible }) => {

    const { colorScheme, toggleColorScheme } = useColorScheme();

    const [theme, setTheme] = useState<ThemeReading>({
        background: "#F2F2F2",
        brightest: 0.5,
        fontSize: 2,
    });

    const closeReadingTheme = () => {
        setReadingThemeVisible(false)
    }

    useEffect(() => {
        const getUserPreferences = () => {
            const userPreferencesData = storage.getUserPreferences();

            if (userPreferencesData != null) {
                setTheme(userPreferencesData.themeReading)
            }
        }

        getUserPreferences();
    }, [])

    const setUserPreferences = async () => {
        try {
            await storage.setReadingTheme(theme)
            await storage.setDarkMode(colorScheme === 'dark' ? true : false)
            closeReadingTheme()
        } catch (error) {
            console.log(error)
        }
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
                    <FontSizeControl fontSize={theme.fontSize} setFontSize={setTheme} />
                    <BrightnessControl colorScheme={colorScheme} brightness={theme.brightest} setBrightness={setTheme} />
                    <BackgroundControl background={theme.background} setBackground={setTheme} />
                </View>
                <TouchableOpacity onPress={setUserPreferences} activeOpacity={0.6} className='bg-black w-full mt-5 dark:bg-white flex justify-center items-center p-3 rounded-lg'>
                    <Text className='text-base text-white dark:text-black font-robotoSerif-extrabold'>Aplicar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default ReadingTheme