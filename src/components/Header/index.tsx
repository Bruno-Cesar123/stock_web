
import { FiPower } from 'react-icons/fi'
import { Container } from './styles';

export function Header() {
    return (
        <Container>
            <h3>DASHBOARD</h3>
            <div>
                <FiPower size={24} color='#FFFFFF' />
                <img src="https://picsum.photos/200/300" alt="Avatar" />
            </div>
        </Container>
    )
}