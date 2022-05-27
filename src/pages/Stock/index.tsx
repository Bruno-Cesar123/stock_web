import { Link } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';
import { Card } from '../../components/Card';
import { Container, ButtonNewCard } from './styles';
import { useEffect, useState } from 'react';
import api from '../../services/api';

interface Stocks {
    id: string;
    name: string;
    average_price: number;
    sales_price: number;
    quantity: number;
}

export function Stock() {
    const [stocks, setStocks] = useState<Stocks[]>([]);

    useEffect(() => {
        api.get<Stocks[]>('stocks').then((response) => {
            setStocks(response.data)
        })
    }, [])


    return (

        <Container>
            {stocks.map(stock => (
                <Card 
                    key={stock.id} 
                    name={stock.name}
                    quantity={stock.quantity}
                    average_price={
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                      }).format(stock.average_price / 100)}
                      sales_price={
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                      }).format(stock.sales_price / 100)}
                />
            ))}
            
            <ButtonNewCard>
                <Link to='/dashboard/new-stock'>
                    <FiPlusCircle />
                </Link>
            </ButtonNewCard> 
            
        </Container>
    )
}