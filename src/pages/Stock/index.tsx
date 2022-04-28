import { Link } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';
import { Card } from '../../components/Card';
import { Container, ButtonNewCard } from './styles';

export function Stock() {
    return (

        <Container>
            <Card />
            <Card />
            <Card />
            <Card />
            <ButtonNewCard>
                <Link to='/dashboard/new-stock'>
                    <FiPlusCircle />
                </Link>
            </ButtonNewCard> 
            
        </Container>
    )
}