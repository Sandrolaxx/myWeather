import React from "react";
import { ForecastWeather, WeatherProps } from "../../utils/types";
import { Emoji, GradientContainer, TextCity, TextDate, TextTemp } from "./styles";

export default function WatherCard({weather}: WeatherProps) {
    const emoji = Number.parseInt(ForecastWeather[weather.condition_slug]);

    return (
        <GradientContainer colors={["#31cef5", "#0074D9"]} >
            <TextDate>{weather.date}</TextDate>
            <TextCity>{weather.city}</TextCity>
            <Emoji>
                {String.fromCodePoint(emoji)}
            </Emoji>
            <TextTemp>{weather.temp}</TextTemp>
        </GradientContainer>
    );
}