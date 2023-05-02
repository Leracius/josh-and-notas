import styled from "styled-components";
import gif from "./talk-josh.gif"

export const JoshMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
`
export const MessageBubble = styled.div`
    color: black;
    background-color: white;
    text-align: center;
    padding: 10px;
    font-weight: 600;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    &::before{
        content: "";
        position: absolute;
        border-style: solid;
        top: 60px;
        border-width: 10px;
        border-color: white transparent transparent transparent;
    }
`
export const TalkJosh = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    background-image: url(${gif});
`