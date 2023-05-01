import styled from "styled-components";
import gif from "./talk-josh.gif"

export const JoshMessage = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    bottom: 0px;
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
    margin: 5px;
    &::before{
        content: "";
        position: absolute;
        border-style: solid;
        top: 56px;
        border-width: 10px;
        border-color: white transparent transparent transparent;
    }
`
export const TalkJosh = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    z-index: 100;
    background-image: url(${gif});
`