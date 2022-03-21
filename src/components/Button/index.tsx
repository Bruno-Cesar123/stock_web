
import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    value: string;
}

export function Button({ type, value, ...props }: InputProps) {
    return (
        <Container 
            type={type} 
            value={value} 
            {...props}
        />
    )
}