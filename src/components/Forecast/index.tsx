import React from "react";
import { ForecastData } from "../../utils/types";
import { resolveEmoji } from "../../utils/utils";
import { Container, Emoji, TextDate, TextMax, TextMin } from "./styles";

interface ForecastProps {
    data: ForecastData
}

export default function Forecast({ data }: ForecastProps) {
    const emoji = resolveEmoji(data.condition.toString()); 

    return(
        <Container>
            <TextDate>{data.date}</TextDate>
            <Emoji>{emoji}</Emoji>
            <TextMin>{data.min}º</TextMin>
            <TextMax>{data.max}º</TextMax>
        </Container>
    );
}