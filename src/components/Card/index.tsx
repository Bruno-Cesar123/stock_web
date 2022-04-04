import { Container, CardHeader, CardBody } from './styles';

export function Card() {
    return (
        <Container>
            <CardHeader>
                <h1>PRIO3</h1>
            </CardHeader>
            <CardBody>
                <p>Quantidade: <span>1000</span></p>
                <p>Preço de compra: <span>R$500,00</span></p>
                <p>Preço de venda: <span>R$500,00</span></p>
            </CardBody>
        </Container>
    )
}