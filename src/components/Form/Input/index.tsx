import React from 'react';
import { TextInputProps,Text } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { Container,ButtonIcon,InputContainer,Icone } from './styles';


type Props = TextInputProps;
interface InputProps extends  TextInputProps{
    bIcon :boolean;
    onPress:()=>void;
}
export function Input({bIcon,onPress, ...rest }:InputProps){
    return(
        <InputContainer>
            <Icone color='#5D0AFF' />
            <Container {...rest} placeholderTextColor="#969CB3" />
            {
                bIcon &&  <ButtonIcon onPress={onPress} ><Text><FontAwesome name='qrcode' size={24} color='#fff' /></Text></ButtonIcon>
            }
        </InputContainer>
    );
}