import { Sun1 } from 'iconsax-react-native';
import { Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import * as Brightness from 'expo-brightness';
import { useState, useEffect } from 'react';

const BrightnessControl: React.FC = () => {

    const [brightness, setBrightness] = useState(0.5);

    const onBrightnessChange = async (value: number) => {
        setBrightness(value);
        await Brightness.setBrightnessAsync(value);
    };

    useEffect(() => {
        const setInitialBrightness = async () => {
            await Brightness.setBrightnessAsync(brightness)

            setInitialBrightness();
        };
    }, [])

    return (
        <View className='flex px-3'>
            <Text className='text-black dark:text-white text-sm font-robotoSerif-regular'>
                Brilho
            </Text>
            <View className='flex flex-row mt-3 justify-between items-center'>
                <Sun1 size="15" className='text-black dark:text-white' />
                <Slider
                    minimumTrackTintColor={'black'}
                    thumbTintColor={'#000'}
                    onValueChange={onBrightnessChange}
                    value={brightness}
                    style={{ width: '90%' }}
                    minimumValue={0}
                    maximumValue={1}
                />
                <Sun1 size="24" className='text-black dark:text-white' />
            </View>
        </View>
    )
}

export default BrightnessControl