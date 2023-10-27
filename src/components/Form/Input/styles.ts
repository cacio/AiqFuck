import styled from 'styled-components/native';
import { TextInput,TouchableOpacity } from "react-native";
import { MagnifyingGlass } from 'phosphor-react-native';

import { RFValue } from 'react-native-responsive-fontsize';
export const Container = styled(TextInput)`
    width: 100%;
    padding: 16px 50px;

    padding-right: 40px;
    font-size: ${RFValue(14)}px;
    font-family : ${({theme})=>theme.fonts.medium} ;
    color: ${({theme})=>theme.colors.text_dark};
    background-color: ${({theme})=>theme.colors.background};
    border-radius: 5px ;
    border-color: ${({theme})=>theme.colors.roxo};
    border-width: 1px;
    margin-bottom: 8px;
`;

export const ButtonIcon = styled(TouchableOpacity)`
    width: 25px;
    height: 25px;
    position: absolute;
    right: 15px;
    top: 20px;
`;

export const InputContainer = styled.View`
    flex-direction: row;
`;

export const Icone = styled(MagnifyingGlass)`
    position: absolute;
    left: 0;
    z-index: 999;
    margin-top: 20px;
    margin-left: 15px;
`;