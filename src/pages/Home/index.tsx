import React from "react";
import Conditions from "../../components/Conditions";
import WatherCard from "../../components/WeatherCard";
import { Container } from "./styles";

export default function Home() {
    return (
        <Container>
            <WatherCard />
            <Conditions />
        </Container>
    );
}