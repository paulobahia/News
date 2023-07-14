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
          'Nunito-ExtraLight': require('./assets/Nunito-ExtraLight.ttf'),
          'Nunito-Light': require('./assets/Nunito-Light.ttf'),
          'Nunito-Regular': require('./assets/Nunito-Regular.ttf'),
          'Nunito-Medium': require('./assets/Nunito-Medium.ttf'),
          'Nunito-Bold': require('./assets/Nunito-Bold.ttf'),
          'Nunito-ExtraBold': require('./assets/Nunito-ExtraBold.ttf'),
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
      <StatusBar hidden={true} />
      <Navigation />
    </NavigationContainer>
  );
}
