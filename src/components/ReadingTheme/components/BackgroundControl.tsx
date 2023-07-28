import { View, Text, TouchableOpacity } from "react-native"

interface BackgroundControlProps {
    background: string;
    setBackground: React.Dispatch<React.SetStateAction<ThemeReading>>;
}

export const BackgroundControl: React.FC<BackgroundControlProps> = ({ background, setBackground }) => {

    const handleBackground = (newBackground: string) => {
        setBackground((prevTheme) => ({
            ...prevTheme,
            background: newBackground
        }))
    }

    return (
        <View className='flex px-3'>
            <Text className='text-black dark:text-white text-sm font-robotoSerif-regular'>
                Cor do fundo
            </Text>
            <View className='flex flex-row mt-3 w-full justify-between items-center'>
                <View className='flex justify-center items-center'>
                    <TouchableOpacity onPress={() => handleBackground('#F2F2F2')} className='flex justify-center rounded-md shadow-md shadow-black items-center px-7 py-1 bg-background-light'>
                        <Text className='text-xs font-robotoSerif-light'>
                            Aa
                        </Text>
                    </TouchableOpacity>
                    {background == '#F2F2F2' &&
                        (
                            <View className='bg-black dark:bg-white h-1 rounded-full flex justify-center mt-1 items-center w-1/5' />
                        )
                    }
                </View>
                <View className='flex justify-center items-center'>

                    <TouchableOpacity onPress={() => handleBackground('#333333')} className='flex justify-center rounded-md shadow-md shadow-black items-center px-7 py-1 bg-background-dark'>
                        <Text className='text-xs font-robotoSerif-light text-white'>
                            Aa
                        </Text>
                    </TouchableOpacity>
                    {background == '#333333' &&
                        (
                            <View className='bg-black dark:bg-white h-1 rounded-full flex justify-center mt-1 items-center w-1/5' />
                        )
                    }
                </View>
                <View className='flex justify-center items-center'>
                    <TouchableOpacity onPress={() => handleBackground('#FFF5CC')} className='flex justify-center rounded-md shadow-md shadow-black items-center px-7 py-1 bg-background-reading'>
                        <Text className='text-xs font-robotoSerif-light'>
                            Aa
                        </Text>
                    </TouchableOpacity>
                    {background == '#FFF5CC' &&
                        (
                            <View className='bg-black dark:bg-white h-1 rounded-full flex justify-center mt-1 items-center w-1/5' />
                        )
                    }
                </View>
                <View className='flex justify-center items-center'>
                    <TouchableOpacity onPress={() => handleBackground('#444444')} className='flex justify-center rounded-md shadow-md shadow-black items-center px-7 py-1 bg-background-dark2'>
                        <Text className='text-xs font-robotoSerif-light text-white'>
                            Aa
                        </Text>
                    </TouchableOpacity>
                    {background == '#444444' &&
                        (
                            <View className='bg-black dark:bg-white h-1 rounded-full flex justify-center mt-1 items-center w-1/5' />
                        )
                    }
                </View>
            </View>
        </View>
    )
}