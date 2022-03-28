import { Link } from 'react-router-dom'
import { FiTrendingUp, FiTrello, FiUser } from "react-icons/fi";

import { Menu, Ul, Li } from './styles';

export function Sidebar() {
    return (
        <Menu>
            <h2>STOCK WEB</h2>

            <Ul>
                <Li>
                    <Link to="/dashboard/stock">
                        <FiTrendingUp /><span>AÇÕES</span>
                    </Link>
                </Li>
                <Li>
                    <Link to="/dashboard/fiis">
                        <FiTrello /><span>FIIS</span>
                    </Link>
                </Li>
                <Li>
                    <a href="/">
                        <FiUser /> <span>Perfil</span>
                    </a>
                </Li>
            </Ul>
        </Menu>
    )
}