import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.View`
 flex: 1;
`;

export const MapaLocal = styled(MapView)`
    flex: 1;
    width: 100%;
`;

export const Message = styled.Text`
    color: ${({theme})=>theme.colors.text_dark};
    font-family:${({theme})=>theme.fonts.bold};
    text-align: center;
    margin-top: 24px;
`;