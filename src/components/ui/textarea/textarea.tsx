import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<TextAreaProps> = (props) => {
    return (
        <textarea
            {...props}
            className={`rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary ${props.className || ''}`}
        />
    );
};

export default TextArea;