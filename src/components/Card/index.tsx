import { Container, CardHeader, CardBody } from './styles';

interface CardProps {
    name: string;
    quantity: number;
    average_price: string;
    sales_price: string;
}

export function Card({ name, quantity, average_price, sales_price }: CardProps) {
    return (
        <Container>
            <CardHeader>
                <h1>{name}</h1>
            </CardHeader>
            <CardBody>
                <p>Quantidade: <span>{quantity}</span></p>
                <p>Preço de compra: <span>{average_price}</span></p>
                <p>Preço de venda: <span>{sales_price}</span></p>
            </CardBody>
        </Container>
    )
}