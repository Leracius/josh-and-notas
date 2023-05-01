import React, { useEffect, useState } from 'react';
import { JoshMessage, MessageBubble, TalkJosh } from './JoshStyled'

const Josh = ({message, time}) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, time);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>  
        <JoshMessage>
            {isVisible && (
                    <>
                    <MessageBubble>
                        {message}
                    </MessageBubble>
                    <TalkJosh>
                    </TalkJosh>
                    </>              
            )}
        </JoshMessage>
        </>
    );
}

export default Josh;
