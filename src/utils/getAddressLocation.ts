import { reverseGeocodeAsync,LocationObjectCoords } from 'expo-location';

const stateAbbreviations: Record<string, string> = {
    "Acre": "AC",
    "Alagoas": "AL",
    "Amapá": "AP",
    "Amazonas": "AM",
    "Bahia": "BA",
    "Ceará": "CE",
    "Distrito Federal": "DF",
    "Espírito Santo": "ES",
    "Goiás": "GO",
    "Maranhão": "MA",
    "Mato Grosso": "MT",
    "Mato Grosso do Sul": "MS",
    "Minas Gerais": "MG",
    "Pará": "PA",
    "Paraíba": "PB",
    "Paraná": "PR",
    "Pernambuco": "PE",
    "Piauí": "PI",
    "Rio de Janeiro": "RJ",
    "Rio Grande do Norte": "RN",
    "Rio Grande do Sul": "RS",
    "Rondônia": "RO",
    "Roraima": "RR",
    "Santa Catarina": "SC",
    "São Paulo": "SP",
    "Sergipe": "SE",
    "Tocantins": "TO"
};
export async function getAddressLocation({ latitude,longitude } :LocationObjectCoords){
    try {
         const addressResponse = await reverseGeocodeAsync({latitude,longitude});

         const region = addressResponse[0].region; // Nome completo do estado


        let stateAbbreviation = region; // Inicialize com o nome completo do estado

        if (region && stateAbbreviations.hasOwnProperty(region)) {
            stateAbbreviation = stateAbbreviations[region];
        }

         const addressData = {
            city: addressResponse[0].city,
            country: addressResponse[0].country,
            district: addressResponse[0].district,
            isoCountryCode: addressResponse[0].isoCountryCode,
            name: addressResponse[0].name,
            postalCode: addressResponse[0].postalCode,
            region: stateAbbreviation,
            street: addressResponse[0].street,
            streetNumber: addressResponse[0].streetNumber,
            subregion: addressResponse[0].subregion,
            timezone: addressResponse[0].timezone
        };
        return addressData;
    } catch (error) {
        console.log(error);
    }
}