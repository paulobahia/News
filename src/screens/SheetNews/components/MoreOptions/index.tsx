import { TouchableOpacity, View, Animated } from "react-native"
import { CaseSensitive, MoreHorizontal, Share2 } from 'lucide-react-native';
import { useRef, useState } from "react";

export const MoreOptions: React.FC<{ showReadingTheme: () => void }> = ({ showReadingTheme }) => {

    const [isMoreOptionsOpen, setIsMoreOptionsOpen] = useState(false);
    const rightValue = useRef(new Animated.Value(0)).current;

    function openMoreOptions() {
        const toValue = isMoreOptionsOpen ? 0 : -160;

        Animated.timing(rightValue, {
            toValue: toValue,
            duration: 800,
            useNativeDriver: true,
        }).start();

        setIsMoreOptionsOpen(!isMoreOptionsOpen);
    }

    return (
        <View className="flex-row flex justify-center gap-x-2">
            <Animated.View style={{ transform: [{ translateX: rightValue }] }} className='flex-row absolute left-14 gap-x-2'>
                <TouchableOpacity className='w-10 h-10 shadow-2xl rounded-lg shadow-black justify-center items-center flex bg-gray-500/60'>
                    <Share2 color="white" size={20} />
                </TouchableOpacity>
                <TouchableOpacity onPress={showReadingTheme} className='w-10 h-10 shadow-2xl rounded-lg shadow-black justify-center items-center flex bg-gray-500/60'>
                    <CaseSensitive color="white" size={25} />
                </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity onPress={openMoreOptions} className={`w-10 h-10 shadow-2xl rounded-lg shadow-black justify-center items-center flex ${!isMoreOptionsOpen ? 'bg-gray-500/60' : 'bg-white'}`}>
                <MoreHorizontal color={isMoreOptionsOpen ? 'black' : 'white'} size={24} />
            </TouchableOpacity>
        </View>
    )
}