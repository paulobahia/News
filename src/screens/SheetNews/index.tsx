import { useRef, useState } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack";
import BottomSheet, { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RouteProp } from '@react-navigation/native';
import { ArrowLeft2, ExportCircle, Save2 } from 'iconsax-react-native';

type SheetNewsScreenProps = {
    navigation: StackNavigationProp<RootTabParamList, 'SheetNews'>;
    route: RouteProp<RootTabParamList, 'SheetNews'>
};

const SheetNews: React.FC<SheetNewsScreenProps> = ({ route, navigation }) => {

    const { category, imagePath, dateReleased, title } = route.params.news
    const sheetRef = useRef<BottomSheet>(null)

    return (
        <GestureHandlerRootView className="bg-neutral-300 flex flex-1 justify-start items-center">
            <View className='flex-1'>
                <Image
                    source={{ uri: imagePath }}
                    className='w-screen h-2/5'
                />
                <View className='w-screen h-2/5 p-5 absolute'>
                    <View className='flex flex-row justify-between'>
                        <View>
                            <TouchableOpacity onPress={() => navigation.goBack()} className='p-2 shadow-2xl rounded-lg shadow-black justify-center items-center flex bg-gray-500/60'>
                                <ArrowLeft2 size="24" color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <View className='gap-y-2'>
                            <TouchableOpacity className='p-2 shadow-2xl rounded-lg shadow-black justify-center items-center flex bg-gray-500/60'>
                                <Save2 size="24" color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={['70%', '80%']}
            >
                <BottomSheetScrollView>
                    <View className='flex px-5 pt-3'>
                        <View className='flex bg-red-500 justify-start'>
                            <Text>
                                A
                            </Text>
                        </View>
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </GestureHandlerRootView >
    )
}

export default SheetNews