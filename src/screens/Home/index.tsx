import React, {useRef} from 'react';
import { Header } from '@components/Header';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
 Container,
 Nome
} from './styles';

export function Home() {

   return(
  <GestureHandlerRootView>
   <Container>
      <Header />
      <Nome>Nome</Nome>
   </Container>

   </GestureHandlerRootView>
  );
}