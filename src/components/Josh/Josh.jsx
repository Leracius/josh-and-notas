import React, { useEffect, useState } from 'react';
import { JoshMessage, MessageBubble, TalkJosh } from './JoshStyled'

const Josh = ({message}) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <JoshMessage>
                    <MessageBubble>
                        {message}
                    </MessageBubble>
                    <TalkJosh>
                    </TalkJosh>
                </JoshMessage>
            )}
        </>
    );
}

export default Josh;
