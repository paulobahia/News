import { Pressable, Text, TouchableOpacity, View } from "react-native"

import { styled, useColorScheme } from "nativewind";

const StyledPressable = styled(Pressable)
const StyledText = styled(Text)

const Search: React.FC = () => {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <StyledPressable
        onPress={toggleColorScheme}
        className="flex-1 items-center justify-center dark:bg-background-reading"
      >
        <StyledText
          selectable={false}
          className="dark:text-black"
        >
          {`Try clicking me! ${colorScheme === "dark" ? "🌙" : "🌞"}`}
        </StyledText>
      </StyledPressable>
    )
}

export default Search