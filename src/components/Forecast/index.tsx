import React from "react";
import { EnumEmoji, ForecastData } from "../../utils/types";
import { Container, Emoji, TextDate, TextMax, TextMin } from "./styles";

interface ForecastProps {
    data: ForecastData
}

export default function Forecast({ data }: ForecastProps) {
    return(
        <Container>
            <TextDate>{data.date}</TextDate>
            <Emoji>{String.fromCodePoint(EnumEmoji.SUNSET)}</Emoji>
            <TextMin>{data.min}º</TextMin>
            <TextMax>{data.max}º</TextMax>
        </Container>
    );
}