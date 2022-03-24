import { FiTrendingUp, FiTrello, FiUser } from "react-icons/fi";

import { Menu } from './styles';

export function Sidebar() {
    return (
        <Menu>
                <h2>STOCK WEB</h2>

                <ul>
                    <li>
                        <a href="#pageOne">
                            <FiTrendingUp /><span>AÇÕES</span>
                        </a>          
                    </li>
                    <li>
                        <a href="#pageTwo">
                            <FiTrello /><span>FIIS</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <FiUser /> <span>Perfil</span>
                        </a>
                    </li>
                </ul>
            </Menu>
    )
}