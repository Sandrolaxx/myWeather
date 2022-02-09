import React from "react";
import { EnumEmoji, ConditionProps } from "../../utils/types";
import { Container, Emoji, EmojiContainer, Text } from "./styles";

export default function Conditions({weather}: ConditionProps) {
    return (
        <Container>
            <EmojiContainer>
                <Emoji>{String.fromCodePoint(EnumEmoji.WIND)}</Emoji>
                <Text>{weather.wind_speedy}</Text>
            </EmojiContainer>
            <EmojiContainer>
                <Emoji>{String.fromCodePoint(EnumEmoji.SUNRISE)}</Emoji>
                <Text>{weather.sunrise}</Text>
            </EmojiContainer>
            <EmojiContainer>
                <Emoji>{String.fromCodePoint(EnumEmoji.SUNSET)}</Emoji>
                <Text>{weather.sunset}</Text>
            </EmojiContainer>
            <EmojiContainer>
                <Emoji>{String.fromCodePoint(EnumEmoji.DROPLET)}</Emoji>
                <Text>{weather.humidity}</Text>
            </EmojiContainer>
        </Container>
    );
}