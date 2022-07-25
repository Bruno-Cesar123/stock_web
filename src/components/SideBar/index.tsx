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
                        <FiTrendingUp /><span>AÇÕES / FIIS</span>
                    </Link>
                </Li>
                {/* <Li>
                    <Link to="/dashboard/profile">
                        <FiUser /> <span>Perfil</span>
                    </Link>
                </Li> */}
            </Ul>
        </Menu>
    )
}