import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #e8f0ff;
`

export const Title = styled.Text`
    padding: 6px;
    color: blueviolet;
`

export const ForecastList = styled.FlatList`
    margin-left: 10px;
`

export const Loading = styled.Text`
    margin-top: 64px;
    color: #0074D9;
    font-size: 28px;
    font-family: Ubuntu-M;
`