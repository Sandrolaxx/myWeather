import React, { useState } from "react";
import { Alert, Keyboard } from "react-native";
import Conditions from "../../components/Conditions";
import { Emoji } from "../../components/Conditions/styles";
import WatherCard from "../../components/WeatherCard";
import { fetchCityWeather } from "../../services/api";
import { EnumEmoji, FullResponseWeather } from "../../utils/types";
import { Container, EmojiContainer, InputCity, SearchBox } from "./styles";

export default function Search() {
    const [city, setCity] = useState<string>();
    const [cityWeather, setCityWeather] = useState<FullResponseWeather>();

    async function handleSearch(city: string) {
        if (city == undefined
            || city.length === 0) {
            Alert.alert("Informe uma cidade válida! 🤡");
            Keyboard.dismiss();
             
            setCityWeather(undefined);
            setCity(undefined);
            return;
        }

        await fetchCityWeather(city)
            .then(data => {
                const fullWeather: FullResponseWeather = data;

                if (fullWeather.by === "default") {
                    Alert.alert("Cidade informada não encontrada! 😢");
                    setCityWeather(undefined);
                    setCity(undefined);
                    return;
                } else {
                    setCityWeather(data);
                }

                Keyboard.dismiss();
            })
            .catch(() => {
                Alert.alert("Erro ao buscar os dados da cidade! 😓");
            });
    }

    return (
        <Container>
            <SearchBox>
                <InputCity
                    value={city}
                    onChangeText={value => setCity(value)}
                    placeholder=" Ex: Londrina, PR "
                />
                <EmojiContainer onPress={() => handleSearch(city!)}>
                    <Emoji>
                        {String.fromCodePoint(EnumEmoji.SEARCH)}
                    </Emoji>
                </EmojiContainer>
            </SearchBox>
            {cityWeather != undefined && 
                <>
                <WatherCard weather={cityWeather.results} renderEmoji={false} />
                <Conditions weather={cityWeather.results} />
                </>
            }
        </Container>
            
        
    );
}