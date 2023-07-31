import { SearchNormal1 } from "iconsax-react-native";
import { Sliders, X } from "lucide-react-native";
import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native"
import { SearchRecents } from "./components";
import { useColorScheme } from "nativewind";

const Search: React.FC = () => {

  const { colorScheme } = useColorScheme();

  const [text, onChangeText] = useState('');

  return (
    <View className="bg-background-light dark:bg-background-dark flex flex-1 pb-20 pt-3 px-5 items-center">
      <View className="flex-row rounded-xl bg-background-dark dark:bg-background-light items-center justify-center mt-3">
        <View className="pl-2">
          <SearchNormal1 size={25} color={colorScheme === 'dark' ? 'black' : 'white'} variant='Bulk' />
        </View>
        <TextInput
          className="flex-1 bg-background-dark p-2 rounded-r-xl text-xs text-white dark:bg-background-light dark:text-white"
          onChangeText={onChangeText}
          value={text}
          placeholderTextColor={colorScheme === 'dark' ? 'black' : 'white'}
          placeholder="Pesquise por nóticias, categorias ou tags"
        />
        <TouchableOpacity className="pr-3">
          <Sliders size={18} color={colorScheme === 'dark' ? 'black' : 'white'} />
        </TouchableOpacity>
      </View>
      <SearchRecents />
    </View>
  )
}

export default Search