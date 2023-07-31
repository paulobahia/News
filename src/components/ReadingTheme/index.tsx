import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal";

import { BrightnessControl, FontSizeControl, BackgroundControl } from './components';
import storage from '../../services/storage';

interface ReadingThemeProps {
    isReadingThemeVisible: boolean;
    setReadingThemeVisible: React.Dispatch<React.SetStateAction<boolean>>;
    theme: ThemeReading
    setTheme: React.Dispatch<React.SetStateAction<ThemeReading>>
}

const ReadingTheme: React.FC<ReadingThemeProps> = ({ isReadingThemeVisible, setReadingThemeVisible, theme, setTheme }) => {

    const { colorScheme } = useColorScheme();
    const { background, brightest, fontSize } = theme
    const closeReadingTheme = () => {
        setReadingThemeVisible(false)
    }
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
                    <FontSizeControl fontSize={fontSize} setFontSize={setTheme} />
                    <BrightnessControl colorScheme={colorScheme} brightness={brightest} setBrightness={setTheme} />
                    <BackgroundControl background={background} setBackground={setTheme} />
                </View>
                <TouchableOpacity onPress={setUserPreferences} activeOpacity={0.6} className='bg-black w-full mt-5 dark:bg-white flex justify-center items-center p-3 rounded-lg'>
                    <Text className='text-base text-white dark:text-black font-robotoSerif-extrabold'>Aplicar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default ReadingTheme