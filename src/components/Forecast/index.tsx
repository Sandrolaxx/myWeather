import React from "react";
import { EnumEmoji, ForecastData, ForecastWeather } from "../../utils/types";
import { Container, Emoji, TextDate, TextMax, TextMin } from "./styles";

interface ForecastProps {
    data: ForecastData
}

export default function Forecast({ data }: ForecastProps) {

    const emoji = Number.parseInt(ForecastWeather[data.condition]);

    return(
        <Container>
            <TextDate>{data.date}</TextDate>
            <Emoji>{String.fromCodePoint(emoji)}</Emoji>
            <TextMin>{data.min}º</TextMin>
            <TextMax>{data.max}º</TextMax>
        </Container>
    );
}