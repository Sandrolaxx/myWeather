import React from "react";
import Conditions from "../../components/Conditions";
import Forecast from "../../components/Forecast";
import { ForecastData } from "../../utils/utils";
import WatherCard from "../../components/WeatherCard";
import { Container, ForecastList } from "./styles";

const myList: ForecastData[] = [
    {
      "date": "30/01",
      "weekday": "Dom",
      "max": 19,
      "min": 18,
      "description": "Chuva",
      "condition": "rain"
    },
    {
      "date": "31/01",
      "weekday": "Seg",
      "max": 19,
      "min": 18,
      "description": "Chuva",
      "condition": "rain"
    },
    {
      "date": "01/02",
      "weekday": "Ter",
      "max": 26,
      "min": 18,
      "description": "Chuvas esparsas",
      "condition": "rain"
    },
    {
      "date": "02/02",
      "weekday": "Qua",
      "max": 28,
      "min": 18,
      "description": "Parcialmente nublado",
      "condition": "cloud"
    },
    {
      "date": "03/02",
      "weekday": "Qui",
      "max": 29,
      "min": 16,
      "description": "Tempo nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "04/02",
      "weekday": "Sex",
      "max": 30,
      "min": 18,
      "description": "Tempo limpo",
      "condition": "clear_day"
    },
    {
      "date": "05/02",
      "weekday": "Sáb",
      "max": 31,
      "min": 20,
      "description": "Chuvas esparsas",
      "condition": "rain"
    },
    {
      "date": "06/02",
      "weekday": "Dom",
      "max": 32,
      "min": 20,
      "description": "Chuvas esparsas",
      "condition": "rain"
    },
    {
      "date": "07/02",
      "weekday": "Seg",
      "max": 31,
      "min": 21,
      "description": "Chuva",
      "condition": "rain"
    },
    {
      "date": "08/02",
      "weekday": "Ter",
      "max": 27,
      "min": 20,
      "description": "Chuva",
      "condition": "rain"
    }
  ];

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