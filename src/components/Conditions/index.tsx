import React from "react";
import { EnumEmoji } from "../utils/utils";
import { Container, Emoji, EmojiContainer, Text } from "./styles";

export default function Conditions() {
    return (
        <Container>
            <EmojiContainer>
                <Emoji>{String.fromCodePoint(EnumEmoji.WIND)}</Emoji>
                <Text>7 KM/H</Text>
            </EmojiContainer>
            <EmojiContainer>
                <Emoji>{String.fromCodePoint(EnumEmoji.SUNRISE)}</Emoji>
                <Text>7 KM/H</Text>
            </EmojiContainer>
            <EmojiContainer>
                <Emoji>{String.fromCodePoint(EnumEmoji.SUNSET)}</Emoji>
                <Text>7 KM/H</Text>
            </EmojiContainer>
            <EmojiContainer>
                <Emoji>{String.fromCodePoint(EnumEmoji.SUN_BEHIND_CLOUD)}</Emoji>
                <Text>7 KM/H</Text>
            </EmojiContainer>
        </Container>
    );
}