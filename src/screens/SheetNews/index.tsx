import { useRef } from 'react'
import { Text, View, TouchableOpacity } from "react-native"
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

    return (
        <GestureHandlerRootView className="bg-neutral-300 flex flex-1 justify-start pt-12 items-center">
            <View>
                {/* Imagem da Notícia */}
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={snapPoints}
            >
                <BottomSheetView>
                    <View className='flex justify-center items-center h-full'>
                        {/* Conteúdo da Notícia */}
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    )
}

export default SheetNews