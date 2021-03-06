import Location, { GeolocationResponse } from "@react-native-community/geolocation";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import Conditions from "../../components/Conditions";
import Forecast from "../../components/Forecast";
import WatherCard from "../../components/WeatherCard";
import { fetchWeather } from "../../services/api";
import { WeatherData } from "../../utils/types";
import { Container, ForecastList, Loading } from "./styles";

export default function Home() {
    const [isLoading, setLoading] = useState(true);
    const [weather, setWeather] = useState<WeatherData>();
    const defaultLatitude = "-24.9636888";
    const defaultLongitude = "-53.5073711";

    async function callbakcFetchWeather(position: GeolocationResponse | null) {
        const latitude = position !== null ? position.coords.latitude.toString() : defaultLatitude;
        const longitude = position !== null ? position.coords.longitude.toString() : defaultLongitude;

        await fetchWeather(latitude, longitude)
            .then(res => setWeather(res!))
            .catch(() => {
                Alert.alert("Ouve um erro ao buscar os dados de sua localidade!");
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        Location.getCurrentPosition(
            position => callbakcFetchWeather(position),
            error => {
                Alert.alert("Acesso a localização negada, buscando dados cidade padrão.");
                callbakcFetchWeather(null);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }, []);

    return (
        !isLoading && weather !== undefined ? 
            <Container>
                <WatherCard weather={weather!} renderEmoji={true} />
                <Conditions weather={weather!} />
                <ForecastList
                    horizontal={true}
                    data={weather!.forecast}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: "5%", }}
                    keyExtratctor={item => item.date}
                    renderItem={({ item }) => <Forecast data={item} />}
                />
            </Container>
            :
            <Container>
                <Loading>Carregando...</Loading>
            </Container>
    );
}