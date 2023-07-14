import { useRef, useState } from 'react'
import { View, Image } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type SheetNewsScreenProps = {
    navigation: StackNavigationProp<RootTabParamList, 'SheetNews'>;
};

const SheetNews: React.FC<SheetNewsScreenProps> = (props) => {
    const { navigation } = props

    const sheetRef = useRef<BottomSheet>(null)
    const snapPoints = ['65%', '80%']

    const [sheetHeight, setSheetHeight] = useState(35);

    const handleSheetChanges = (newSheetHeight: number) => {
        setSheetHeight(100 - parseInt(snapPoints[newSheetHeight]))
    };

    return (
        <GestureHandlerRootView className="bg-neutral-300 flex flex-1 justify-start items-center">
            <View className='flex-1'>
                <Image
                    source={{ uri: 'https://f.i.uol.com.br/fotografia/2023/07/13/168929673064b09f5a7d0dd_1689296730_3x2_xl.jpg' }}
                    className='w-screen h-2/5'
                />
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={['68%', '80%']}
                onChange={handleSheetChanges}
            >
                <BottomSheetView>
                    <View className='flex justify-center items-center h-full'>
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView >
    )
}

export default SheetNews