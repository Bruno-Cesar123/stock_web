
import { InputHTMLAttributes } from 'react';
import { FormGroup, Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type: string;
    name: string;
    id: string;
}

export function Input({ label, type, name, id, ...props }: InputProps) {
    return (
        <FormGroup>
            <label htmlFor={id}>{label}</label>
            <Container
                type={type}
                name={name}
                id={id}
                {...props}
            />
        </FormGroup>
    )
}