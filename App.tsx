import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular,Roboto_500Medium,Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Home } from '@screens/Home';
import theme from './src/theme';
import { Loading } from '@components/Loading';
import { Location } from '@screens/Location';
export default function App() {

 const [fontsLoaded] = useFonts({ Roboto_400Regular,Roboto_500Medium,Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Home /> : <Loading/>}

    </ThemeProvider>

  );
}