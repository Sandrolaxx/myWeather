import React from "react";
import { EnumEmoji } from "../../utils/types";
import { Emoji, GradientContainer, TextCity, TextDate, TextTemp, } from "./styles";

export default function WatherCard() {
    return (
        <GradientContainer colors={["#31cef5", "#0074D9"]} >
            <TextDate>01/02/2022</TextDate>
            <TextCity>Cascavel-PR</TextCity>
            <Emoji>
                {String.fromCodePoint(EnumEmoji.SUN_BEHIND_CLOUD)}
            </Emoji>
            <TextTemp>23º</TextTemp>
        </GradientContainer>
    );
}