
import { InputHTMLAttributes } from 'react';
import { FormGroup, Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type: string;
    name: string;
    id: string;
    isError?: boolean;
}

export function Input({ label, type, name, id, isError, ...props }: InputProps) {
    return (
        <FormGroup>
            <label htmlFor={id}>{label}</label>
            <Container
                invalid={!!isError}
                type={type}
                name={name}
                id={id}
                {...props}
            />
        </FormGroup>
    )
}