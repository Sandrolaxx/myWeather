import React from "react";
import { EmojiEnum } from "../utils/utils";
import { Container, Emoji, EmojiContainer, Text } from "./styles";

export default function Conditions() {
    return (
        <Container>
            <EmojiContainer>
                <Emoji>{EmojiEnum.test}</Emoji>
                <Text>7 KM/H</Text>
            </EmojiContainer>
            <EmojiContainer>
                <Emoji>{}</Emoji>
                <Text>7 KM/H</Text>
            </EmojiContainer>
            <EmojiContainer>
                <Emoji>😁</Emoji>
                <Text>7 KM/H</Text>
            </EmojiContainer>
            <EmojiContainer>
                <Emoji>{String.fromCodePoint(0x1F304)}</Emoji>
                <Text>7 KM/H</Text>
            </EmojiContainer>
        </Container>
    );
}