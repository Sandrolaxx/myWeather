import React from "react";
import { CardProps } from "../../utils/types";
import { resolveBgColorCard, resolveEmoji } from "../../utils/utils";
import { Emoji, GradientContainer, TextCity, TextDate, TextTemp } from "./styles";

export default function WatherCard({weather, renderEmoji}: CardProps ) {
    const emoji = resolveEmoji(weather.condition_slug); 
    const containerColor = resolveBgColorCard(weather.currently);

    return (
        renderEmoji ? 
            <GradientContainer colors={containerColor}>
                <TextDate>{weather.date}</TextDate>
                <TextCity>{weather.city}</TextCity>
                <Emoji>
                    {emoji}
                </Emoji>
                <TextTemp>{weather.temp}º</TextTemp>
            </GradientContainer>
            :
            <GradientContainer small colors={containerColor} >
                <TextDate>{weather.date}</TextDate>
                <TextCity small>{weather.city}</TextCity>
                <TextTemp small>{weather.temp}º</TextTemp>
            </GradientContainer>

    );
}