import { Outlet } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/SideBar";

import { useAuth } from '../../hooks/AuthContext';
import { Container, Content } from './styles';

export function Dashboard() {
    const { user } = useAuth();

    console.log(user.name)
    return (
        <Container>   
            <Sidebar />

            <Content>
                <Header />
                <Outlet />
            </Content>
        </Container>
    )
}