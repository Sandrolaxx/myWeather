import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

export const GradientContainer = styled(LinearGradient)`
    height: 56%;
    width: 90%;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 16px;
    margin-top: 72px;
`

export const TextDate = styled.Text`
    color: #F0F0F0;
    font-size: 18px;
    font-family: Ubuntu-R;
`

export const TextCity = styled.Text`
    margin-bottom: 16px;
    color: #F0F0F0;
    font-size: 28px;
    font-family: Ubuntu-M;
    `

export const TextTemp = styled.Text`
    color: #F0F0F0;
    font-size: 68px;
    font-family: Ubuntu-B;
`

export const Emoji = styled.Text`
    margin-bottom: 12px;
    font-size: 142px;
    color: black;
`