import styled from "styled-components/native";
import  {TouchableOpacity} from 'react-native';
import {CaretDown,MapPin } from 'phosphor-react-native';
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TouchableOpacity).attrs({
    activeOpacity:0.7

})`

    background-color: ${({theme})=>theme.colors.bgaredondabutton};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    border-width:1px;
    border-color:${({theme})=>theme.colors.roxo};
    padding: 3px 3px;
    
`;

export const ButtonSel=styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};    
    font-size: ${RFValue(14)}px;
    font-weight: bold;

`;
export const Icon=styled(CaretDown)`
    font-size: ${RFValue(20)}px;
    color: ${({theme})=>theme.colors.roxo};
`;

export const IconLocation=styled(MapPin)`
    font-size: ${RFValue(20)}px;
    color: ${({theme})=>theme.colors.roxo};
`;
