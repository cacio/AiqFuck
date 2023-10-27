import React,{useState,useEffect} from 'react';
import { Marker } from 'react-native-maps';
import {
    requestForegroundPermissionsAsync,
    useForegroundPermissions,
    getCurrentPositionAsync,
    LocationObject

} from 'expo-location';

import {
 Container,
 MapaLocal,
 Message
} from './styles';
import { Text } from 'react-native';
import { Header } from '@components/Header';

export function Location() {
    const [location , setLocation] = useState<LocationObject | null>(null);
    const [locationForegroundPermission,requestLocationForegroundPermission] = useForegroundPermissions();

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();
        console.log(granted);
        if(granted){
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
            console.log("localizacao atual => ",currentPosition);
        }
    }

    useEffect(()=>{
       // requestLocationForegroundPermission();
        requestLocationPermissions();
    },[])

    // if(!locationForegroundPermission?.granted){
    //     return (
    //         <Container>
    //             <Header />
    //              <Message>
    //                 Vocë precisa permitir que o aplicativo tenha acesso a localização para utilizar essa funcionalidade.
    //                 Por favor, acessas as configurações do seu dispositivo para conceder essa permissão ao aplicativo.
    //              </Message>
    //         </Container>
    //     )
    // }

 return(
   <Container>
    {
        location &&
        <MapaLocal
            initialRegion={
            {
                latitude:location.coords.latitude,
                longitude:location.coords.longitude,
                latitudeDelta:0.005,
                longitudeDelta:0.005
            }
            }
        >
            <Marker
                  coordinate={
                    {
                        latitude:location.coords.latitude,
                        longitude:location.coords.longitude,
                    }
                  }
            />

        </MapaLocal>
    }
   </Container>
  );
}