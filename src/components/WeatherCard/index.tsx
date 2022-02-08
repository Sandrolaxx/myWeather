import React from "react";
import { WeatherProps } from "../../utils/types";
import { resolveBgColorCard, resolveEmoji } from "../../utils/utils";
import { Emoji, GradientContainer, TextCity, TextDate, TextTemp } from "./styles";

export default function WatherCard({weather}: WeatherProps) {
    const emoji = resolveEmoji(weather.condition_slug); 
    const containerColor = resolveBgColorCard(weather.currently);

    return (
        <GradientContainer colors={containerColor} >
            <TextDate>{weather.date}</TextDate>
            <TextCity>{weather.city}</TextCity>
            <Emoji>
                {emoji}
            </Emoji>
            <TextTemp>{weather.temp}º</TextTemp>
        </GradientContainer>
    );
}