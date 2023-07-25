import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'RobotoSerif-ExtraLight': require('./assets/RobotoSerif-ExtraLight.ttf'),
          'RobotoSerif-Light': require('./assets/RobotoSerif-Light.ttf'),
          'RobotoSerif-Regular': require('./assets/RobotoSerif-Regular.ttf'),
          'RobotoSerif-Medium': require('./assets/RobotoSerif-Medium.ttf'),
          'RobotoSerif-Bold': require('./assets/RobotoSerif-Bold.ttf'),
          'RobotoSerif-ExtraBold': require('./assets/RobotoSerif-ExtraBold.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.log('Erro ao carregar as fontes:', error);
      }
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return (
      <>
        {/* Aqui vai ficar a tela de Loading */}
      </>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar translucent={false} animated={true} style='auto' />
      <Navigation />
    </NavigationContainer>
  );
}
