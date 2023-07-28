import { View, Text } from "react-native"

import Slider from '@react-native-community/slider';

interface FontSizeControlProps {
    fontSize: number;
    setFontSize: React.Dispatch<React.SetStateAction<ThemeReading>>;
}

export const FontSizeControl: React.FC<FontSizeControlProps> = ({ fontSize, setFontSize }) => {

    const handleFontSize = (newFontSize: number) => {
        setFontSize((prevTheme) => ({
            ...prevTheme,
            fontSize: newFontSize
        }))
    }

    return (
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
                    onValueChange={(value) => handleFontSize(value)}
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
    )
}