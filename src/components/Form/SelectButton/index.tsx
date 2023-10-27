import React from "react";

import {Container,Icon,ButtonSel,IconLocation} from './styles';

interface Props{
    title:string;
    onPress:()=>void;
}

export function SelectButton({title,onPress}: Props){
    return (
        <Container onPress={onPress}>
            <IconLocation size={24}  color='#5D0AFF' />
            <ButtonSel>
                {title}
            </ButtonSel>
            <Icon size={24}  color='#5D0AFF' />
        </Container>
    );
}