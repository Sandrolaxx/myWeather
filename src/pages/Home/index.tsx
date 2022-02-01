import React from "react";
import WatherCard from "../../components/WeatherCard";
import { Container } from "./styles";

export default function Home() {
    return (
        <Container>
            <WatherCard />
        </Container>
    );
}