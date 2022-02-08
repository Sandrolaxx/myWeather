import React, { useState } from "react";
import { Emoji } from "../../components/Conditions/styles";
import { EnumEmoji } from "../../utils/types";
import { resolveEmoji } from "../../utils/utils";
import { Container, InputCity, SearchBox, Title } from "./styles";

export default function Search() {
    const [city, setCity] = useState<string>();

    return (
        <Container>
            <SearchBox>
            <InputCity 
                value={city}
                onChangeText={value => setCity(value)}
                placeholder="Ex: Londrina, PR"
            />
            <Emoji>
                {String.fromCodePoint(EnumEmoji.SEARCH)}
            </Emoji>
            </SearchBox>
        </Container>
    );
}