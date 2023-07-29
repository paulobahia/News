import { useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Brightness from 'expo-brightness';
import { ColorSchemeName } from 'nativewind/dist/style-sheet/color-scheme';

import { Sun1 } from 'iconsax-react-native';
import Slider from '@react-native-community/slider';

interface BrightnessControlProps {
    brightness: number;
    setBrightness: React.Dispatch<React.SetStateAction<ThemeReading>>;
    colorScheme: ColorSchemeName
}

export const BrightnessControl: React.FC<BrightnessControlProps> = ({ brightness, setBrightness, colorScheme }) => {

    const onBrightnessChange = async (newbrightest: number) => {

        setBrightness((prevTheme) => ({
            ...prevTheme,
            brightest: newbrightest
        }))

        await Brightness.setBrightnessAsync(newbrightest);
    };

    return (
        <View className='flex px-3'>
            <Text className='text-black dark:text-white text-sm font-robotoSerif-regular'>
                Brilho
            </Text>
            <View className='flex flex-row mt-3 justify-between items-center'>
                <Sun1 size="15" color={colorScheme === "dark" ? 'white' : 'black'} />
                <Slider
                    minimumTrackTintColor={'black'}
                    thumbTintColor={'#000'}
                    onValueChange={onBrightnessChange}
                    value={brightness}
                    style={{ width: '90%' }}
                    minimumValue={0}
                    maximumValue={1}
                />
                <Sun1 size="24" color={colorScheme === "dark" ? 'white' : 'black'} />
            </View>
        </View>
    )
}