
import { FiPower } from 'react-icons/fi'
import { Container } from './styles';
import { useAuth } from '../../hooks/AuthContext';

export function Header() {
    const { signOut } = useAuth()

    return (
        <Container>
            <h3>DASHBOARD</h3>
            <div>
                <FiPower size={24} color='#FFFFFF' onClick={signOut} style={{ cursor: 'pointer' }}/>
                <img src="https://picsum.photos/200/300" alt="Avatar" />
            </div>
        </Container>
    )
}