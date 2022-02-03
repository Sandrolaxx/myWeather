import React from "react";
import { EnumEmoji } from "../../utils/types";
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
                <Text>5:22 AM</Text>
            </EmojiContainer>
            <EmojiContainer>
                <Emoji>{String.fromCodePoint(EnumEmoji.SUNSET)}</Emoji>
                <Text>6:10 PM</Text>
            </EmojiContainer>
            <EmojiContainer>
                <Emoji>{String.fromCodePoint(EnumEmoji.DROPLET)}</Emoji>
                <Text>65%</Text>
            </EmojiContainer>
        </Container>
    );
}