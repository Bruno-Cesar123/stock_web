
import { InputHTMLAttributes } from 'react';
import { FormGroup, Container, ErrorMessage } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type: string;
    name: string;
    id: string;
    isError?: boolean;
    errorMessage?: string;
}

export function Input({ label, type, name, id, isError, errorMessage, ...props }: InputProps) {
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
            <ErrorMessage>{errorMessage}</ErrorMessage>
        </FormGroup>
    )
}