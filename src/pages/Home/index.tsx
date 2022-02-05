import React, { useEffect } from "react";
import Conditions from "../../components/Conditions";
import Forecast from "../../components/Forecast";
import WatherCard from "../../components/WeatherCard";
import Location from "@react-native-community/geolocation";
import { Container, ForecastList } from "./styles";
import test from "../test.json";
import { Alert } from "react-native";

const myList = test;

export default function Home() {

    useEffect(() => {
        Location.getCurrentPosition(
            (position) => {
                console.log(position);
            },
            (error) => Alert.alert('Error', JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }, [])

    return (
        <Container>
            <WatherCard />
            <Conditions />
            <ForecastList
                data={myList}
                horizontal={true}
                contentContainerStyle={{ paddingBottom: "5%", }}
                keyExtratctor={item => item.date}
                renderItem={({ item }) => <Forecast data={item} />}
            />
        </Container>
    );
}