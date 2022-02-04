import React from "react";
import Conditions from "../../components/Conditions";
import Forecast from "../../components/Forecast";
import WatherCard from "../../components/WeatherCard";
import { Container, ForecastList } from "./styles";
import test from "../test.json";

const myList = test;

export default function Home() {
    return (
        <Container>
            <WatherCard />
            <Conditions />
            <ForecastList 
                data={myList}
                horizontal={true}
                contentContainerStyle={{ paddingBottom: "5%" ,}}
                keyExtratctor={item => item.date}
                renderItem={({item}) => <Forecast data={item}/>}
            />
        </Container>
    );
}