import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    padding-top: 20%;
    background-color: #e8f0ff;
`

export const SearchBox = styled.View`
    align-items: center;
    flex-direction: row;
    width: 90%;
    border-radius: 12px;
`

export const InputCity = styled.TextInput`
    width: 80%;
    height: 50px;
    background-color: #fff;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    padding: 8px;
`

export const EmojiContainer = styled.View`
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 50px;
    background-color: #31cef5;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
`

export const Emoji = styled.Text`
    margin-bottom: 12px;
    font-size: 142px;
    color: black;
`

export const Title = styled.Text`
    padding: 6px;
    color: blueviolet;
`