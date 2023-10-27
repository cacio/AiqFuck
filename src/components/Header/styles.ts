import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MagnifyingGlass,SlidersHorizontal,UserCircle,CaretLeft,Crosshair,ClockCounterClockwise,CheckCircle,DotsThreeVertical  } from 'phosphor-react-native';
export const Container = styled.View`
    width:100%;
    height: ${RFPercentage(12)}px;
    background-color:${({theme})=> theme.colors.background} ;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

`;

export const HeaderContainer = styled.View`
    width:100%;
    padding: 0 24px;
    margin-top: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderSelectLocal = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
`;

export const HeaderRigthButtons = styled.View`
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
`;

export const ButtonHeader = styled.TouchableOpacity`
    width: 36px;
    height: 36px;
    background: ${({theme})=>theme.colors.bgaredondabutton};
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-weight: bold;
    margin: 5px 5px;
`;

export const IconSearch = styled(MagnifyingGlass)``;

export const IconFilter = styled(SlidersHorizontal)``;

export const IconPerfil = styled(UserCircle)``;

export const ContentLocation  = styled.View`
    flex: 1;
    height: 50px;
    background: ${({theme})=> theme.colors.shape};
`;

export const LocationHeader = styled.View`
    background-color:${({theme})=> theme.colors.background} ;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 5px 10px 5px;

`;
export const BackButton = styled.TouchableOpacity`
    flex: 1;
    margin-left: 10px;
`;
 export const BackIcon = styled(CaretLeft)``;

export const TextLocation = styled.Text`
    text-align: center;
    margin-right: 30%;
    font-size: 18px;
    font-family: ${({theme})=> theme.fonts.bold};
 `;

 export const Content = styled.View`
    background-color:${({theme})=> theme.colors.background} ;
    padding: 5px 8px;
 `;

export const LocalUserContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 10px;
`;

export const IconeLocal = styled.View``;

export const IconeMaps = styled(Crosshair)`
    margin: 10px 10px;
`;

export const InfoLocartion = styled.View``;

export const Title = styled.Text`
    font-family: ${({theme})=> theme.fonts.bold};
    font-size: 16px;
`;

export const Nome = styled.Text`
    font-family: ${({theme})=> theme.fonts.medium};
    color: ${({theme})=> theme.colors.text};
    font-size: 14px;
`;


export const LocationSession =styled.View`
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    padding: 10px 10px;
    margin: 10px;
    border-width: 1px;
    border-color: ${({theme})=> theme.colors.roxo};
    border-radius: 10px;
`;

export const IconlocatioContanerSession =styled.View`
    width: 0px;
`;
export const IconlocationSession =styled(ClockCounterClockwise)`
    margin: 10px 10px;
`;
export const LocationSessionCotainer =styled.View``;
export const Cidade =styled.Text`
    font-family: ${({theme})=> theme.fonts.bold};
    color: ${({theme})=> theme.colors.text_dark};
    font-size: 16px;
`;
export const Descricao =styled.Text`
    font-family: ${({theme})=> theme.fonts.medium};
    color: ${({theme})=> theme.colors.text};
    font-size: 14px;
`;
export const LocationSessionButtons =styled.View`
     flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const ContainerIconCheck = styled.View``;
export const CotainerOptions = styled.TouchableOpacity``;

export const IconCheck =styled(CheckCircle)``;
export const Options =styled(DotsThreeVertical)``;

export const Message = styled.Text`
    color: ${({theme})=>theme.colors.text_dark};
    font-family:${({theme})=>theme.fonts.bold};
    text-align: center;
    margin-top: 24px;
`;