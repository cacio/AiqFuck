import React, { useState,useEffect } from 'react';

import { SelectButton } from '@components/Form/SelectButton';
import {
 Container,
 HeaderContainer,
 HeaderSelectLocal,
 HeaderRigthButtons,
 ButtonHeader,
 IconSearch,
 IconFilter,
 IconPerfil,
 ContentLocation,
 LocationHeader,
 BackIcon,
 TextLocation,
 BackButton,
 Content,
 LocalUserContainer,
 IconeLocal,
 IconeMaps,
 InfoLocartion,
 Title,
 Nome,
 LocationSession,
 IconlocatioContanerSession,
 IconlocationSession,
 LocationSessionCotainer,
 Cidade,
 Descricao,
 LocationSessionButtons,
 IconCheck,
 Options,
 ContainerIconCheck,
 CotainerOptions,
 Message
} from './styles';
import { Alert, Modal, Text } from 'react-native';
import {
  useForegroundPermissions,
  watchPositionAsync,
  LocationAccuracy,
  LocationSubscription

} from 'expo-location';


import { Input } from '@components/Form/Input';
import { getAddressLocation } from '@utils/getAddressLocation';
import { Loading } from '@components/Loading';

export function Header() {
    const [modalVisible, setModalVisible] = useState(false);
    const [locationForegroundPermission,requestLocationForegroundPermission] = useForegroundPermissions();
    const [isLoadingLocation,setisLoadingLocation] = useState(true);
    const [currentAddress,setcurrentAddress] =useState<String | null>(null);
    
    useEffect(()=>{
      requestLocationForegroundPermission();
    },[]);

    useEffect(()=>{

      if(!locationForegroundPermission?.granted){
        return;
      }

      let subscription:LocationSubscription;

      watchPositionAsync({
        accuracy:LocationAccuracy.High,
        timeInterval:1000
      },(location)=>{

        getAddressLocation(location.coords).then((address)=>{
          console.log(address);
          if(address?.subregion){
            setcurrentAddress(`${address?.subregion} - ${address?.region}`);
          }
        });
      }).then(response =>{subscription = response})
      .finally(()=>setisLoadingLocation(false));

      return () => {
        if(subscription){
          subscription.remove()
        }
      };

    },[locationForegroundPermission])

 return(

        <Container>
                <HeaderContainer>
                    <HeaderSelectLocal>
                        <SelectButton title={String(currentAddress)} onPress={()=>setModalVisible(true)} />
                    </HeaderSelectLocal>
                    <HeaderRigthButtons>
                        <ButtonHeader>
                            <IconSearch size={24}  color='#5D0AFF' />
                        </ButtonHeader>
                        <ButtonHeader>
                            <IconFilter size={24}  color='#5D0AFF' />
                        </ButtonHeader>
                        <ButtonHeader>
                            <IconPerfil size={24}  color='#5D0AFF' />
                        </ButtonHeader>
                    </HeaderRigthButtons>
                </HeaderContainer>


                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    }}>


                    <ContentLocation>
                           <LocationHeader>
                                <BackButton onPress={()=>setModalVisible(false)}>
                                    <BackIcon color='#5D0AFF' size={28}/>
                                </BackButton>
                                <TextLocation>CIDADE DA TREPA</TextLocation>
                           </LocationHeader>
                           <Content>
                                <Input bIcon={false} onPress={()=>{}} placeholder='Endreço ou cidade' />
                                {
                                  !locationForegroundPermission?.granted ?
                                  <Message>
                                  Você precisa permitir que o aplicativo tenha acesso a localização para utilizar essa funcionalidade.
                                  Por favor, acessas as configurações do seu dispositivo para conceder essa permissão ao aplicativo.
                                  </Message> :
                                    isLoadingLocation ? <Loading /> :
                                        <LocalUserContainer>
                                        <IconeLocal>
                                            <IconeMaps  color='#5D0AFF' />
                                        </IconeLocal>
                                        <InfoLocartion>
                                            <Title>Usar Localização atual</Title>
                                            <Nome>{currentAddress}</Nome>
                                        </InfoLocartion>
                                    </LocalUserContainer>
                                }

                           </Content>

                           <LocationSession>
                                <IconlocatioContanerSession>
                                    <IconlocationSession color='#5D0AFF' />
                                </IconlocatioContanerSession>
                                <LocationSessionCotainer>
                                    <Cidade>Três de Maio - RS</Cidade>
                                    <Descricao>Local aonde eu vou quando viajo</Descricao>
                                </LocationSessionCotainer>
                                <LocationSessionButtons>
                                    <ContainerIconCheck>
                                        <IconCheck color='#12A454' />
                                    </ContainerIconCheck>
                                    <CotainerOptions>
                                        <Options color='#5D0AFF' />
                                    </CotainerOptions>

                                </LocationSessionButtons>

                            </LocationSession>
                    </ContentLocation>
                </Modal>
        </Container>
  );
}